import mongoose from "mongoose";

const subscriptionsSchema = new mongoose.Schema({
    name :{
        type: String,
        required: [true, 'Subscription name is required'],
        trim: true,
        minlength: [3, 'Subscription name must be at least 3 characters long'],
        maxlength: [100, 'Subscription name must be at most 50 characters long']
    },
    prices :{
        type: Number,
        required: [true, 'Subscription price is required'],
        min: [0, 'Subscription price must be a positive number'],
        max: [100000, 'Subscription price must be at most 100000']
    },
    currency: {
        type: String,
        required: [true, 'Subscription currency is required'],
        trim: true,
        default: 'USD',
        enum: ['USD', 'EUR', 'GBP', 'INR'], // Add more currencies as needed
    },
    frequency: {
        type: String,
        required: [true, 'Subscription frequency is required'],
        trim: true,
        enum: ['daily','weekly','monthly', 'yearly'], // Add more frequencies as needed
    },
    category: {
        type: String,
        required: [true, 'Subscription category is required'],
        trim: true,
        enum: ['basic', 'premium', 'enterprise'], // Add more categories as needed
    },
    paymentMethod: {
        type: String,
        required: [true, 'Payment method is required'],
        trim: true,
        enum: ['credit_card', 'paypal', 'bank_transfer'], // Add more payment methods as needed
    },
    status: {
        type: String,
        required: [true, 'Subscription status is required'],
        trim: true,
        enum: ['active', 'inactive', 'cancelled'], // Add more statuses as needed
        default: 'active',
    },
    startDate: {
        type: Date,
        required: [true, 'Subscription start date is required'],
        default: Date.now,
        validate : {
            validator: (value)=>value <= Date.now(),
            message: 'Start date cannot be in the future'
        }
    },
      renewalDate: {
        type: Date,
        required: [true, 'Subscription start date is required'],
        default: Date.now,
        validate : {
            validator: function (value) {
               return value > this.startDate;},
            message: 'new date must be after the startr date'
        }
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'User ID is required'],
        index: true
    },
}, {timestamps: true});

subscriptionsSchema.pre('save', function(next) {
    // Ensure that renewalDate is always after startDate
    if (!this.renewalDate) {
        const renewalPeroids = {
            daily: 1,
            weekly: 7,
            monthly: 30,
            yearly: 365
        };
        this.renewalDate =new Date(this.startDate); 
        this.renewalDate.setDate(this.renewalDate.getDate() + renewalPeroids[this.frequency]);
    }
    if (this.renewalDate < new Date()) {
        return this.status (new Error('subscription has expired'));
    }
    next()
    
});

const Subscription = mongoose.model('Subscription', subscriptionsSchema);
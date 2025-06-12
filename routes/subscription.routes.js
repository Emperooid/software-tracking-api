import { Router } from "express";

const subscriptionRouter = Router();


subscriptionRouter.get('/', (req, res) => res.send({ title: 'GET all subscriptions' }));

subscriptionRouter.get('/:id', (req, res) => res.send({ title: 'GET subscriptions' }));

subscriptionRouter.post('/', (req, res) => res.send({ title: 'CREATE new subscription' }));

subscriptionRouter.put('/:id', (req, res) => res.send({ title: 'UPDATE subscription' }));

subscriptionRouter.delete('/:id', (req, res) => res.send({ title: 'DELETE subscription' }));

subscriptionRouter.get('/user/:id/', (req, res) => res.send({ title: 'GET all user subscription' }));

subscriptionRouter.post('/:id/activate', (req, res) => res.send({ title: 'ACTIVATE subscription' }));

subscriptionRouter.post('/:id/deactivate', (req, res) => res.send({ title: 'DEACTIVATE subscription' }));

subscriptionRouter.get('/:id/upcoming-renewals', (req, res) => res.send({ title: 'GET upcoming subscription' }));

subscriptionRouter.put('/:id/cancel', (req, res) => res.send({ title: 'CANCEL subscription' }));



export default subscriptionRouter;
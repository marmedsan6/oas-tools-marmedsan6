import * as service from '../services/jobsService.js';

export function getJobss(req, res) {
    service.getJobss(req, res);
}

export function findByprovince(req, res) {
    service.findByprovince(req, res);
}


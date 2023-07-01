import { TestBed } from '@angular/core/testing';

// TODO: fix this test

import { HomeApi } from './home.api';

describe('HomeApi', () => {
    let api: HomeApi;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        api = TestBed.inject(HomeApi);
    });

    it('should be created', () => {
        expect(api).toBeTruthy();
    });
});

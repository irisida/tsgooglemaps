import * as faker from 'faker';

import { Mappable } from './CustomMap';

export class Company implements Mappable {
    name: string;
    catchphrase: string;
    location: {
        lat: number;
        lng: number;
    };
    color: string = 'black';

    constructor() {
        this.name = faker.company.companyName();
        this.catchphrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude()),
        };
    }

    markerContent(): string {
        return `
        <div>
            <h2>${this.name}</h2> 
            <h3>${this.catchphrase}</h3>
        </div>
        `;
    }
}

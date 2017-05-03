import { Injectable } from '@angular/core';
const lunr = require('elasticlunr');

export interface SearchConfig {
  fields: {
    
  }
}

@Injectable()
export class ElasticlunrService {

  lunrInstance: any;

  constructor() {
    this.lunrInstance = lunr();
    // this.index.addField('title');
    // this.index.addField('body');
    // this.index.setRef('id');
  }

  addIndices(indeces: string[]): void {
    indeces.forEach((idx) => {
      this.lunrInstance.addField(idx);
    });
  }

  setRef(ref: string): void {
    this.lunrInstance.setRef(ref);
  }

  addData(data: any) {
    this.lunrInstance.addDoc(data);
  }

  removeData() {

  }

  search(query: string, config?: any): any {

  }
}
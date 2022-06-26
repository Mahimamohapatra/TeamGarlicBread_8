import { Injectable } from '@angular/core';
import { Visitor } from '../shared/visitor';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  visitorsRef!: AngularFireList<any>;
  visitorRef!: AngularFireObject<any>;


  constructor(private db: AngularFireDatabase) { }

  // Create Visitor
  AddVisitor(visitor: Visitor) {
    this.visitorsRef.push({
      name: visitor.name,
      email: visitor.email,
      phone: visitor.phone,
      date: visitor.date,
      ticketSize: visitor.ticketSize,
    });
  }


  //Fetch Single Visitor Object
  GetVisitor(id: string) {
    this.visitorRef = this.db.object('visitors-list/' + id);
    return this.visitorRef;
  }

  //Fetch Visitors list
  GetVisitorsList() {
    this.visitorsRef= this.db.list('visitors-list');
    return this.visitorsRef;
  }
}

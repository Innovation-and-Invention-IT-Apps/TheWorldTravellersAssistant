import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-travel-manager',
  templateUrl: './travel-manager.component.html'
})
export class TravelManagerComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    myTravelPlans() {
      console.log('View Travel Plans');
    }

    createNewTravelPlan() {
      console.log('Create New Travel Plan');
    }

    sendTravelInvitations() {
      console.log('Send Travel Invitations');
    }

    editTravelPlan() {
      console.log('Edit Travel Plan');
    }

    removeTravelPlan() {
      console.log('Remove Travel Plan');
    }
  }

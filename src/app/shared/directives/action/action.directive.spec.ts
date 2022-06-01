import { ActionDirectiveModule } from './action.module';
import { TestBed } from '@angular/core/testing';
import { ActionDirective } from './action.directive';
import { Component } from '@angular/core';

describe(ActionDirective.name, () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActionDirectiveTestComponent],
      imports: [ActionDirectiveModule]
    }).compileComponents();
  });

  @Component({
    template: `<div (appAction)="actionHandler()"></div>`
  })
  class ActionDirectiveTestComponent {
    private event: Event = null;

    public actionHandler(event: Event): void {
      this.event = event;
    }

    public hasEvent(): boolean {
      return !!this.event;
    }
  }

});

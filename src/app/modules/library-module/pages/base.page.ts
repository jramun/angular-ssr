import {OnDestroy, OnInit} from "@angular/core";
import {Subscription} from "rxjs";
import {ContextService} from "../services/context.service";

export abstract class BasePage implements OnInit, OnDestroy {

  protected constructor(private contextS: ContextService) {
  }

  private _subscriptions = new Map<string, Subscription>();

  protected get subscriptions(): Map<string, Subscription> {
    return this._subscriptions;
  }

  preOnInit(): void {
  }

  ngOnInit(): void {
    this.preOnInit()
  }

  preOnDestroy(): void {
  }

  ngOnDestroy(): void {
    this.preOnDestroy();
    this._subscriptions.forEach(subscription => subscription.unsubscribe());
    this._subscriptions.clear();
  }

  protected addSubscription(name: string, subscription: Subscription) {
    this.subscriptions.set(name, subscription);
  }
}

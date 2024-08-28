import * as graphql from "@nestjs/graphql";
import { WatchResolverBase } from "./base/watch.resolver.base";
import { Watch } from "./base/Watch";
import { WatchService } from "./watch.service";

@graphql.Resolver(() => Watch)
export class WatchResolver extends WatchResolverBase {
  constructor(protected readonly service: WatchService) {
    super(service);
  }
}

import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WatchService } from "./watch.service";
import { WatchControllerBase } from "./base/watch.controller.base";

@swagger.ApiTags("watches")
@common.Controller("watches")
export class WatchController extends WatchControllerBase {
  constructor(protected readonly service: WatchService) {
    super(service);
  }
}

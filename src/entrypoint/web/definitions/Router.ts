import { Router } from "express";

export default interface BaseRouter {

  getRouter(): Router;

}

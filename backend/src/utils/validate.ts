import { TSchema } from "@sinclair/typebox";
import Ajv from "ajv";
import addFormats from "ajv-formats";
import { NextFunction, Request, Response } from "express";
import { AppError } from "./error";
import logger from "./logger";

const ajv = new Ajv({ allErrors: true });
addFormats(ajv);

type RequestPart = "body" | "query" | "params" | "headers";

export const validate = <T extends TSchema>(
  title: string,
  schema: TSchema,
  part: RequestPart = "body"
) => {
  const validateFn = ajv.compile(schema);
  return (req: Request, res: Response, next: NextFunction): void => {
    const data = req[part];
    const valid = validateFn(data);

    if (!valid) {
      logger.warn(`${title} Validation error on part ${part}`);
      throw new AppError(`${title} validation error on part ${part}`, 400);
    }
    next();
  };
};

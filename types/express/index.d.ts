import express from 'express';

declare module 'express' {
  interface Request {
    swagger: {
      operation?: {
        pathObject: {
          api: any;
          definition: any;
          definitionFullyResolver: any;
          path: string;
          pathToDefinition: string[];
        };
        pathToDefinition: string[];
      };
      params: {
        [key: string]: {
          raw: any;
        };
      };
    };
  }
}

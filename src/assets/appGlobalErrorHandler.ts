import { ErrorHandler } from "@angular/core";

export class AppGlobalErrorHandler implements ErrorHandler {
    handleError(error) {
        alert("Något blev fel i: Post");
        console.log("Post Global ERRORMESSAGE: " + error);  
    }
  }
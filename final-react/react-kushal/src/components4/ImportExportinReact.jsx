// import React from "react";
// Import Export in React js

// 3 way to import export

// 1 default export and import
// 2 named export and import
// 3 mixed export and import

import DefaultExport from "./DefaultExport";

// import {NamaedExport} from "./NamaedExport";

import {NamaedExport} from "./NamaedExport";
import {MixedExport} from "./MixedExport";

const ImportExportinReact = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div
              class="alert alert-warning alert-dismissible fade show"
              role="alert"
            >
              <strong>3 way to import export</strong> You should check in on some of
              those fields below.
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div class="alert alert-success" role="alert">
        
              <a href="#" class="alert-link text-decoration-none">
              1 default export and import <DefaultExport/>
              </a>
             
            </div>
          </div>
          <div className="col-md-4">
            <div class="alert alert-info" role="alert">
             
              <a href="#" class="alert-link text-decoration-none">
              2 named export and import <NamaedExport/>
              </a>
         
            </div>
          </div>
          <div className="col-md-4">
            <div class="alert alert-danger" role="alert">
             
              <a href="#" class="alert-link text-decoration-none">
              3 mixed export and import<MixedExport/>
              </a>
           
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportExportinReact;

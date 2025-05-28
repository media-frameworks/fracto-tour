import React from 'react';
import ReactDOM from 'react-dom/client';

import PageMain from "pages/PageMain";
import FractoIndexedTilesLoader from "./fracto/common/data/FractoIndexedTilesLoader";

const APP_NAME = 'FRACTO'

const root = ReactDOM.createRoot(document.getElementById('root'));

const page_main = <PageMain key={'page-main'} app_name={APP_NAME}/>
root.render(
   <FractoIndexedTilesLoader
      app_name={APP_NAME}
      app_page={[page_main]}
   />
);

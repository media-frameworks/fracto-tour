import React, {Component} from 'react';

export class PageMain extends Component {

   state={
      image_ref: React.createRef(),
      focal_point: {x: 0, y: 0},
      scope: 3,
      field_width: 500,
      field_height: 500,
   }

   on_plan_complete = () => {
      console.log("on_plan_complete");
   }

   render() {
      return 'PageMain'
   }
}

export default PageMain;

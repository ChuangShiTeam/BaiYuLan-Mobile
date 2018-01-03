import {connect} from "react-redux";

import BaseScrollViewComponent from '../layout/BaseScrollViewComponent';

export default connect(function () {
    return {
        id: '123'
    }
})(BaseScrollViewComponent);
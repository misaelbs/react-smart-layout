import React from 'react'
import styled from 'styled-components/native'
import constants from "../utils/constants";
import View from './View';

export default styled(View)`
    margin-top: ${constants.statusBarHeight}px;
`
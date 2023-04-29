"use client"

import {AppState} from "../../store";
import {addArticle} from "../../actions/articleActions"
import {connect} from "react-redux";
import Articles from "./Articles";

const mapStateToProps = (state: AppState) => ({state: state as IArticleState})

const mapReducerToProps = ({addArticle})

export default connect(mapStateToProps, mapReducerToProps)(Articles)
Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/AnimatedOverlay.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var styles=_reactNative.StyleSheet.create({
overlay:{
flex:1,
top:0,
left:0,
position:'absolute'}});var



AnimatedOverlay=function(_Component){_inherits(AnimatedOverlay,_Component);




























function AnimatedOverlay(props){_classCallCheck(this,AnimatedOverlay);var _this=_possibleConstructorReturn(this,(AnimatedOverlay.__proto__||Object.getPrototypeOf(AnimatedOverlay)).call(this,
props));

_this.state={
opacity:new _reactNative.Animated.Value(props.initValue),
overlayShow:props.overlayShow};return _this;

}_createClass(AnimatedOverlay,[{key:'componentDidMount',value:function componentDidMount()

{
this.doAnimation();
}},{key:'componentWillReceiveProps',value:function componentWillReceiveProps(

nextProps){
if(this.props.overlayShow!==nextProps.overlayShow){
this.setState({overlayShow:nextProps.overlayShow});
}
}},{key:'componentDidUpdate',value:function componentDidUpdate()

{
this.doAnimation();
}},{key:'doAnimation',value:function doAnimation()

{var _props=






this.props,overlayShow=_props.overlayShow,opacity=_props.opacity,duration=_props.duration,onAnimationFinished=_props.onAnimationFinished,useNativeDriver=_props.useNativeDriver;

var toValue=overlayShow?opacity:0;
_reactNative.Animated.timing(this.state.opacity,{
toValue:toValue,
duration:duration,
useNativeDriver:useNativeDriver}).
start(function(){
onAnimationFinished(toValue);
});
}},{key:'render',value:function render()

{var
pointerEvents=this.props.pointerEvents;var _props2=
this.props,onPress=_props2.onPress,style=_props2.style,children=_props2.children;
var backgroundColor={backgroundColor:this.props.backgroundColor};
var opacity={opacity:this.state.opacity};
var size={
width:_reactNative.Dimensions.get('window').width,
height:_reactNative.Dimensions.get('window').height};


if(!pointerEvents)pointerEvents=this.state.overlayShow?'auto':'none';

return(
_react2.default.createElement(_reactNative.Animated.View,{
pointerEvents:pointerEvents,
style:[styles.overlay,backgroundColor,size,style,opacity],__source:{fileName:_jsxFileName,lineNumber:99}},

_react2.default.createElement(_reactNative.TouchableOpacity,{onPress:onPress,style:[styles.overlay,size],__source:{fileName:_jsxFileName,lineNumber:103}}),
children));


}}]);return AnimatedOverlay;}(_react.Component);AnimatedOverlay.defaultProps={onPress:function onPress(){},pointerEvents:null,backgroundColor:'#000',opacity:0.5,duration:200,overlayShow:false,initValue:0,onAnimationFinished:function onAnimationFinished(){},style:null,useNativeDriver:false,children:null};AnimatedOverlay.propTypes={onPress:require('prop-types').func,backgroundColor:require('prop-types').string,opacity:require('prop-types').number,duration:require('prop-types').number,overlayShow:require('prop-types').bool,pointerEvents:require('prop-types').string,initValue:require('prop-types').number,onAnimationFinished:require('prop-types').func,style:require('prop-types').any,useNativeDriver:require('prop-types').bool.isRequired,children:require('prop-types').any};exports.default=


AnimatedOverlay;
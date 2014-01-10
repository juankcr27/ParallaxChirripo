this["JST"] = this["JST"] || {};

this["JST"]["app/templates/template.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<table>\r\n    <tr>\r\n        <td>Mass</td>\r\n        <td>";
  if (stack1 = helpers.mass) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.mass); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n    </tr>\r\n    <tr>\r\n        <td>Density</td>\r\n        <td>";
  if (stack1 = helpers.density) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.density); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n    </tr>\r\n    <tr>\r\n        <td>Surface area</td>\r\n        <td>";
  if (stack1 = helpers.surfaceArea) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.surfaceArea); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n    </tr>\r\n    <tr>\r\n        <td>Diameter</td>\r\n        <td>";
  if (stack1 = helpers.diameter) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.diameter); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n    </tr>\r\n    <tr>\r\n        <td>Gravity</td>\r\n        <td>";
  if (stack1 = helpers.gravity) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.gravity); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n    </tr>\r\n    <tr>\r\n        <td>Satellites</td>\r\n        <td>";
  if (stack1 = helpers.satellites) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.satellites); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\r\n    </tr>\r\n</table>";
  return buffer;
  });
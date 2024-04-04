import {
  createStore,
  require_client,
  require_react_dom,
  require_with_selector,
  useStore
} from "./chunk-LDSAW7ZG.js";
import {
  CheckCircleIcon_default,
  ClockIcon_default,
  ExclamationCircleIcon_default,
  GlobeAltIcon_default,
  InformationCircleIcon_default,
  XMarkIcon_default
} from "./chunk-IWBQXAYF.js";
import {
  DEFAULT_TEXT,
  __commonJS,
  __toESM,
  require_react
} from "./chunk-RI5X6ZOO.js";

// node_modules/cronstrue/dist/cronstrue.js
var require_cronstrue = __commonJS({
  "node_modules/cronstrue/dist/cronstrue.js"(exports, module) {
    (function webpackUniversalModuleDefinition(root2, factory) {
      if (typeof exports === "object" && typeof module === "object")
        module.exports = factory();
      else if (typeof define === "function" && define.amd)
        define("cronstrue", [], factory);
      else if (typeof exports === "object")
        exports["cronstrue"] = factory();
      else
        root2["cronstrue"] = factory();
    })(globalThis, () => {
      return (
        /******/
        (() => {
          "use strict";
          var __webpack_modules__ = {
            /***/
            794: (
              /***/
              (__unused_webpack_module, exports2, __webpack_require__2) => {
                Object.defineProperty(exports2, "__esModule", { value: true });
                exports2.CronParser = void 0;
                var rangeValidator_1 = __webpack_require__2(586);
                var CronParser = function() {
                  function CronParser2(expression, dayOfWeekStartIndexZero, monthStartIndexZero) {
                    if (dayOfWeekStartIndexZero === void 0) {
                      dayOfWeekStartIndexZero = true;
                    }
                    if (monthStartIndexZero === void 0) {
                      monthStartIndexZero = false;
                    }
                    this.expression = expression;
                    this.dayOfWeekStartIndexZero = dayOfWeekStartIndexZero;
                    this.monthStartIndexZero = monthStartIndexZero;
                  }
                  CronParser2.prototype.parse = function() {
                    var parsed = this.extractParts(this.expression);
                    this.normalize(parsed);
                    this.validate(parsed);
                    return parsed;
                  };
                  CronParser2.prototype.extractParts = function(expression) {
                    if (!this.expression) {
                      throw new Error("Expression is empty");
                    }
                    var parsed = expression.trim().split(/[ ]+/);
                    if (parsed.length < 5) {
                      throw new Error("Expression has only ".concat(parsed.length, " part").concat(parsed.length == 1 ? "" : "s", ". At least 5 parts are required."));
                    } else if (parsed.length == 5) {
                      parsed.unshift("");
                      parsed.push("");
                    } else if (parsed.length == 6) {
                      var isYearWithNoSecondsPart = /\d{4}$/.test(parsed[5]) || parsed[4] == "?" || parsed[2] == "?";
                      if (isYearWithNoSecondsPart) {
                        parsed.unshift("");
                      } else {
                        parsed.push("");
                      }
                    } else if (parsed.length > 7) {
                      throw new Error("Expression has ".concat(parsed.length, " parts; too many!"));
                    }
                    return parsed;
                  };
                  CronParser2.prototype.normalize = function(expressionParts) {
                    var _this = this;
                    expressionParts[3] = expressionParts[3].replace("?", "*");
                    expressionParts[5] = expressionParts[5].replace("?", "*");
                    expressionParts[2] = expressionParts[2].replace("?", "*");
                    if (expressionParts[0].indexOf("0/") == 0) {
                      expressionParts[0] = expressionParts[0].replace("0/", "*/");
                    }
                    if (expressionParts[1].indexOf("0/") == 0) {
                      expressionParts[1] = expressionParts[1].replace("0/", "*/");
                    }
                    if (expressionParts[2].indexOf("0/") == 0) {
                      expressionParts[2] = expressionParts[2].replace("0/", "*/");
                    }
                    if (expressionParts[3].indexOf("1/") == 0) {
                      expressionParts[3] = expressionParts[3].replace("1/", "*/");
                    }
                    if (expressionParts[4].indexOf("1/") == 0) {
                      expressionParts[4] = expressionParts[4].replace("1/", "*/");
                    }
                    if (expressionParts[6].indexOf("1/") == 0) {
                      expressionParts[6] = expressionParts[6].replace("1/", "*/");
                    }
                    expressionParts[5] = expressionParts[5].replace(/(^\d)|([^#/\s]\d)/g, function(t) {
                      var dowDigits = t.replace(/\D/, "");
                      var dowDigitsAdjusted = dowDigits;
                      if (_this.dayOfWeekStartIndexZero) {
                        if (dowDigits == "7") {
                          dowDigitsAdjusted = "0";
                        }
                      } else {
                        dowDigitsAdjusted = (parseInt(dowDigits) - 1).toString();
                      }
                      return t.replace(dowDigits, dowDigitsAdjusted);
                    });
                    if (expressionParts[5] == "L") {
                      expressionParts[5] = "6";
                    }
                    if (expressionParts[3] == "?") {
                      expressionParts[3] = "*";
                    }
                    if (expressionParts[3].indexOf("W") > -1 && (expressionParts[3].indexOf(",") > -1 || expressionParts[3].indexOf("-") > -1)) {
                      throw new Error("The 'W' character can be specified only when the day-of-month is a single day, not a range or list of days.");
                    }
                    var days = {
                      SUN: 0,
                      MON: 1,
                      TUE: 2,
                      WED: 3,
                      THU: 4,
                      FRI: 5,
                      SAT: 6
                    };
                    for (var day in days) {
                      expressionParts[5] = expressionParts[5].replace(new RegExp(day, "gi"), days[day].toString());
                    }
                    expressionParts[4] = expressionParts[4].replace(/(^\d{1,2})|([^#/\s]\d{1,2})/g, function(t) {
                      var dowDigits = t.replace(/\D/, "");
                      var dowDigitsAdjusted = dowDigits;
                      if (_this.monthStartIndexZero) {
                        dowDigitsAdjusted = (parseInt(dowDigits) + 1).toString();
                      }
                      return t.replace(dowDigits, dowDigitsAdjusted);
                    });
                    var months = {
                      JAN: 1,
                      FEB: 2,
                      MAR: 3,
                      APR: 4,
                      MAY: 5,
                      JUN: 6,
                      JUL: 7,
                      AUG: 8,
                      SEP: 9,
                      OCT: 10,
                      NOV: 11,
                      DEC: 12
                    };
                    for (var month in months) {
                      expressionParts[4] = expressionParts[4].replace(new RegExp(month, "gi"), months[month].toString());
                    }
                    if (expressionParts[0] == "0") {
                      expressionParts[0] = "";
                    }
                    if (!/\*|\-|\,|\//.test(expressionParts[2]) && (/\*|\//.test(expressionParts[1]) || /\*|\//.test(expressionParts[0]))) {
                      expressionParts[2] += "-".concat(expressionParts[2]);
                    }
                    for (var i = 0; i < expressionParts.length; i++) {
                      if (expressionParts[i].indexOf(",") != -1) {
                        expressionParts[i] = expressionParts[i].split(",").filter(function(str) {
                          return str !== "";
                        }).join(",") || "*";
                      }
                      if (expressionParts[i] == "*/1") {
                        expressionParts[i] = "*";
                      }
                      if (expressionParts[i].indexOf("/") > -1 && !/^\*|\-|\,/.test(expressionParts[i])) {
                        var stepRangeThrough = null;
                        switch (i) {
                          case 4:
                            stepRangeThrough = "12";
                            break;
                          case 5:
                            stepRangeThrough = "6";
                            break;
                          case 6:
                            stepRangeThrough = "9999";
                            break;
                          default:
                            stepRangeThrough = null;
                            break;
                        }
                        if (stepRangeThrough !== null) {
                          var parts = expressionParts[i].split("/");
                          expressionParts[i] = "".concat(parts[0], "-").concat(stepRangeThrough, "/").concat(parts[1]);
                        }
                      }
                    }
                  };
                  CronParser2.prototype.validate = function(parsed) {
                    this.assertNoInvalidCharacters("DOW", parsed[5]);
                    this.assertNoInvalidCharacters("DOM", parsed[3]);
                    this.validateRange(parsed);
                  };
                  CronParser2.prototype.validateRange = function(parsed) {
                    rangeValidator_1.default.secondRange(parsed[0]);
                    rangeValidator_1.default.minuteRange(parsed[1]);
                    rangeValidator_1.default.hourRange(parsed[2]);
                    rangeValidator_1.default.dayOfMonthRange(parsed[3]);
                    rangeValidator_1.default.monthRange(parsed[4], this.monthStartIndexZero);
                    rangeValidator_1.default.dayOfWeekRange(parsed[5], this.dayOfWeekStartIndexZero);
                  };
                  CronParser2.prototype.assertNoInvalidCharacters = function(partDescription, expression) {
                    var invalidChars = expression.match(/[A-KM-VX-Z]+/gi);
                    if (invalidChars && invalidChars.length) {
                      throw new Error("".concat(partDescription, " part contains invalid values: '").concat(invalidChars.toString(), "'"));
                    }
                  };
                  return CronParser2;
                }();
                exports2.CronParser = CronParser;
              }
            ),
            /***/
            728: (
              /***/
              (__unused_webpack_module, exports2, __webpack_require__2) => {
                Object.defineProperty(exports2, "__esModule", { value: true });
                exports2.ExpressionDescriptor = void 0;
                var stringUtilities_1 = __webpack_require__2(910);
                var cronParser_1 = __webpack_require__2(794);
                var ExpressionDescriptor = function() {
                  function ExpressionDescriptor2(expression, options) {
                    this.expression = expression;
                    this.options = options;
                    this.expressionParts = new Array(5);
                    if (!this.options.locale && ExpressionDescriptor2.defaultLocale) {
                      this.options.locale = ExpressionDescriptor2.defaultLocale;
                    }
                    if (!ExpressionDescriptor2.locales[this.options.locale]) {
                      var fallBackLocale = Object.keys(ExpressionDescriptor2.locales)[0];
                      console.warn("Locale '".concat(this.options.locale, "' could not be found; falling back to '").concat(fallBackLocale, "'."));
                      this.options.locale = fallBackLocale;
                    }
                    this.i18n = ExpressionDescriptor2.locales[this.options.locale];
                    if (options.use24HourTimeFormat === void 0) {
                      options.use24HourTimeFormat = this.i18n.use24HourTimeFormatByDefault();
                    }
                  }
                  ExpressionDescriptor2.toString = function(expression, _a) {
                    var _b = _a === void 0 ? {} : _a, _c = _b.throwExceptionOnParseError, throwExceptionOnParseError = _c === void 0 ? true : _c, _d = _b.verbose, verbose = _d === void 0 ? false : _d, _e = _b.dayOfWeekStartIndexZero, dayOfWeekStartIndexZero = _e === void 0 ? true : _e, _f = _b.monthStartIndexZero, monthStartIndexZero = _f === void 0 ? false : _f, use24HourTimeFormat = _b.use24HourTimeFormat, _g = _b.locale, locale = _g === void 0 ? null : _g, _h = _b.tzOffset, tzOffset = _h === void 0 ? 0 : _h;
                    var options = {
                      throwExceptionOnParseError,
                      verbose,
                      dayOfWeekStartIndexZero,
                      monthStartIndexZero,
                      use24HourTimeFormat,
                      locale,
                      tzOffset
                    };
                    var descripter = new ExpressionDescriptor2(expression, options);
                    return descripter.getFullDescription();
                  };
                  ExpressionDescriptor2.initialize = function(localesLoader, defaultLocale) {
                    if (defaultLocale === void 0) {
                      defaultLocale = "en";
                    }
                    ExpressionDescriptor2.specialCharacters = ["/", "-", ",", "*"];
                    ExpressionDescriptor2.defaultLocale = defaultLocale;
                    localesLoader.load(ExpressionDescriptor2.locales);
                  };
                  ExpressionDescriptor2.prototype.getFullDescription = function() {
                    var description = "";
                    try {
                      var parser = new cronParser_1.CronParser(this.expression, this.options.dayOfWeekStartIndexZero, this.options.monthStartIndexZero);
                      this.expressionParts = parser.parse();
                      var timeSegment = this.getTimeOfDayDescription();
                      var dayOfMonthDesc = this.getDayOfMonthDescription();
                      var monthDesc = this.getMonthDescription();
                      var dayOfWeekDesc = this.getDayOfWeekDescription();
                      var yearDesc = this.getYearDescription();
                      description += timeSegment + dayOfMonthDesc + dayOfWeekDesc + monthDesc + yearDesc;
                      description = this.transformVerbosity(description, !!this.options.verbose);
                      description = description.charAt(0).toLocaleUpperCase() + description.substr(1);
                    } catch (ex) {
                      if (!this.options.throwExceptionOnParseError) {
                        description = this.i18n.anErrorOccuredWhenGeneratingTheExpressionD();
                      } else {
                        throw "".concat(ex);
                      }
                    }
                    return description;
                  };
                  ExpressionDescriptor2.prototype.getTimeOfDayDescription = function() {
                    var secondsExpression = this.expressionParts[0];
                    var minuteExpression = this.expressionParts[1];
                    var hourExpression = this.expressionParts[2];
                    var description = "";
                    if (!stringUtilities_1.StringUtilities.containsAny(minuteExpression, ExpressionDescriptor2.specialCharacters) && !stringUtilities_1.StringUtilities.containsAny(hourExpression, ExpressionDescriptor2.specialCharacters) && !stringUtilities_1.StringUtilities.containsAny(secondsExpression, ExpressionDescriptor2.specialCharacters)) {
                      description += this.i18n.atSpace() + this.formatTime(hourExpression, minuteExpression, secondsExpression);
                    } else if (!secondsExpression && minuteExpression.indexOf("-") > -1 && !(minuteExpression.indexOf(",") > -1) && !(minuteExpression.indexOf("/") > -1) && !stringUtilities_1.StringUtilities.containsAny(hourExpression, ExpressionDescriptor2.specialCharacters)) {
                      var minuteParts = minuteExpression.split("-");
                      description += stringUtilities_1.StringUtilities.format(this.i18n.everyMinuteBetweenX0AndX1(), this.formatTime(hourExpression, minuteParts[0], ""), this.formatTime(hourExpression, minuteParts[1], ""));
                    } else if (!secondsExpression && hourExpression.indexOf(",") > -1 && hourExpression.indexOf("-") == -1 && hourExpression.indexOf("/") == -1 && !stringUtilities_1.StringUtilities.containsAny(minuteExpression, ExpressionDescriptor2.specialCharacters)) {
                      var hourParts = hourExpression.split(",");
                      description += this.i18n.at();
                      for (var i = 0; i < hourParts.length; i++) {
                        description += " ";
                        description += this.formatTime(hourParts[i], minuteExpression, "");
                        if (i < hourParts.length - 2) {
                          description += ",";
                        }
                        if (i == hourParts.length - 2) {
                          description += this.i18n.spaceAnd();
                        }
                      }
                    } else {
                      var secondsDescription = this.getSecondsDescription();
                      var minutesDescription = this.getMinutesDescription();
                      var hoursDescription = this.getHoursDescription();
                      description += secondsDescription;
                      if (description && minutesDescription) {
                        description += ", ";
                      }
                      description += minutesDescription;
                      if (minutesDescription === hoursDescription) {
                        return description;
                      }
                      if (description && hoursDescription) {
                        description += ", ";
                      }
                      description += hoursDescription;
                    }
                    return description;
                  };
                  ExpressionDescriptor2.prototype.getSecondsDescription = function() {
                    var _this = this;
                    var description = this.getSegmentDescription(this.expressionParts[0], this.i18n.everySecond(), function(s) {
                      return s;
                    }, function(s) {
                      return stringUtilities_1.StringUtilities.format(_this.i18n.everyX0Seconds(s), s);
                    }, function(s) {
                      return _this.i18n.secondsX0ThroughX1PastTheMinute();
                    }, function(s) {
                      return s == "0" ? "" : parseInt(s) < 20 ? _this.i18n.atX0SecondsPastTheMinute(s) : _this.i18n.atX0SecondsPastTheMinuteGt20() || _this.i18n.atX0SecondsPastTheMinute(s);
                    });
                    return description;
                  };
                  ExpressionDescriptor2.prototype.getMinutesDescription = function() {
                    var _this = this;
                    var secondsExpression = this.expressionParts[0];
                    var hourExpression = this.expressionParts[2];
                    var description = this.getSegmentDescription(this.expressionParts[1], this.i18n.everyMinute(), function(s) {
                      return s;
                    }, function(s) {
                      return stringUtilities_1.StringUtilities.format(_this.i18n.everyX0Minutes(s), s);
                    }, function(s) {
                      return _this.i18n.minutesX0ThroughX1PastTheHour();
                    }, function(s) {
                      try {
                        return s == "0" && hourExpression.indexOf("/") == -1 && secondsExpression == "" ? _this.i18n.everyHour() : parseInt(s) < 20 ? _this.i18n.atX0MinutesPastTheHour(s) : _this.i18n.atX0MinutesPastTheHourGt20() || _this.i18n.atX0MinutesPastTheHour(s);
                      } catch (e) {
                        return _this.i18n.atX0MinutesPastTheHour(s);
                      }
                    });
                    return description;
                  };
                  ExpressionDescriptor2.prototype.getHoursDescription = function() {
                    var _this = this;
                    var expression = this.expressionParts[2];
                    var description = this.getSegmentDescription(expression, this.i18n.everyHour(), function(s) {
                      return _this.formatTime(s, "0", "");
                    }, function(s) {
                      return stringUtilities_1.StringUtilities.format(_this.i18n.everyX0Hours(s), s);
                    }, function(s) {
                      return _this.i18n.betweenX0AndX1();
                    }, function(s) {
                      return _this.i18n.atX0();
                    });
                    if (description && expression.includes("-") && this.expressionParts[1] != "0") {
                      var atTheHourMatches = Array.from(description.matchAll(/:00/g));
                      if (atTheHourMatches.length > 1) {
                        var lastAtTheHourMatchIndex = atTheHourMatches[atTheHourMatches.length - 1].index;
                        description = description.substring(0, lastAtTheHourMatchIndex) + ":59" + description.substring(lastAtTheHourMatchIndex + 3);
                      }
                    }
                    return description;
                  };
                  ExpressionDescriptor2.prototype.getDayOfWeekDescription = function() {
                    var _this = this;
                    var daysOfWeekNames = this.i18n.daysOfTheWeek();
                    var description = null;
                    if (this.expressionParts[5] == "*") {
                      description = "";
                    } else {
                      description = this.getSegmentDescription(this.expressionParts[5], this.i18n.commaEveryDay(), function(s, form) {
                        var exp = s;
                        if (s.indexOf("#") > -1) {
                          exp = s.substring(0, s.indexOf("#"));
                        } else if (s.indexOf("L") > -1) {
                          exp = exp.replace("L", "");
                        }
                        var parsedExp = parseInt(exp);
                        if (_this.options.tzOffset) {
                          var hourExpression = _this.expressionParts[2];
                          var hour = parseInt(hourExpression) + (_this.options.tzOffset ? _this.options.tzOffset : 0);
                          if (hour >= 24) {
                            parsedExp++;
                          } else if (hour < 0) {
                            parsedExp--;
                          }
                          if (parsedExp > 6) {
                            parsedExp = 0;
                          } else if (parsedExp < 0) {
                            parsedExp = 6;
                          }
                        }
                        var description2 = _this.i18n.daysOfTheWeekInCase ? _this.i18n.daysOfTheWeekInCase(form)[parsedExp] : daysOfWeekNames[parsedExp];
                        if (s.indexOf("#") > -1) {
                          var dayOfWeekOfMonthDescription = null;
                          var dayOfWeekOfMonthNumber = s.substring(s.indexOf("#") + 1);
                          var dayOfWeekNumber = s.substring(0, s.indexOf("#"));
                          switch (dayOfWeekOfMonthNumber) {
                            case "1":
                              dayOfWeekOfMonthDescription = _this.i18n.first(dayOfWeekNumber);
                              break;
                            case "2":
                              dayOfWeekOfMonthDescription = _this.i18n.second(dayOfWeekNumber);
                              break;
                            case "3":
                              dayOfWeekOfMonthDescription = _this.i18n.third(dayOfWeekNumber);
                              break;
                            case "4":
                              dayOfWeekOfMonthDescription = _this.i18n.fourth(dayOfWeekNumber);
                              break;
                            case "5":
                              dayOfWeekOfMonthDescription = _this.i18n.fifth(dayOfWeekNumber);
                              break;
                          }
                          description2 = dayOfWeekOfMonthDescription + " " + description2;
                        }
                        return description2;
                      }, function(s) {
                        if (parseInt(s) == 1) {
                          return "";
                        } else {
                          return stringUtilities_1.StringUtilities.format(_this.i18n.commaEveryX0DaysOfTheWeek(s), s);
                        }
                      }, function(s) {
                        var beginFrom = s.substring(0, s.indexOf("-"));
                        var domSpecified = _this.expressionParts[3] != "*";
                        return domSpecified ? _this.i18n.commaAndX0ThroughX1(beginFrom) : _this.i18n.commaX0ThroughX1(beginFrom);
                      }, function(s) {
                        var format = null;
                        if (s.indexOf("#") > -1) {
                          var dayOfWeekOfMonthNumber = s.substring(s.indexOf("#") + 1);
                          format = _this.i18n.commaOnThe(dayOfWeekOfMonthNumber).trim() + _this.i18n.spaceX0OfTheMonth();
                        } else if (s.indexOf("L") > -1) {
                          format = _this.i18n.commaOnTheLastX0OfTheMonth(s.replace("L", ""));
                        } else {
                          var domSpecified = _this.expressionParts[3] != "*";
                          format = domSpecified ? _this.i18n.commaAndOnX0() : _this.i18n.commaOnlyOnX0(s);
                        }
                        return format;
                      });
                    }
                    return description;
                  };
                  ExpressionDescriptor2.prototype.getMonthDescription = function() {
                    var _this = this;
                    var monthNames = this.i18n.monthsOfTheYear();
                    var description = this.getSegmentDescription(this.expressionParts[4], "", function(s, form) {
                      return form && _this.i18n.monthsOfTheYearInCase ? _this.i18n.monthsOfTheYearInCase(form)[parseInt(s) - 1] : monthNames[parseInt(s) - 1];
                    }, function(s) {
                      if (parseInt(s) == 1) {
                        return "";
                      } else {
                        return stringUtilities_1.StringUtilities.format(_this.i18n.commaEveryX0Months(s), s);
                      }
                    }, function(s) {
                      return _this.i18n.commaMonthX0ThroughMonthX1() || _this.i18n.commaX0ThroughX1();
                    }, function(s) {
                      return _this.i18n.commaOnlyInMonthX0 ? _this.i18n.commaOnlyInMonthX0() : _this.i18n.commaOnlyInX0();
                    });
                    return description;
                  };
                  ExpressionDescriptor2.prototype.getDayOfMonthDescription = function() {
                    var _this = this;
                    var description = null;
                    var expression = this.expressionParts[3];
                    switch (expression) {
                      case "L":
                        description = this.i18n.commaOnTheLastDayOfTheMonth();
                        break;
                      case "WL":
                      case "LW":
                        description = this.i18n.commaOnTheLastWeekdayOfTheMonth();
                        break;
                      default:
                        var weekDayNumberMatches = expression.match(/(\d{1,2}W)|(W\d{1,2})/);
                        if (weekDayNumberMatches) {
                          var dayNumber = parseInt(weekDayNumberMatches[0].replace("W", ""));
                          var dayString = dayNumber == 1 ? this.i18n.firstWeekday() : stringUtilities_1.StringUtilities.format(this.i18n.weekdayNearestDayX0(), dayNumber.toString());
                          description = stringUtilities_1.StringUtilities.format(this.i18n.commaOnTheX0OfTheMonth(), dayString);
                          break;
                        } else {
                          var lastDayOffSetMatches = expression.match(/L-(\d{1,2})/);
                          if (lastDayOffSetMatches) {
                            var offSetDays = lastDayOffSetMatches[1];
                            description = stringUtilities_1.StringUtilities.format(this.i18n.commaDaysBeforeTheLastDayOfTheMonth(offSetDays), offSetDays);
                            break;
                          } else if (expression == "*" && this.expressionParts[5] != "*") {
                            return "";
                          } else {
                            description = this.getSegmentDescription(expression, this.i18n.commaEveryDay(), function(s) {
                              return s == "L" ? _this.i18n.lastDay() : _this.i18n.dayX0 ? stringUtilities_1.StringUtilities.format(_this.i18n.dayX0(), s) : s;
                            }, function(s) {
                              return s == "1" ? _this.i18n.commaEveryDay() : _this.i18n.commaEveryX0Days(s);
                            }, function(s) {
                              return _this.i18n.commaBetweenDayX0AndX1OfTheMonth(s);
                            }, function(s) {
                              return _this.i18n.commaOnDayX0OfTheMonth(s);
                            });
                          }
                          break;
                        }
                    }
                    return description;
                  };
                  ExpressionDescriptor2.prototype.getYearDescription = function() {
                    var _this = this;
                    var description = this.getSegmentDescription(this.expressionParts[6], "", function(s) {
                      return /^\d+$/.test(s) ? new Date(parseInt(s), 1).getFullYear().toString() : s;
                    }, function(s) {
                      return stringUtilities_1.StringUtilities.format(_this.i18n.commaEveryX0Years(s), s);
                    }, function(s) {
                      return _this.i18n.commaYearX0ThroughYearX1() || _this.i18n.commaX0ThroughX1();
                    }, function(s) {
                      return _this.i18n.commaOnlyInYearX0 ? _this.i18n.commaOnlyInYearX0() : _this.i18n.commaOnlyInX0();
                    });
                    return description;
                  };
                  ExpressionDescriptor2.prototype.getSegmentDescription = function(expression, allDescription, getSingleItemDescription, getIncrementDescriptionFormat, getRangeDescriptionFormat, getDescriptionFormat) {
                    var description = null;
                    var doesExpressionContainIncrement = expression.indexOf("/") > -1;
                    var doesExpressionContainRange = expression.indexOf("-") > -1;
                    var doesExpressionContainMultipleValues = expression.indexOf(",") > -1;
                    if (!expression) {
                      description = "";
                    } else if (expression === "*") {
                      description = allDescription;
                    } else if (!doesExpressionContainIncrement && !doesExpressionContainRange && !doesExpressionContainMultipleValues) {
                      description = stringUtilities_1.StringUtilities.format(getDescriptionFormat(expression), getSingleItemDescription(expression));
                    } else if (doesExpressionContainMultipleValues) {
                      var segments = expression.split(",");
                      var descriptionContent = "";
                      for (var i = 0; i < segments.length; i++) {
                        if (i > 0 && segments.length > 2) {
                          descriptionContent += ",";
                          if (i < segments.length - 1) {
                            descriptionContent += " ";
                          }
                        }
                        if (i > 0 && segments.length > 1 && (i == segments.length - 1 || segments.length == 2)) {
                          descriptionContent += "".concat(this.i18n.spaceAnd(), " ");
                        }
                        if (segments[i].indexOf("/") > -1 || segments[i].indexOf("-") > -1) {
                          var isSegmentRangeWithoutIncrement = segments[i].indexOf("-") > -1 && segments[i].indexOf("/") == -1;
                          var currentDescriptionContent = this.getSegmentDescription(segments[i], allDescription, getSingleItemDescription, getIncrementDescriptionFormat, isSegmentRangeWithoutIncrement ? this.i18n.commaX0ThroughX1 : getRangeDescriptionFormat, getDescriptionFormat);
                          if (isSegmentRangeWithoutIncrement) {
                            currentDescriptionContent = currentDescriptionContent.replace(", ", "");
                          }
                          descriptionContent += currentDescriptionContent;
                        } else if (!doesExpressionContainIncrement) {
                          descriptionContent += getSingleItemDescription(segments[i]);
                        } else {
                          descriptionContent += this.getSegmentDescription(segments[i], allDescription, getSingleItemDescription, getIncrementDescriptionFormat, getRangeDescriptionFormat, getDescriptionFormat);
                        }
                      }
                      if (!doesExpressionContainIncrement) {
                        description = stringUtilities_1.StringUtilities.format(getDescriptionFormat(expression), descriptionContent);
                      } else {
                        description = descriptionContent;
                      }
                    } else if (doesExpressionContainIncrement) {
                      var segments = expression.split("/");
                      description = stringUtilities_1.StringUtilities.format(getIncrementDescriptionFormat(segments[1]), segments[1]);
                      if (segments[0].indexOf("-") > -1) {
                        var rangeSegmentDescription = this.generateRangeSegmentDescription(segments[0], getRangeDescriptionFormat, getSingleItemDescription);
                        if (rangeSegmentDescription.indexOf(", ") != 0) {
                          description += ", ";
                        }
                        description += rangeSegmentDescription;
                      } else if (segments[0].indexOf("*") == -1) {
                        var rangeItemDescription = stringUtilities_1.StringUtilities.format(getDescriptionFormat(segments[0]), getSingleItemDescription(segments[0]));
                        rangeItemDescription = rangeItemDescription.replace(", ", "");
                        description += stringUtilities_1.StringUtilities.format(this.i18n.commaStartingX0(), rangeItemDescription);
                      }
                    } else if (doesExpressionContainRange) {
                      description = this.generateRangeSegmentDescription(expression, getRangeDescriptionFormat, getSingleItemDescription);
                    }
                    return description;
                  };
                  ExpressionDescriptor2.prototype.generateRangeSegmentDescription = function(rangeExpression, getRangeDescriptionFormat, getSingleItemDescription) {
                    var description = "";
                    var rangeSegments = rangeExpression.split("-");
                    var rangeSegment1Description = getSingleItemDescription(rangeSegments[0], 1);
                    var rangeSegment2Description = getSingleItemDescription(rangeSegments[1], 2);
                    var rangeDescriptionFormat = getRangeDescriptionFormat(rangeExpression);
                    description += stringUtilities_1.StringUtilities.format(rangeDescriptionFormat, rangeSegment1Description, rangeSegment2Description);
                    return description;
                  };
                  ExpressionDescriptor2.prototype.formatTime = function(hourExpression, minuteExpression, secondExpression) {
                    var hourOffset = 0;
                    var minuteOffset = 0;
                    if (this.options.tzOffset) {
                      hourOffset = this.options.tzOffset > 0 ? Math.floor(this.options.tzOffset) : Math.ceil(this.options.tzOffset);
                      minuteOffset = parseFloat((this.options.tzOffset % 1).toFixed(2));
                      if (minuteOffset != 0) {
                        minuteOffset *= 60;
                      }
                    }
                    var hour = parseInt(hourExpression) + hourOffset;
                    var minute = parseInt(minuteExpression) + minuteOffset;
                    if (minute >= 60) {
                      minute -= 60;
                      hour += 1;
                    } else if (minute < 0) {
                      minute += 60;
                      hour -= 1;
                    }
                    if (hour >= 24) {
                      hour = hour - 24;
                    } else if (hour < 0) {
                      hour = 24 + hour;
                    }
                    var period = "";
                    var setPeriodBeforeTime = false;
                    if (!this.options.use24HourTimeFormat) {
                      setPeriodBeforeTime = !!(this.i18n.setPeriodBeforeTime && this.i18n.setPeriodBeforeTime());
                      period = setPeriodBeforeTime ? "".concat(this.getPeriod(hour), " ") : " ".concat(this.getPeriod(hour));
                      if (hour > 12) {
                        hour -= 12;
                      }
                      if (hour === 0) {
                        hour = 12;
                      }
                    }
                    var second = "";
                    if (secondExpression) {
                      second = ":".concat(("00" + secondExpression).substring(secondExpression.length));
                    }
                    return "".concat(setPeriodBeforeTime ? period : "").concat(("00" + hour.toString()).substring(hour.toString().length), ":").concat(("00" + minute.toString()).substring(minute.toString().length)).concat(second).concat(!setPeriodBeforeTime ? period : "");
                  };
                  ExpressionDescriptor2.prototype.transformVerbosity = function(description, useVerboseFormat) {
                    if (!useVerboseFormat) {
                      description = description.replace(new RegExp(", ".concat(this.i18n.everyMinute()), "g"), "");
                      description = description.replace(new RegExp(", ".concat(this.i18n.everyHour()), "g"), "");
                      description = description.replace(new RegExp(this.i18n.commaEveryDay(), "g"), "");
                      description = description.replace(/\, ?$/, "");
                    }
                    return description;
                  };
                  ExpressionDescriptor2.prototype.getPeriod = function(hour) {
                    return hour >= 12 ? this.i18n.pm && this.i18n.pm() || "PM" : this.i18n.am && this.i18n.am() || "AM";
                  };
                  ExpressionDescriptor2.locales = {};
                  return ExpressionDescriptor2;
                }();
                exports2.ExpressionDescriptor = ExpressionDescriptor;
              }
            ),
            /***/
            336: (
              /***/
              (__unused_webpack_module, exports2, __webpack_require__2) => {
                Object.defineProperty(exports2, "__esModule", { value: true });
                exports2.enLocaleLoader = void 0;
                var en_1 = __webpack_require__2(751);
                var enLocaleLoader = function() {
                  function enLocaleLoader2() {
                  }
                  enLocaleLoader2.prototype.load = function(availableLocales) {
                    availableLocales["en"] = new en_1.en();
                  };
                  return enLocaleLoader2;
                }();
                exports2.enLocaleLoader = enLocaleLoader;
              }
            ),
            /***/
            751: (
              /***/
              (__unused_webpack_module, exports2) => {
                Object.defineProperty(exports2, "__esModule", { value: true });
                exports2.en = void 0;
                var en = function() {
                  function en2() {
                  }
                  en2.prototype.atX0SecondsPastTheMinuteGt20 = function() {
                    return null;
                  };
                  en2.prototype.atX0MinutesPastTheHourGt20 = function() {
                    return null;
                  };
                  en2.prototype.commaMonthX0ThroughMonthX1 = function() {
                    return null;
                  };
                  en2.prototype.commaYearX0ThroughYearX1 = function() {
                    return null;
                  };
                  en2.prototype.use24HourTimeFormatByDefault = function() {
                    return false;
                  };
                  en2.prototype.anErrorOccuredWhenGeneratingTheExpressionD = function() {
                    return "An error occured when generating the expression description.  Check the cron expression syntax.";
                  };
                  en2.prototype.everyMinute = function() {
                    return "every minute";
                  };
                  en2.prototype.everyHour = function() {
                    return "every hour";
                  };
                  en2.prototype.atSpace = function() {
                    return "At ";
                  };
                  en2.prototype.everyMinuteBetweenX0AndX1 = function() {
                    return "Every minute between %s and %s";
                  };
                  en2.prototype.at = function() {
                    return "At";
                  };
                  en2.prototype.spaceAnd = function() {
                    return " and";
                  };
                  en2.prototype.everySecond = function() {
                    return "every second";
                  };
                  en2.prototype.everyX0Seconds = function() {
                    return "every %s seconds";
                  };
                  en2.prototype.secondsX0ThroughX1PastTheMinute = function() {
                    return "seconds %s through %s past the minute";
                  };
                  en2.prototype.atX0SecondsPastTheMinute = function() {
                    return "at %s seconds past the minute";
                  };
                  en2.prototype.everyX0Minutes = function() {
                    return "every %s minutes";
                  };
                  en2.prototype.minutesX0ThroughX1PastTheHour = function() {
                    return "minutes %s through %s past the hour";
                  };
                  en2.prototype.atX0MinutesPastTheHour = function() {
                    return "at %s minutes past the hour";
                  };
                  en2.prototype.everyX0Hours = function() {
                    return "every %s hours";
                  };
                  en2.prototype.betweenX0AndX1 = function() {
                    return "between %s and %s";
                  };
                  en2.prototype.atX0 = function() {
                    return "at %s";
                  };
                  en2.prototype.commaEveryDay = function() {
                    return ", every day";
                  };
                  en2.prototype.commaEveryX0DaysOfTheWeek = function() {
                    return ", every %s days of the week";
                  };
                  en2.prototype.commaX0ThroughX1 = function() {
                    return ", %s through %s";
                  };
                  en2.prototype.commaAndX0ThroughX1 = function() {
                    return ", %s through %s";
                  };
                  en2.prototype.first = function() {
                    return "first";
                  };
                  en2.prototype.second = function() {
                    return "second";
                  };
                  en2.prototype.third = function() {
                    return "third";
                  };
                  en2.prototype.fourth = function() {
                    return "fourth";
                  };
                  en2.prototype.fifth = function() {
                    return "fifth";
                  };
                  en2.prototype.commaOnThe = function() {
                    return ", on the ";
                  };
                  en2.prototype.spaceX0OfTheMonth = function() {
                    return " %s of the month";
                  };
                  en2.prototype.lastDay = function() {
                    return "the last day";
                  };
                  en2.prototype.commaOnTheLastX0OfTheMonth = function() {
                    return ", on the last %s of the month";
                  };
                  en2.prototype.commaOnlyOnX0 = function() {
                    return ", only on %s";
                  };
                  en2.prototype.commaAndOnX0 = function() {
                    return ", and on %s";
                  };
                  en2.prototype.commaEveryX0Months = function() {
                    return ", every %s months";
                  };
                  en2.prototype.commaOnlyInX0 = function() {
                    return ", only in %s";
                  };
                  en2.prototype.commaOnTheLastDayOfTheMonth = function() {
                    return ", on the last day of the month";
                  };
                  en2.prototype.commaOnTheLastWeekdayOfTheMonth = function() {
                    return ", on the last weekday of the month";
                  };
                  en2.prototype.commaDaysBeforeTheLastDayOfTheMonth = function() {
                    return ", %s days before the last day of the month";
                  };
                  en2.prototype.firstWeekday = function() {
                    return "first weekday";
                  };
                  en2.prototype.weekdayNearestDayX0 = function() {
                    return "weekday nearest day %s";
                  };
                  en2.prototype.commaOnTheX0OfTheMonth = function() {
                    return ", on the %s of the month";
                  };
                  en2.prototype.commaEveryX0Days = function() {
                    return ", every %s days";
                  };
                  en2.prototype.commaBetweenDayX0AndX1OfTheMonth = function() {
                    return ", between day %s and %s of the month";
                  };
                  en2.prototype.commaOnDayX0OfTheMonth = function() {
                    return ", on day %s of the month";
                  };
                  en2.prototype.commaEveryHour = function() {
                    return ", every hour";
                  };
                  en2.prototype.commaEveryX0Years = function() {
                    return ", every %s years";
                  };
                  en2.prototype.commaStartingX0 = function() {
                    return ", starting %s";
                  };
                  en2.prototype.daysOfTheWeek = function() {
                    return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                  };
                  en2.prototype.monthsOfTheYear = function() {
                    return [
                      "January",
                      "February",
                      "March",
                      "April",
                      "May",
                      "June",
                      "July",
                      "August",
                      "September",
                      "October",
                      "November",
                      "December"
                    ];
                  };
                  return en2;
                }();
                exports2.en = en;
              }
            ),
            /***/
            586: (
              /***/
              (__unused_webpack_module, exports2) => {
                Object.defineProperty(exports2, "__esModule", { value: true });
                function assert(value, message) {
                  if (!value) {
                    throw new Error(message);
                  }
                }
                var RangeValidator = function() {
                  function RangeValidator2() {
                  }
                  RangeValidator2.secondRange = function(parse) {
                    var parsed = parse.split(",");
                    for (var i = 0; i < parsed.length; i++) {
                      if (!isNaN(parseInt(parsed[i], 10))) {
                        var second = parseInt(parsed[i], 10);
                        assert(second >= 0 && second <= 59, "seconds part must be >= 0 and <= 59");
                      }
                    }
                  };
                  RangeValidator2.minuteRange = function(parse) {
                    var parsed = parse.split(",");
                    for (var i = 0; i < parsed.length; i++) {
                      if (!isNaN(parseInt(parsed[i], 10))) {
                        var minute = parseInt(parsed[i], 10);
                        assert(minute >= 0 && minute <= 59, "minutes part must be >= 0 and <= 59");
                      }
                    }
                  };
                  RangeValidator2.hourRange = function(parse) {
                    var parsed = parse.split(",");
                    for (var i = 0; i < parsed.length; i++) {
                      if (!isNaN(parseInt(parsed[i], 10))) {
                        var hour = parseInt(parsed[i], 10);
                        assert(hour >= 0 && hour <= 23, "hours part must be >= 0 and <= 23");
                      }
                    }
                  };
                  RangeValidator2.dayOfMonthRange = function(parse) {
                    var parsed = parse.split(",");
                    for (var i = 0; i < parsed.length; i++) {
                      if (!isNaN(parseInt(parsed[i], 10))) {
                        var dayOfMonth = parseInt(parsed[i], 10);
                        assert(dayOfMonth >= 1 && dayOfMonth <= 31, "DOM part must be >= 1 and <= 31");
                      }
                    }
                  };
                  RangeValidator2.monthRange = function(parse, monthStartIndexZero) {
                    var parsed = parse.split(",");
                    for (var i = 0; i < parsed.length; i++) {
                      if (!isNaN(parseInt(parsed[i], 10))) {
                        var month = parseInt(parsed[i], 10);
                        assert(month >= 1 && month <= 12, monthStartIndexZero ? "month part must be >= 0 and <= 11" : "month part must be >= 1 and <= 12");
                      }
                    }
                  };
                  RangeValidator2.dayOfWeekRange = function(parse, dayOfWeekStartIndexZero) {
                    var parsed = parse.split(",");
                    for (var i = 0; i < parsed.length; i++) {
                      if (!isNaN(parseInt(parsed[i], 10))) {
                        var dayOfWeek = parseInt(parsed[i], 10);
                        assert(dayOfWeek >= 0 && dayOfWeek <= 6, dayOfWeekStartIndexZero ? "DOW part must be >= 0 and <= 6" : "DOW part must be >= 1 and <= 7");
                      }
                    }
                  };
                  return RangeValidator2;
                }();
                exports2["default"] = RangeValidator;
              }
            ),
            /***/
            910: (
              /***/
              (__unused_webpack_module, exports2) => {
                Object.defineProperty(exports2, "__esModule", { value: true });
                exports2.StringUtilities = void 0;
                var StringUtilities = function() {
                  function StringUtilities2() {
                  }
                  StringUtilities2.format = function(template) {
                    var values = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                      values[_i - 1] = arguments[_i];
                    }
                    return template.replace(/%s/g, function(substring) {
                      var args = [];
                      for (var _i2 = 1; _i2 < arguments.length; _i2++) {
                        args[_i2 - 1] = arguments[_i2];
                      }
                      return values.shift();
                    });
                  };
                  StringUtilities2.containsAny = function(text, searchStrings) {
                    return searchStrings.some(function(c) {
                      return text.indexOf(c) > -1;
                    });
                  };
                  return StringUtilities2;
                }();
                exports2.StringUtilities = StringUtilities;
              }
            )
            /******/
          };
          var __webpack_module_cache__ = {};
          function __webpack_require__(moduleId) {
            var cachedModule = __webpack_module_cache__[moduleId];
            if (cachedModule !== void 0) {
              return cachedModule.exports;
            }
            var module2 = __webpack_module_cache__[moduleId] = {
              /******/
              // no module.id needed
              /******/
              // no module.loaded needed
              /******/
              exports: {}
              /******/
            };
            __webpack_modules__[moduleId](module2, module2.exports, __webpack_require__);
            return module2.exports;
          }
          var __webpack_exports__ = {};
          (() => {
            var exports2 = __webpack_exports__;
            Object.defineProperty(exports2, "__esModule", { value: true });
            exports2.toString = void 0;
            var expressionDescriptor_1 = __webpack_require__(728);
            var enLocaleLoader_1 = __webpack_require__(336);
            expressionDescriptor_1.ExpressionDescriptor.initialize(new enLocaleLoader_1.enLocaleLoader());
            exports2["default"] = expressionDescriptor_1.ExpressionDescriptor;
            var toString = expressionDescriptor_1.ExpressionDescriptor.toString;
            exports2.toString = toString;
          })();
          return __webpack_exports__;
        })()
      );
    });
  }
});

// js/workflow-editor/component.tsx
var import_react15 = __toESM(require_react());
var import_client = __toESM(require_client());

// js/workflow-diagram/WorkflowDiagram.tsx
var import_react14 = __toESM(require_react());

// node_modules/@reactflow/core/dist/esm/index.mjs
var import_react2 = __toESM(require_react(), 1);

// node_modules/classcat/index.js
function cc(names) {
  if (typeof names === "string" || typeof names === "number")
    return "" + names;
  let out = "";
  if (Array.isArray(names)) {
    for (let i = 0, tmp; i < names.length; i++) {
      if ((tmp = cc(names[i])) !== "") {
        out += (out && " ") + tmp;
      }
    }
  } else {
    for (let k in names) {
      if (names[k])
        out += (out && " ") + k;
    }
  }
  return out;
}

// node_modules/zustand/esm/traditional.mjs
var import_react = __toESM(require_react(), 1);
var import_with_selector = __toESM(require_with_selector(), 1);
var { useDebugValue } = import_react.default;
var { useSyncExternalStoreWithSelector } = import_with_selector.default;
function useStoreWithEqualityFn(api, selector = api.getState, equalityFn) {
  const slice = useSyncExternalStoreWithSelector(
    api.subscribe,
    api.getState,
    api.getServerState || api.getState,
    selector,
    equalityFn
  );
  useDebugValue(slice);
  return slice;
}
var createWithEqualityFnImpl = (createState, defaultEqualityFn) => {
  const api = createStore(createState);
  const useBoundStoreWithEqualityFn = (selector, equalityFn = defaultEqualityFn) => useStoreWithEqualityFn(api, selector, equalityFn);
  Object.assign(useBoundStoreWithEqualityFn, api);
  return useBoundStoreWithEqualityFn;
};
var createWithEqualityFn = (createState, defaultEqualityFn) => createState ? createWithEqualityFnImpl(createState, defaultEqualityFn) : createWithEqualityFnImpl;

// node_modules/zustand/esm/shallow.mjs
function shallow$1(objA, objB) {
  if (Object.is(objA, objB)) {
    return true;
  }
  if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
    return false;
  }
  if (objA instanceof Map && objB instanceof Map) {
    if (objA.size !== objB.size)
      return false;
    for (const [key, value] of objA) {
      if (!Object.is(value, objB.get(key))) {
        return false;
      }
    }
    return true;
  }
  if (objA instanceof Set && objB instanceof Set) {
    if (objA.size !== objB.size)
      return false;
    for (const value of objA) {
      if (!objB.has(value)) {
        return false;
      }
    }
    return true;
  }
  const keysA = Object.keys(objA);
  if (keysA.length !== Object.keys(objB).length) {
    return false;
  }
  for (let i = 0; i < keysA.length; i++) {
    if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !Object.is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }
  return true;
}

// node_modules/d3-dispatch/src/dispatch.js
var noop = { value: () => {
} };
function dispatch() {
  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
    if (!(t = arguments[i] + "") || t in _ || /[\s.]/.test(t))
      throw new Error("illegal type: " + t);
    _[t] = [];
  }
  return new Dispatch(_);
}
function Dispatch(_) {
  this._ = _;
}
function parseTypenames(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0)
      name = t.slice(i + 1), t = t.slice(0, i);
    if (t && !types.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    return { type: t, name };
  });
}
Dispatch.prototype = dispatch.prototype = {
  constructor: Dispatch,
  on: function(typename, callback) {
    var _ = this._, T = parseTypenames(typename + "", _), t, i = -1, n = T.length;
    if (arguments.length < 2) {
      while (++i < n)
        if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name)))
          return t;
      return;
    }
    if (callback != null && typeof callback !== "function")
      throw new Error("invalid callback: " + callback);
    while (++i < n) {
      if (t = (typename = T[i]).type)
        _[t] = set(_[t], typename.name, callback);
      else if (callback == null)
        for (t in _)
          _[t] = set(_[t], typename.name, null);
    }
    return this;
  },
  copy: function() {
    var copy = {}, _ = this._;
    for (var t in _)
      copy[t] = _[t].slice();
    return new Dispatch(copy);
  },
  call: function(type, that) {
    if ((n = arguments.length - 2) > 0)
      for (var args = new Array(n), i = 0, n, t; i < n; ++i)
        args[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(type))
      throw new Error("unknown type: " + type);
    for (t = this._[type], i = 0, n = t.length; i < n; ++i)
      t[i].value.apply(that, args);
  },
  apply: function(type, that, args) {
    if (!this._.hasOwnProperty(type))
      throw new Error("unknown type: " + type);
    for (var t = this._[type], i = 0, n = t.length; i < n; ++i)
      t[i].value.apply(that, args);
  }
};
function get(type, name) {
  for (var i = 0, n = type.length, c; i < n; ++i) {
    if ((c = type[i]).name === name) {
      return c.value;
    }
  }
}
function set(type, name, callback) {
  for (var i = 0, n = type.length; i < n; ++i) {
    if (type[i].name === name) {
      type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
      break;
    }
  }
  if (callback != null)
    type.push({ name, value: callback });
  return type;
}
var dispatch_default = dispatch;

// node_modules/d3-selection/src/namespaces.js
var xhtml = "http://www.w3.org/1999/xhtml";
var namespaces_default = {
  svg: "http://www.w3.org/2000/svg",
  xhtml,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};

// node_modules/d3-selection/src/namespace.js
function namespace_default(name) {
  var prefix = name += "", i = prefix.indexOf(":");
  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns")
    name = name.slice(i + 1);
  return namespaces_default.hasOwnProperty(prefix) ? { space: namespaces_default[prefix], local: name } : name;
}

// node_modules/d3-selection/src/creator.js
function creatorInherit(name) {
  return function() {
    var document2 = this.ownerDocument, uri = this.namespaceURI;
    return uri === xhtml && document2.documentElement.namespaceURI === xhtml ? document2.createElement(name) : document2.createElementNS(uri, name);
  };
}
function creatorFixed(fullname) {
  return function() {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}
function creator_default(name) {
  var fullname = namespace_default(name);
  return (fullname.local ? creatorFixed : creatorInherit)(fullname);
}

// node_modules/d3-selection/src/selector.js
function none() {
}
function selector_default(selector) {
  return selector == null ? none : function() {
    return this.querySelector(selector);
  };
}

// node_modules/d3-selection/src/selection/select.js
function select_default(select) {
  if (typeof select !== "function")
    select = selector_default(select);
  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node)
          subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
      }
    }
  }
  return new Selection(subgroups, this._parents);
}

// node_modules/d3-selection/src/array.js
function array(x) {
  return x == null ? [] : Array.isArray(x) ? x : Array.from(x);
}

// node_modules/d3-selection/src/selectorAll.js
function empty() {
  return [];
}
function selectorAll_default(selector) {
  return selector == null ? empty : function() {
    return this.querySelectorAll(selector);
  };
}

// node_modules/d3-selection/src/selection/selectAll.js
function arrayAll(select) {
  return function() {
    return array(select.apply(this, arguments));
  };
}
function selectAll_default(select) {
  if (typeof select === "function")
    select = arrayAll(select);
  else
    select = selectorAll_default(select);
  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        subgroups.push(select.call(node, node.__data__, i, group));
        parents.push(node);
      }
    }
  }
  return new Selection(subgroups, parents);
}

// node_modules/d3-selection/src/matcher.js
function matcher_default(selector) {
  return function() {
    return this.matches(selector);
  };
}
function childMatcher(selector) {
  return function(node) {
    return node.matches(selector);
  };
}

// node_modules/d3-selection/src/selection/selectChild.js
var find = Array.prototype.find;
function childFind(match) {
  return function() {
    return find.call(this.children, match);
  };
}
function childFirst() {
  return this.firstElementChild;
}
function selectChild_default(match) {
  return this.select(match == null ? childFirst : childFind(typeof match === "function" ? match : childMatcher(match)));
}

// node_modules/d3-selection/src/selection/selectChildren.js
var filter = Array.prototype.filter;
function children() {
  return Array.from(this.children);
}
function childrenFilter(match) {
  return function() {
    return filter.call(this.children, match);
  };
}
function selectChildren_default(match) {
  return this.selectAll(match == null ? children : childrenFilter(typeof match === "function" ? match : childMatcher(match)));
}

// node_modules/d3-selection/src/selection/filter.js
function filter_default(match) {
  if (typeof match !== "function")
    match = matcher_default(match);
  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }
  return new Selection(subgroups, this._parents);
}

// node_modules/d3-selection/src/selection/sparse.js
function sparse_default(update) {
  return new Array(update.length);
}

// node_modules/d3-selection/src/selection/enter.js
function enter_default() {
  return new Selection(this._enter || this._groups.map(sparse_default), this._parents);
}
function EnterNode(parent, datum2) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum2;
}
EnterNode.prototype = {
  constructor: EnterNode,
  appendChild: function(child) {
    return this._parent.insertBefore(child, this._next);
  },
  insertBefore: function(child, next) {
    return this._parent.insertBefore(child, next);
  },
  querySelector: function(selector) {
    return this._parent.querySelector(selector);
  },
  querySelectorAll: function(selector) {
    return this._parent.querySelectorAll(selector);
  }
};

// node_modules/d3-selection/src/constant.js
function constant_default(x) {
  return function() {
    return x;
  };
}

// node_modules/d3-selection/src/selection/data.js
function bindIndex(parent, group, enter, update, exit, data) {
  var i = 0, node, groupLength = group.length, dataLength = data.length;
  for (; i < dataLength; ++i) {
    if (node = group[i]) {
      node.__data__ = data[i];
      update[i] = node;
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }
  for (; i < groupLength; ++i) {
    if (node = group[i]) {
      exit[i] = node;
    }
  }
}
function bindKey(parent, group, enter, update, exit, data, key) {
  var i, node, nodeByKeyValue = /* @__PURE__ */ new Map(), groupLength = group.length, dataLength = data.length, keyValues = new Array(groupLength), keyValue;
  for (i = 0; i < groupLength; ++i) {
    if (node = group[i]) {
      keyValues[i] = keyValue = key.call(node, node.__data__, i, group) + "";
      if (nodeByKeyValue.has(keyValue)) {
        exit[i] = node;
      } else {
        nodeByKeyValue.set(keyValue, node);
      }
    }
  }
  for (i = 0; i < dataLength; ++i) {
    keyValue = key.call(parent, data[i], i, data) + "";
    if (node = nodeByKeyValue.get(keyValue)) {
      update[i] = node;
      node.__data__ = data[i];
      nodeByKeyValue.delete(keyValue);
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }
  for (i = 0; i < groupLength; ++i) {
    if ((node = group[i]) && nodeByKeyValue.get(keyValues[i]) === node) {
      exit[i] = node;
    }
  }
}
function datum(node) {
  return node.__data__;
}
function data_default(value, key) {
  if (!arguments.length)
    return Array.from(this, datum);
  var bind = key ? bindKey : bindIndex, parents = this._parents, groups = this._groups;
  if (typeof value !== "function")
    value = constant_default(value);
  for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
    var parent = parents[j], group = groups[j], groupLength = group.length, data = arraylike(value.call(parent, parent && parent.__data__, j, parents)), dataLength = data.length, enterGroup = enter[j] = new Array(dataLength), updateGroup = update[j] = new Array(dataLength), exitGroup = exit[j] = new Array(groupLength);
    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);
    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1)
          i1 = i0 + 1;
        while (!(next = updateGroup[i1]) && ++i1 < dataLength)
          ;
        previous._next = next || null;
      }
    }
  }
  update = new Selection(update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
}
function arraylike(data) {
  return typeof data === "object" && "length" in data ? data : Array.from(data);
}

// node_modules/d3-selection/src/selection/exit.js
function exit_default() {
  return new Selection(this._exit || this._groups.map(sparse_default), this._parents);
}

// node_modules/d3-selection/src/selection/join.js
function join_default(onenter, onupdate, onexit) {
  var enter = this.enter(), update = this, exit = this.exit();
  if (typeof onenter === "function") {
    enter = onenter(enter);
    if (enter)
      enter = enter.selection();
  } else {
    enter = enter.append(onenter + "");
  }
  if (onupdate != null) {
    update = onupdate(update);
    if (update)
      update = update.selection();
  }
  if (onexit == null)
    exit.remove();
  else
    onexit(exit);
  return enter && update ? enter.merge(update).order() : update;
}

// node_modules/d3-selection/src/selection/merge.js
function merge_default(context) {
  var selection2 = context.selection ? context.selection() : context;
  for (var groups0 = this._groups, groups1 = selection2._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }
  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }
  return new Selection(merges, this._parents);
}

// node_modules/d3-selection/src/selection/order.js
function order_default() {
  for (var groups = this._groups, j = -1, m = groups.length; ++j < m; ) {
    for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0; ) {
      if (node = group[i]) {
        if (next && node.compareDocumentPosition(next) ^ 4)
          next.parentNode.insertBefore(node, next);
        next = node;
      }
    }
  }
  return this;
}

// node_modules/d3-selection/src/selection/sort.js
function sort_default(compare) {
  if (!compare)
    compare = ascending;
  function compareNode(a, b) {
    return a && b ? compare(a.__data__, b.__data__) : !a - !b;
  }
  for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        sortgroup[i] = node;
      }
    }
    sortgroup.sort(compareNode);
  }
  return new Selection(sortgroups, this._parents).order();
}
function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

// node_modules/d3-selection/src/selection/call.js
function call_default() {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
}

// node_modules/d3-selection/src/selection/nodes.js
function nodes_default() {
  return Array.from(this);
}

// node_modules/d3-selection/src/selection/node.js
function node_default() {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
      var node = group[i];
      if (node)
        return node;
    }
  }
  return null;
}

// node_modules/d3-selection/src/selection/size.js
function size_default() {
  let size = 0;
  for (const node of this)
    ++size;
  return size;
}

// node_modules/d3-selection/src/selection/empty.js
function empty_default() {
  return !this.node();
}

// node_modules/d3-selection/src/selection/each.js
function each_default(callback) {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i])
        callback.call(node, node.__data__, i, group);
    }
  }
  return this;
}

// node_modules/d3-selection/src/selection/attr.js
function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}
function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}
function attrConstant(name, value) {
  return function() {
    this.setAttribute(name, value);
  };
}
function attrConstantNS(fullname, value) {
  return function() {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}
function attrFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null)
      this.removeAttribute(name);
    else
      this.setAttribute(name, v);
  };
}
function attrFunctionNS(fullname, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null)
      this.removeAttributeNS(fullname.space, fullname.local);
    else
      this.setAttributeNS(fullname.space, fullname.local, v);
  };
}
function attr_default(name, value) {
  var fullname = namespace_default(name);
  if (arguments.length < 2) {
    var node = this.node();
    return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname);
  }
  return this.each((value == null ? fullname.local ? attrRemoveNS : attrRemove : typeof value === "function" ? fullname.local ? attrFunctionNS : attrFunction : fullname.local ? attrConstantNS : attrConstant)(fullname, value));
}

// node_modules/d3-selection/src/window.js
function window_default(node) {
  return node.ownerDocument && node.ownerDocument.defaultView || node.document && node || node.defaultView;
}

// node_modules/d3-selection/src/selection/style.js
function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}
function styleConstant(name, value, priority) {
  return function() {
    this.style.setProperty(name, value, priority);
  };
}
function styleFunction(name, value, priority) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null)
      this.style.removeProperty(name);
    else
      this.style.setProperty(name, v, priority);
  };
}
function style_default(name, value, priority) {
  return arguments.length > 1 ? this.each((value == null ? styleRemove : typeof value === "function" ? styleFunction : styleConstant)(name, value, priority == null ? "" : priority)) : styleValue(this.node(), name);
}
function styleValue(node, name) {
  return node.style.getPropertyValue(name) || window_default(node).getComputedStyle(node, null).getPropertyValue(name);
}

// node_modules/d3-selection/src/selection/property.js
function propertyRemove(name) {
  return function() {
    delete this[name];
  };
}
function propertyConstant(name, value) {
  return function() {
    this[name] = value;
  };
}
function propertyFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null)
      delete this[name];
    else
      this[name] = v;
  };
}
function property_default(name, value) {
  return arguments.length > 1 ? this.each((value == null ? propertyRemove : typeof value === "function" ? propertyFunction : propertyConstant)(name, value)) : this.node()[name];
}

// node_modules/d3-selection/src/selection/classed.js
function classArray(string) {
  return string.trim().split(/^|\s+/);
}
function classList(node) {
  return node.classList || new ClassList(node);
}
function ClassList(node) {
  this._node = node;
  this._names = classArray(node.getAttribute("class") || "");
}
ClassList.prototype = {
  add: function(name) {
    var i = this._names.indexOf(name);
    if (i < 0) {
      this._names.push(name);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function(name) {
    var i = this._names.indexOf(name);
    if (i >= 0) {
      this._names.splice(i, 1);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function(name) {
    return this._names.indexOf(name) >= 0;
  }
};
function classedAdd(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n)
    list.add(names[i]);
}
function classedRemove(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n)
    list.remove(names[i]);
}
function classedTrue(names) {
  return function() {
    classedAdd(this, names);
  };
}
function classedFalse(names) {
  return function() {
    classedRemove(this, names);
  };
}
function classedFunction(names, value) {
  return function() {
    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
  };
}
function classed_default(name, value) {
  var names = classArray(name + "");
  if (arguments.length < 2) {
    var list = classList(this.node()), i = -1, n = names.length;
    while (++i < n)
      if (!list.contains(names[i]))
        return false;
    return true;
  }
  return this.each((typeof value === "function" ? classedFunction : value ? classedTrue : classedFalse)(names, value));
}

// node_modules/d3-selection/src/selection/text.js
function textRemove() {
  this.textContent = "";
}
function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}
function textFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.textContent = v == null ? "" : v;
  };
}
function text_default(value) {
  return arguments.length ? this.each(value == null ? textRemove : (typeof value === "function" ? textFunction : textConstant)(value)) : this.node().textContent;
}

// node_modules/d3-selection/src/selection/html.js
function htmlRemove() {
  this.innerHTML = "";
}
function htmlConstant(value) {
  return function() {
    this.innerHTML = value;
  };
}
function htmlFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.innerHTML = v == null ? "" : v;
  };
}
function html_default(value) {
  return arguments.length ? this.each(value == null ? htmlRemove : (typeof value === "function" ? htmlFunction : htmlConstant)(value)) : this.node().innerHTML;
}

// node_modules/d3-selection/src/selection/raise.js
function raise() {
  if (this.nextSibling)
    this.parentNode.appendChild(this);
}
function raise_default() {
  return this.each(raise);
}

// node_modules/d3-selection/src/selection/lower.js
function lower() {
  if (this.previousSibling)
    this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function lower_default() {
  return this.each(lower);
}

// node_modules/d3-selection/src/selection/append.js
function append_default(name) {
  var create3 = typeof name === "function" ? name : creator_default(name);
  return this.select(function() {
    return this.appendChild(create3.apply(this, arguments));
  });
}

// node_modules/d3-selection/src/selection/insert.js
function constantNull() {
  return null;
}
function insert_default(name, before) {
  var create3 = typeof name === "function" ? name : creator_default(name), select = before == null ? constantNull : typeof before === "function" ? before : selector_default(before);
  return this.select(function() {
    return this.insertBefore(create3.apply(this, arguments), select.apply(this, arguments) || null);
  });
}

// node_modules/d3-selection/src/selection/remove.js
function remove() {
  var parent = this.parentNode;
  if (parent)
    parent.removeChild(this);
}
function remove_default() {
  return this.each(remove);
}

// node_modules/d3-selection/src/selection/clone.js
function selection_cloneShallow() {
  var clone = this.cloneNode(false), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function selection_cloneDeep() {
  var clone = this.cloneNode(true), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function clone_default(deep) {
  return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
}

// node_modules/d3-selection/src/selection/datum.js
function datum_default(value) {
  return arguments.length ? this.property("__data__", value) : this.node().__data__;
}

// node_modules/d3-selection/src/selection/on.js
function contextListener(listener) {
  return function(event) {
    listener.call(this, event, this.__data__);
  };
}
function parseTypenames2(typenames) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0)
      name = t.slice(i + 1), t = t.slice(0, i);
    return { type: t, name };
  });
}
function onRemove(typename) {
  return function() {
    var on = this.__on;
    if (!on)
      return;
    for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.options);
      } else {
        on[++i] = o;
      }
    }
    if (++i)
      on.length = i;
    else
      delete this.__on;
  };
}
function onAdd(typename, value, options) {
  return function() {
    var on = this.__on, o, listener = contextListener(value);
    if (on)
      for (var j = 0, m = on.length; j < m; ++j) {
        if ((o = on[j]).type === typename.type && o.name === typename.name) {
          this.removeEventListener(o.type, o.listener, o.options);
          this.addEventListener(o.type, o.listener = listener, o.options = options);
          o.value = value;
          return;
        }
      }
    this.addEventListener(typename.type, listener, options);
    o = { type: typename.type, name: typename.name, value, listener, options };
    if (!on)
      this.__on = [o];
    else
      on.push(o);
  };
}
function on_default(typename, value, options) {
  var typenames = parseTypenames2(typename + ""), i, n = typenames.length, t;
  if (arguments.length < 2) {
    var on = this.node().__on;
    if (on)
      for (var j = 0, m = on.length, o; j < m; ++j) {
        for (i = 0, o = on[j]; i < n; ++i) {
          if ((t = typenames[i]).type === o.type && t.name === o.name) {
            return o.value;
          }
        }
      }
    return;
  }
  on = value ? onAdd : onRemove;
  for (i = 0; i < n; ++i)
    this.each(on(typenames[i], value, options));
  return this;
}

// node_modules/d3-selection/src/selection/dispatch.js
function dispatchEvent(node, type, params) {
  var window2 = window_default(node), event = window2.CustomEvent;
  if (typeof event === "function") {
    event = new event(type, params);
  } else {
    event = window2.document.createEvent("Event");
    if (params)
      event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
    else
      event.initEvent(type, false, false);
  }
  node.dispatchEvent(event);
}
function dispatchConstant(type, params) {
  return function() {
    return dispatchEvent(this, type, params);
  };
}
function dispatchFunction(type, params) {
  return function() {
    return dispatchEvent(this, type, params.apply(this, arguments));
  };
}
function dispatch_default2(type, params) {
  return this.each((typeof params === "function" ? dispatchFunction : dispatchConstant)(type, params));
}

// node_modules/d3-selection/src/selection/iterator.js
function* iterator_default() {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i])
        yield node;
    }
  }
}

// node_modules/d3-selection/src/selection/index.js
var root = [null];
function Selection(groups, parents) {
  this._groups = groups;
  this._parents = parents;
}
function selection() {
  return new Selection([[document.documentElement]], root);
}
function selection_selection() {
  return this;
}
Selection.prototype = selection.prototype = {
  constructor: Selection,
  select: select_default,
  selectAll: selectAll_default,
  selectChild: selectChild_default,
  selectChildren: selectChildren_default,
  filter: filter_default,
  data: data_default,
  enter: enter_default,
  exit: exit_default,
  join: join_default,
  merge: merge_default,
  selection: selection_selection,
  order: order_default,
  sort: sort_default,
  call: call_default,
  nodes: nodes_default,
  node: node_default,
  size: size_default,
  empty: empty_default,
  each: each_default,
  attr: attr_default,
  style: style_default,
  property: property_default,
  classed: classed_default,
  text: text_default,
  html: html_default,
  raise: raise_default,
  lower: lower_default,
  append: append_default,
  insert: insert_default,
  remove: remove_default,
  clone: clone_default,
  datum: datum_default,
  on: on_default,
  dispatch: dispatch_default2,
  [Symbol.iterator]: iterator_default
};
var selection_default = selection;

// node_modules/d3-selection/src/select.js
function select_default2(selector) {
  return typeof selector === "string" ? new Selection([[document.querySelector(selector)]], [document.documentElement]) : new Selection([[selector]], root);
}

// node_modules/d3-selection/src/sourceEvent.js
function sourceEvent_default(event) {
  let sourceEvent;
  while (sourceEvent = event.sourceEvent)
    event = sourceEvent;
  return event;
}

// node_modules/d3-selection/src/pointer.js
function pointer_default(event, node) {
  event = sourceEvent_default(event);
  if (node === void 0)
    node = event.currentTarget;
  if (node) {
    var svg = node.ownerSVGElement || node;
    if (svg.createSVGPoint) {
      var point = svg.createSVGPoint();
      point.x = event.clientX, point.y = event.clientY;
      point = point.matrixTransform(node.getScreenCTM().inverse());
      return [point.x, point.y];
    }
    if (node.getBoundingClientRect) {
      var rect = node.getBoundingClientRect();
      return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
    }
  }
  return [event.pageX, event.pageY];
}

// node_modules/d3-drag/src/noevent.js
var nonpassive = { passive: false };
var nonpassivecapture = { capture: true, passive: false };
function nopropagation(event) {
  event.stopImmediatePropagation();
}
function noevent_default(event) {
  event.preventDefault();
  event.stopImmediatePropagation();
}

// node_modules/d3-drag/src/nodrag.js
function nodrag_default(view) {
  var root2 = view.document.documentElement, selection2 = select_default2(view).on("dragstart.drag", noevent_default, nonpassivecapture);
  if ("onselectstart" in root2) {
    selection2.on("selectstart.drag", noevent_default, nonpassivecapture);
  } else {
    root2.__noselect = root2.style.MozUserSelect;
    root2.style.MozUserSelect = "none";
  }
}
function yesdrag(view, noclick) {
  var root2 = view.document.documentElement, selection2 = select_default2(view).on("dragstart.drag", null);
  if (noclick) {
    selection2.on("click.drag", noevent_default, nonpassivecapture);
    setTimeout(function() {
      selection2.on("click.drag", null);
    }, 0);
  }
  if ("onselectstart" in root2) {
    selection2.on("selectstart.drag", null);
  } else {
    root2.style.MozUserSelect = root2.__noselect;
    delete root2.__noselect;
  }
}

// node_modules/d3-drag/src/constant.js
var constant_default2 = (x) => () => x;

// node_modules/d3-drag/src/event.js
function DragEvent(type, {
  sourceEvent,
  subject,
  target,
  identifier,
  active,
  x,
  y,
  dx,
  dy,
  dispatch: dispatch3
}) {
  Object.defineProperties(this, {
    type: { value: type, enumerable: true, configurable: true },
    sourceEvent: { value: sourceEvent, enumerable: true, configurable: true },
    subject: { value: subject, enumerable: true, configurable: true },
    target: { value: target, enumerable: true, configurable: true },
    identifier: { value: identifier, enumerable: true, configurable: true },
    active: { value: active, enumerable: true, configurable: true },
    x: { value: x, enumerable: true, configurable: true },
    y: { value: y, enumerable: true, configurable: true },
    dx: { value: dx, enumerable: true, configurable: true },
    dy: { value: dy, enumerable: true, configurable: true },
    _: { value: dispatch3 }
  });
}
DragEvent.prototype.on = function() {
  var value = this._.on.apply(this._, arguments);
  return value === this._ ? this : value;
};

// node_modules/d3-drag/src/drag.js
function defaultFilter(event) {
  return !event.ctrlKey && !event.button;
}
function defaultContainer() {
  return this.parentNode;
}
function defaultSubject(event, d) {
  return d == null ? { x: event.x, y: event.y } : d;
}
function defaultTouchable() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function drag_default() {
  var filter2 = defaultFilter, container = defaultContainer, subject = defaultSubject, touchable = defaultTouchable, gestures = {}, listeners = dispatch_default("start", "drag", "end"), active = 0, mousedownx, mousedowny, mousemoving, touchending, clickDistance2 = 0;
  function drag(selection2) {
    selection2.on("mousedown.drag", mousedowned).filter(touchable).on("touchstart.drag", touchstarted).on("touchmove.drag", touchmoved, nonpassive).on("touchend.drag touchcancel.drag", touchended).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function mousedowned(event, d) {
    if (touchending || !filter2.call(this, event, d))
      return;
    var gesture = beforestart(this, container.call(this, event, d), event, d, "mouse");
    if (!gesture)
      return;
    select_default2(event.view).on("mousemove.drag", mousemoved, nonpassivecapture).on("mouseup.drag", mouseupped, nonpassivecapture);
    nodrag_default(event.view);
    nopropagation(event);
    mousemoving = false;
    mousedownx = event.clientX;
    mousedowny = event.clientY;
    gesture("start", event);
  }
  function mousemoved(event) {
    noevent_default(event);
    if (!mousemoving) {
      var dx = event.clientX - mousedownx, dy = event.clientY - mousedowny;
      mousemoving = dx * dx + dy * dy > clickDistance2;
    }
    gestures.mouse("drag", event);
  }
  function mouseupped(event) {
    select_default2(event.view).on("mousemove.drag mouseup.drag", null);
    yesdrag(event.view, mousemoving);
    noevent_default(event);
    gestures.mouse("end", event);
  }
  function touchstarted(event, d) {
    if (!filter2.call(this, event, d))
      return;
    var touches = event.changedTouches, c = container.call(this, event, d), n = touches.length, i, gesture;
    for (i = 0; i < n; ++i) {
      if (gesture = beforestart(this, c, event, d, touches[i].identifier, touches[i])) {
        nopropagation(event);
        gesture("start", event, touches[i]);
      }
    }
  }
  function touchmoved(event) {
    var touches = event.changedTouches, n = touches.length, i, gesture;
    for (i = 0; i < n; ++i) {
      if (gesture = gestures[touches[i].identifier]) {
        noevent_default(event);
        gesture("drag", event, touches[i]);
      }
    }
  }
  function touchended(event) {
    var touches = event.changedTouches, n = touches.length, i, gesture;
    if (touchending)
      clearTimeout(touchending);
    touchending = setTimeout(function() {
      touchending = null;
    }, 500);
    for (i = 0; i < n; ++i) {
      if (gesture = gestures[touches[i].identifier]) {
        nopropagation(event);
        gesture("end", event, touches[i]);
      }
    }
  }
  function beforestart(that, container2, event, d, identifier, touch) {
    var dispatch3 = listeners.copy(), p = pointer_default(touch || event, container2), dx, dy, s;
    if ((s = subject.call(that, new DragEvent("beforestart", {
      sourceEvent: event,
      target: drag,
      identifier,
      active,
      x: p[0],
      y: p[1],
      dx: 0,
      dy: 0,
      dispatch: dispatch3
    }), d)) == null)
      return;
    dx = s.x - p[0] || 0;
    dy = s.y - p[1] || 0;
    return function gesture(type, event2, touch2) {
      var p0 = p, n;
      switch (type) {
        case "start":
          gestures[identifier] = gesture, n = active++;
          break;
        case "end":
          delete gestures[identifier], --active;
        case "drag":
          p = pointer_default(touch2 || event2, container2), n = active;
          break;
      }
      dispatch3.call(
        type,
        that,
        new DragEvent(type, {
          sourceEvent: event2,
          subject: s,
          target: drag,
          identifier,
          active: n,
          x: p[0] + dx,
          y: p[1] + dy,
          dx: p[0] - p0[0],
          dy: p[1] - p0[1],
          dispatch: dispatch3
        }),
        d
      );
    };
  }
  drag.filter = function(_) {
    return arguments.length ? (filter2 = typeof _ === "function" ? _ : constant_default2(!!_), drag) : filter2;
  };
  drag.container = function(_) {
    return arguments.length ? (container = typeof _ === "function" ? _ : constant_default2(_), drag) : container;
  };
  drag.subject = function(_) {
    return arguments.length ? (subject = typeof _ === "function" ? _ : constant_default2(_), drag) : subject;
  };
  drag.touchable = function(_) {
    return arguments.length ? (touchable = typeof _ === "function" ? _ : constant_default2(!!_), drag) : touchable;
  };
  drag.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? drag : value;
  };
  drag.clickDistance = function(_) {
    return arguments.length ? (clickDistance2 = (_ = +_) * _, drag) : Math.sqrt(clickDistance2);
  };
  return drag;
}

// node_modules/d3-color/src/define.js
function define_default(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}
function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition)
    prototype[key] = definition[key];
  return prototype;
}

// node_modules/d3-color/src/color.js
function Color() {
}
var darker = 0.7;
var brighter = 1 / darker;
var reI = "\\s*([+-]?\\d+)\\s*";
var reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*";
var reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*";
var reHex = /^#([0-9a-f]{3,8})$/;
var reRgbInteger = new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`);
var reRgbPercent = new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`);
var reRgbaInteger = new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`);
var reRgbaPercent = new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`);
var reHslPercent = new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`);
var reHslaPercent = new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`);
var named = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
define_default(Color, color, {
  copy(channels) {
    return Object.assign(new this.constructor(), this, channels);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: color_formatHex,
  // Deprecated! Use color.formatHex.
  formatHex: color_formatHex,
  formatHex8: color_formatHex8,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});
function color_formatHex() {
  return this.rgb().formatHex();
}
function color_formatHex8() {
  return this.rgb().formatHex8();
}
function color_formatHsl() {
  return hslConvert(this).formatHsl();
}
function color_formatRgb() {
  return this.rgb().formatRgb();
}
function color(format) {
  var m, l;
  format = (format + "").trim().toLowerCase();
  return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) : l === 3 ? new Rgb(m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, (m & 15) << 4 | m & 15, 1) : l === 8 ? rgba(m >> 24 & 255, m >> 16 & 255, m >> 8 & 255, (m & 255) / 255) : l === 4 ? rgba(m >> 12 & 15 | m >> 8 & 240, m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, ((m & 15) << 4 | m & 15) / 255) : null) : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) : named.hasOwnProperty(format) ? rgbn(named[format]) : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
}
function rgbn(n) {
  return new Rgb(n >> 16 & 255, n >> 8 & 255, n & 255, 1);
}
function rgba(r, g, b, a) {
  if (a <= 0)
    r = g = b = NaN;
  return new Rgb(r, g, b, a);
}
function rgbConvert(o) {
  if (!(o instanceof Color))
    o = color(o);
  if (!o)
    return new Rgb();
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}
function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}
function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}
define_default(Rgb, rgb, extend(Color, {
  brighter(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Rgb(clampi(this.r), clampi(this.g), clampi(this.b), clampa(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && (-0.5 <= this.g && this.g < 255.5) && (-0.5 <= this.b && this.b < 255.5) && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: rgb_formatHex,
  // Deprecated! Use color.formatHex.
  formatHex: rgb_formatHex,
  formatHex8: rgb_formatHex8,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));
function rgb_formatHex() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}`;
}
function rgb_formatHex8() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function rgb_formatRgb() {
  const a = clampa(this.opacity);
  return `${a === 1 ? "rgb(" : "rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${a === 1 ? ")" : `, ${a})`}`;
}
function clampa(opacity) {
  return isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity));
}
function clampi(value) {
  return Math.max(0, Math.min(255, Math.round(value) || 0));
}
function hex(value) {
  value = clampi(value);
  return (value < 16 ? "0" : "") + value.toString(16);
}
function hsla(h, s, l, a) {
  if (a <= 0)
    h = s = l = NaN;
  else if (l <= 0 || l >= 1)
    h = s = NaN;
  else if (s <= 0)
    h = NaN;
  return new Hsl(h, s, l, a);
}
function hslConvert(o) {
  if (o instanceof Hsl)
    return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color))
    o = color(o);
  if (!o)
    return new Hsl();
  if (o instanceof Hsl)
    return o;
  o = o.rgb();
  var r = o.r / 255, g = o.g / 255, b = o.b / 255, min = Math.min(r, g, b), max = Math.max(r, g, b), h = NaN, s = max - min, l = (max + min) / 2;
  if (s) {
    if (r === max)
      h = (g - b) / s + (g < b) * 6;
    else if (g === max)
      h = (b - r) / s + 2;
    else
      h = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}
function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}
function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}
define_default(Hsl, hsl, extend(Color, {
  brighter(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb() {
    var h = this.h % 360 + (this.h < 0) * 360, s = isNaN(h) || isNaN(this.s) ? 0 : this.s, l = this.l, m2 = l + (l < 0.5 ? l : 1 - l) * s, m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  clamp() {
    return new Hsl(clamph(this.h), clampt(this.s), clampt(this.l), clampa(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && (0 <= this.l && this.l <= 1) && (0 <= this.opacity && this.opacity <= 1);
  },
  formatHsl() {
    const a = clampa(this.opacity);
    return `${a === 1 ? "hsl(" : "hsla("}${clamph(this.h)}, ${clampt(this.s) * 100}%, ${clampt(this.l) * 100}%${a === 1 ? ")" : `, ${a})`}`;
  }
}));
function clamph(value) {
  value = (value || 0) % 360;
  return value < 0 ? value + 360 : value;
}
function clampt(value) {
  return Math.max(0, Math.min(1, value || 0));
}
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
}

// node_modules/d3-interpolate/src/basis.js
function basis(t1, v0, v1, v2, v3) {
  var t2 = t1 * t1, t3 = t2 * t1;
  return ((1 - 3 * t1 + 3 * t2 - t3) * v0 + (4 - 6 * t2 + 3 * t3) * v1 + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2 + t3 * v3) / 6;
}
function basis_default(values) {
  var n = values.length - 1;
  return function(t) {
    var i = t <= 0 ? t = 0 : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n), v1 = values[i], v2 = values[i + 1], v0 = i > 0 ? values[i - 1] : 2 * v1 - v2, v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
}

// node_modules/d3-interpolate/src/basisClosed.js
function basisClosed_default(values) {
  var n = values.length;
  return function(t) {
    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n), v0 = values[(i + n - 1) % n], v1 = values[i % n], v2 = values[(i + 1) % n], v3 = values[(i + 2) % n];
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
}

// node_modules/d3-interpolate/src/constant.js
var constant_default3 = (x) => () => x;

// node_modules/d3-interpolate/src/color.js
function linear(a, d) {
  return function(t) {
    return a + t * d;
  };
}
function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
    return Math.pow(a + t * b, y);
  };
}
function gamma(y) {
  return (y = +y) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y) : constant_default3(isNaN(a) ? b : a);
  };
}
function nogamma(a, b) {
  var d = b - a;
  return d ? linear(a, d) : constant_default3(isNaN(a) ? b : a);
}

// node_modules/d3-interpolate/src/rgb.js
var rgb_default = function rgbGamma(y) {
  var color2 = gamma(y);
  function rgb2(start2, end) {
    var r = color2((start2 = rgb(start2)).r, (end = rgb(end)).r), g = color2(start2.g, end.g), b = color2(start2.b, end.b), opacity = nogamma(start2.opacity, end.opacity);
    return function(t) {
      start2.r = r(t);
      start2.g = g(t);
      start2.b = b(t);
      start2.opacity = opacity(t);
      return start2 + "";
    };
  }
  rgb2.gamma = rgbGamma;
  return rgb2;
}(1);
function rgbSpline(spline) {
  return function(colors) {
    var n = colors.length, r = new Array(n), g = new Array(n), b = new Array(n), i, color2;
    for (i = 0; i < n; ++i) {
      color2 = rgb(colors[i]);
      r[i] = color2.r || 0;
      g[i] = color2.g || 0;
      b[i] = color2.b || 0;
    }
    r = spline(r);
    g = spline(g);
    b = spline(b);
    color2.opacity = 1;
    return function(t) {
      color2.r = r(t);
      color2.g = g(t);
      color2.b = b(t);
      return color2 + "";
    };
  };
}
var rgbBasis = rgbSpline(basis_default);
var rgbBasisClosed = rgbSpline(basisClosed_default);

// node_modules/d3-interpolate/src/number.js
function number_default(a, b) {
  return a = +a, b = +b, function(t) {
    return a * (1 - t) + b * t;
  };
}

// node_modules/d3-interpolate/src/string.js
var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
var reB = new RegExp(reA.source, "g");
function zero(b) {
  return function() {
    return b;
  };
}
function one(b) {
  return function(t) {
    return b(t) + "";
  };
}
function string_default(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, am, bm, bs, i = -1, s = [], q = [];
  a = a + "", b = b + "";
  while ((am = reA.exec(a)) && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) {
      bs = b.slice(bi, bs);
      if (s[i])
        s[i] += bs;
      else
        s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) {
      if (s[i])
        s[i] += bm;
      else
        s[++i] = bm;
    } else {
      s[++i] = null;
      q.push({ i, x: number_default(am, bm) });
    }
    bi = reB.lastIndex;
  }
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i])
      s[i] += bs;
    else
      s[++i] = bs;
  }
  return s.length < 2 ? q[0] ? one(q[0].x) : zero(b) : (b = q.length, function(t) {
    for (var i2 = 0, o; i2 < b; ++i2)
      s[(o = q[i2]).i] = o.x(t);
    return s.join("");
  });
}

// node_modules/d3-interpolate/src/transform/decompose.js
var degrees = 180 / Math.PI;
var identity = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function decompose_default(a, b, c, d, e, f) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a * a + b * b))
    a /= scaleX, b /= scaleX;
  if (skewX = a * c + b * d)
    c -= a * skewX, d -= b * skewX;
  if (scaleY = Math.sqrt(c * c + d * d))
    c /= scaleY, d /= scaleY, skewX /= scaleY;
  if (a * d < b * c)
    a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a) * degrees,
    skewX: Math.atan(skewX) * degrees,
    scaleX,
    scaleY
  };
}

// node_modules/d3-interpolate/src/transform/parse.js
var svgNode;
function parseCss(value) {
  const m = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
  return m.isIdentity ? identity : decompose_default(m.a, m.b, m.c, m.d, m.e, m.f);
}
function parseSvg(value) {
  if (value == null)
    return identity;
  if (!svgNode)
    svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate()))
    return identity;
  value = value.matrix;
  return decompose_default(value.a, value.b, value.c, value.d, value.e, value.f);
}

// node_modules/d3-interpolate/src/transform/index.js
function interpolateTransform(parse, pxComma, pxParen, degParen) {
  function pop(s) {
    return s.length ? s.pop() + " " : "";
  }
  function translate(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push("translate(", null, pxComma, null, pxParen);
      q.push({ i: i - 4, x: number_default(xa, xb) }, { i: i - 2, x: number_default(ya, yb) });
    } else if (xb || yb) {
      s.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }
  function rotate(a, b, s, q) {
    if (a !== b) {
      if (a - b > 180)
        b += 360;
      else if (b - a > 180)
        a += 360;
      q.push({ i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: number_default(a, b) });
    } else if (b) {
      s.push(pop(s) + "rotate(" + b + degParen);
    }
  }
  function skewX(a, b, s, q) {
    if (a !== b) {
      q.push({ i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: number_default(a, b) });
    } else if (b) {
      s.push(pop(s) + "skewX(" + b + degParen);
    }
  }
  function scale(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
      q.push({ i: i - 4, x: number_default(xa, xb) }, { i: i - 2, x: number_default(ya, yb) });
    } else if (xb !== 1 || yb !== 1) {
      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
  }
  return function(a, b) {
    var s = [], q = [];
    a = parse(a), b = parse(b);
    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
    rotate(a.rotate, b.rotate, s, q);
    skewX(a.skewX, b.skewX, s, q);
    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
    a = b = null;
    return function(t) {
      var i = -1, n = q.length, o;
      while (++i < n)
        s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  };
}
var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");

// node_modules/d3-interpolate/src/zoom.js
var epsilon2 = 1e-12;
function cosh(x) {
  return ((x = Math.exp(x)) + 1 / x) / 2;
}
function sinh(x) {
  return ((x = Math.exp(x)) - 1 / x) / 2;
}
function tanh(x) {
  return ((x = Math.exp(2 * x)) - 1) / (x + 1);
}
var zoom_default = function zoomRho(rho, rho2, rho4) {
  function zoom(p0, p1) {
    var ux0 = p0[0], uy0 = p0[1], w0 = p0[2], ux1 = p1[0], uy1 = p1[1], w1 = p1[2], dx = ux1 - ux0, dy = uy1 - uy0, d2 = dx * dx + dy * dy, i, S;
    if (d2 < epsilon2) {
      S = Math.log(w1 / w0) / rho;
      i = function(t) {
        return [
          ux0 + t * dx,
          uy0 + t * dy,
          w0 * Math.exp(rho * t * S)
        ];
      };
    } else {
      var d1 = Math.sqrt(d2), b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1), b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1), r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0), r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
      S = (r1 - r0) / rho;
      i = function(t) {
        var s = t * S, coshr0 = cosh(r0), u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
        return [
          ux0 + u * dx,
          uy0 + u * dy,
          w0 * coshr0 / cosh(rho * s + r0)
        ];
      };
    }
    i.duration = S * 1e3 * rho / Math.SQRT2;
    return i;
  }
  zoom.rho = function(_) {
    var _1 = Math.max(1e-3, +_), _2 = _1 * _1, _4 = _2 * _2;
    return zoomRho(_1, _2, _4);
  };
  return zoom;
}(Math.SQRT2, 2, 4);

// node_modules/d3-timer/src/timer.js
var frame = 0;
var timeout = 0;
var interval = 0;
var pokeDelay = 1e3;
var taskHead;
var taskTail;
var clockLast = 0;
var clockNow = 0;
var clockSkew = 0;
var clock = typeof performance === "object" && performance.now ? performance : Date;
var setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) {
  setTimeout(f, 17);
};
function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}
function clearNow() {
  clockNow = 0;
}
function Timer() {
  this._call = this._time = this._next = null;
}
Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function(callback, delay, time) {
    if (typeof callback !== "function")
      throw new TypeError("callback is not a function");
    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail)
        taskTail._next = this;
      else
        taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time;
    sleep();
  },
  stop: function() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};
function timer(callback, delay, time) {
  var t = new Timer();
  t.restart(callback, delay, time);
  return t;
}
function timerFlush() {
  now();
  ++frame;
  var t = taskHead, e;
  while (t) {
    if ((e = clockNow - t._time) >= 0)
      t._call.call(void 0, e);
    t = t._next;
  }
  --frame;
}
function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame = timeout = 0;
  try {
    timerFlush();
  } finally {
    frame = 0;
    nap();
    clockNow = 0;
  }
}
function poke() {
  var now2 = clock.now(), delay = now2 - clockLast;
  if (delay > pokeDelay)
    clockSkew -= delay, clockLast = now2;
}
function nap() {
  var t0, t1 = taskHead, t2, time = Infinity;
  while (t1) {
    if (t1._call) {
      if (time > t1._time)
        time = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t2 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
  }
  taskTail = t0;
  sleep(time);
}
function sleep(time) {
  if (frame)
    return;
  if (timeout)
    timeout = clearTimeout(timeout);
  var delay = time - clockNow;
  if (delay > 24) {
    if (time < Infinity)
      timeout = setTimeout(wake, time - clock.now() - clockSkew);
    if (interval)
      interval = clearInterval(interval);
  } else {
    if (!interval)
      clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    frame = 1, setFrame(wake);
  }
}

// node_modules/d3-timer/src/timeout.js
function timeout_default(callback, delay, time) {
  var t = new Timer();
  delay = delay == null ? 0 : +delay;
  t.restart((elapsed) => {
    t.stop();
    callback(elapsed + delay);
  }, delay, time);
  return t;
}

// node_modules/d3-transition/src/transition/schedule.js
var emptyOn = dispatch_default("start", "end", "cancel", "interrupt");
var emptyTween = [];
var CREATED = 0;
var SCHEDULED = 1;
var STARTING = 2;
var STARTED = 3;
var RUNNING = 4;
var ENDING = 5;
var ENDED = 6;
function schedule_default(node, name, id2, index, group, timing) {
  var schedules = node.__transition;
  if (!schedules)
    node.__transition = {};
  else if (id2 in schedules)
    return;
  create(node, id2, {
    name,
    index,
    // For context during callback.
    group,
    // For context during callback.
    on: emptyOn,
    tween: emptyTween,
    time: timing.time,
    delay: timing.delay,
    duration: timing.duration,
    ease: timing.ease,
    timer: null,
    state: CREATED
  });
}
function init(node, id2) {
  var schedule = get2(node, id2);
  if (schedule.state > CREATED)
    throw new Error("too late; already scheduled");
  return schedule;
}
function set2(node, id2) {
  var schedule = get2(node, id2);
  if (schedule.state > STARTED)
    throw new Error("too late; already running");
  return schedule;
}
function get2(node, id2) {
  var schedule = node.__transition;
  if (!schedule || !(schedule = schedule[id2]))
    throw new Error("transition not found");
  return schedule;
}
function create(node, id2, self) {
  var schedules = node.__transition, tween;
  schedules[id2] = self;
  self.timer = timer(schedule, 0, self.time);
  function schedule(elapsed) {
    self.state = SCHEDULED;
    self.timer.restart(start2, self.delay, self.time);
    if (self.delay <= elapsed)
      start2(elapsed - self.delay);
  }
  function start2(elapsed) {
    var i, j, n, o;
    if (self.state !== SCHEDULED)
      return stop();
    for (i in schedules) {
      o = schedules[i];
      if (o.name !== self.name)
        continue;
      if (o.state === STARTED)
        return timeout_default(start2);
      if (o.state === RUNNING) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("interrupt", node, node.__data__, o.index, o.group);
        delete schedules[i];
      } else if (+i < id2) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("cancel", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }
    }
    timeout_default(function() {
      if (self.state === STARTED) {
        self.state = RUNNING;
        self.timer.restart(tick, self.delay, self.time);
        tick(elapsed);
      }
    });
    self.state = STARTING;
    self.on.call("start", node, node.__data__, self.index, self.group);
    if (self.state !== STARTING)
      return;
    self.state = STARTED;
    tween = new Array(n = self.tween.length);
    for (i = 0, j = -1; i < n; ++i) {
      if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
        tween[++j] = o;
      }
    }
    tween.length = j + 1;
  }
  function tick(elapsed) {
    var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1), i = -1, n = tween.length;
    while (++i < n) {
      tween[i].call(node, t);
    }
    if (self.state === ENDING) {
      self.on.call("end", node, node.__data__, self.index, self.group);
      stop();
    }
  }
  function stop() {
    self.state = ENDED;
    self.timer.stop();
    delete schedules[id2];
    for (var i in schedules)
      return;
    delete node.__transition;
  }
}

// node_modules/d3-transition/src/interrupt.js
function interrupt_default(node, name) {
  var schedules = node.__transition, schedule, active, empty2 = true, i;
  if (!schedules)
    return;
  name = name == null ? null : name + "";
  for (i in schedules) {
    if ((schedule = schedules[i]).name !== name) {
      empty2 = false;
      continue;
    }
    active = schedule.state > STARTING && schedule.state < ENDING;
    schedule.state = ENDED;
    schedule.timer.stop();
    schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
    delete schedules[i];
  }
  if (empty2)
    delete node.__transition;
}

// node_modules/d3-transition/src/selection/interrupt.js
function interrupt_default2(name) {
  return this.each(function() {
    interrupt_default(this, name);
  });
}

// node_modules/d3-transition/src/transition/tween.js
function tweenRemove(id2, name) {
  var tween0, tween1;
  return function() {
    var schedule = set2(this, id2), tween = schedule.tween;
    if (tween !== tween0) {
      tween1 = tween0 = tween;
      for (var i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1 = tween1.slice();
          tween1.splice(i, 1);
          break;
        }
      }
    }
    schedule.tween = tween1;
  };
}
function tweenFunction(id2, name, value) {
  var tween0, tween1;
  if (typeof value !== "function")
    throw new Error();
  return function() {
    var schedule = set2(this, id2), tween = schedule.tween;
    if (tween !== tween0) {
      tween1 = (tween0 = tween).slice();
      for (var t = { name, value }, i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1[i] = t;
          break;
        }
      }
      if (i === n)
        tween1.push(t);
    }
    schedule.tween = tween1;
  };
}
function tween_default(name, value) {
  var id2 = this._id;
  name += "";
  if (arguments.length < 2) {
    var tween = get2(this.node(), id2).tween;
    for (var i = 0, n = tween.length, t; i < n; ++i) {
      if ((t = tween[i]).name === name) {
        return t.value;
      }
    }
    return null;
  }
  return this.each((value == null ? tweenRemove : tweenFunction)(id2, name, value));
}
function tweenValue(transition2, name, value) {
  var id2 = transition2._id;
  transition2.each(function() {
    var schedule = set2(this, id2);
    (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
  });
  return function(node) {
    return get2(node, id2).value[name];
  };
}

// node_modules/d3-transition/src/transition/interpolate.js
function interpolate_default(a, b) {
  var c;
  return (typeof b === "number" ? number_default : b instanceof color ? rgb_default : (c = color(b)) ? (b = c, rgb_default) : string_default)(a, b);
}

// node_modules/d3-transition/src/transition/attr.js
function attrRemove2(name) {
  return function() {
    this.removeAttribute(name);
  };
}
function attrRemoveNS2(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}
function attrConstant2(name, interpolate, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = this.getAttribute(name);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
  };
}
function attrConstantNS2(fullname, interpolate, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = this.getAttributeNS(fullname.space, fullname.local);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
  };
}
function attrFunction2(name, interpolate, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null)
      return void this.removeAttribute(name);
    string0 = this.getAttribute(name);
    string1 = value1 + "";
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}
function attrFunctionNS2(fullname, interpolate, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null)
      return void this.removeAttributeNS(fullname.space, fullname.local);
    string0 = this.getAttributeNS(fullname.space, fullname.local);
    string1 = value1 + "";
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}
function attr_default2(name, value) {
  var fullname = namespace_default(name), i = fullname === "transform" ? interpolateTransformSvg : interpolate_default;
  return this.attrTween(name, typeof value === "function" ? (fullname.local ? attrFunctionNS2 : attrFunction2)(fullname, i, tweenValue(this, "attr." + name, value)) : value == null ? (fullname.local ? attrRemoveNS2 : attrRemove2)(fullname) : (fullname.local ? attrConstantNS2 : attrConstant2)(fullname, i, value));
}

// node_modules/d3-transition/src/transition/attrTween.js
function attrInterpolate(name, i) {
  return function(t) {
    this.setAttribute(name, i.call(this, t));
  };
}
function attrInterpolateNS(fullname, i) {
  return function(t) {
    this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
  };
}
function attrTweenNS(fullname, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0)
      t0 = (i0 = i) && attrInterpolateNS(fullname, i);
    return t0;
  }
  tween._value = value;
  return tween;
}
function attrTween(name, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0)
      t0 = (i0 = i) && attrInterpolate(name, i);
    return t0;
  }
  tween._value = value;
  return tween;
}
function attrTween_default(name, value) {
  var key = "attr." + name;
  if (arguments.length < 2)
    return (key = this.tween(key)) && key._value;
  if (value == null)
    return this.tween(key, null);
  if (typeof value !== "function")
    throw new Error();
  var fullname = namespace_default(name);
  return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
}

// node_modules/d3-transition/src/transition/delay.js
function delayFunction(id2, value) {
  return function() {
    init(this, id2).delay = +value.apply(this, arguments);
  };
}
function delayConstant(id2, value) {
  return value = +value, function() {
    init(this, id2).delay = value;
  };
}
function delay_default(value) {
  var id2 = this._id;
  return arguments.length ? this.each((typeof value === "function" ? delayFunction : delayConstant)(id2, value)) : get2(this.node(), id2).delay;
}

// node_modules/d3-transition/src/transition/duration.js
function durationFunction(id2, value) {
  return function() {
    set2(this, id2).duration = +value.apply(this, arguments);
  };
}
function durationConstant(id2, value) {
  return value = +value, function() {
    set2(this, id2).duration = value;
  };
}
function duration_default(value) {
  var id2 = this._id;
  return arguments.length ? this.each((typeof value === "function" ? durationFunction : durationConstant)(id2, value)) : get2(this.node(), id2).duration;
}

// node_modules/d3-transition/src/transition/ease.js
function easeConstant(id2, value) {
  if (typeof value !== "function")
    throw new Error();
  return function() {
    set2(this, id2).ease = value;
  };
}
function ease_default(value) {
  var id2 = this._id;
  return arguments.length ? this.each(easeConstant(id2, value)) : get2(this.node(), id2).ease;
}

// node_modules/d3-transition/src/transition/easeVarying.js
function easeVarying(id2, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (typeof v !== "function")
      throw new Error();
    set2(this, id2).ease = v;
  };
}
function easeVarying_default(value) {
  if (typeof value !== "function")
    throw new Error();
  return this.each(easeVarying(this._id, value));
}

// node_modules/d3-transition/src/transition/filter.js
function filter_default2(match) {
  if (typeof match !== "function")
    match = matcher_default(match);
  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }
  return new Transition(subgroups, this._parents, this._name, this._id);
}

// node_modules/d3-transition/src/transition/merge.js
function merge_default2(transition2) {
  if (transition2._id !== this._id)
    throw new Error();
  for (var groups0 = this._groups, groups1 = transition2._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }
  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }
  return new Transition(merges, this._parents, this._name, this._id);
}

// node_modules/d3-transition/src/transition/on.js
function start(name) {
  return (name + "").trim().split(/^|\s+/).every(function(t) {
    var i = t.indexOf(".");
    if (i >= 0)
      t = t.slice(0, i);
    return !t || t === "start";
  });
}
function onFunction(id2, name, listener) {
  var on0, on1, sit = start(name) ? init : set2;
  return function() {
    var schedule = sit(this, id2), on = schedule.on;
    if (on !== on0)
      (on1 = (on0 = on).copy()).on(name, listener);
    schedule.on = on1;
  };
}
function on_default2(name, listener) {
  var id2 = this._id;
  return arguments.length < 2 ? get2(this.node(), id2).on.on(name) : this.each(onFunction(id2, name, listener));
}

// node_modules/d3-transition/src/transition/remove.js
function removeFunction(id2) {
  return function() {
    var parent = this.parentNode;
    for (var i in this.__transition)
      if (+i !== id2)
        return;
    if (parent)
      parent.removeChild(this);
  };
}
function remove_default2() {
  return this.on("end.remove", removeFunction(this._id));
}

// node_modules/d3-transition/src/transition/select.js
function select_default3(select) {
  var name = this._name, id2 = this._id;
  if (typeof select !== "function")
    select = selector_default(select);
  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node)
          subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
        schedule_default(subgroup[i], name, id2, i, subgroup, get2(node, id2));
      }
    }
  }
  return new Transition(subgroups, this._parents, name, id2);
}

// node_modules/d3-transition/src/transition/selectAll.js
function selectAll_default2(select) {
  var name = this._name, id2 = this._id;
  if (typeof select !== "function")
    select = selectorAll_default(select);
  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        for (var children2 = select.call(node, node.__data__, i, group), child, inherit2 = get2(node, id2), k = 0, l = children2.length; k < l; ++k) {
          if (child = children2[k]) {
            schedule_default(child, name, id2, k, children2, inherit2);
          }
        }
        subgroups.push(children2);
        parents.push(node);
      }
    }
  }
  return new Transition(subgroups, parents, name, id2);
}

// node_modules/d3-transition/src/transition/selection.js
var Selection2 = selection_default.prototype.constructor;
function selection_default2() {
  return new Selection2(this._groups, this._parents);
}

// node_modules/d3-transition/src/transition/style.js
function styleNull(name, interpolate) {
  var string00, string10, interpolate0;
  return function() {
    var string0 = styleValue(this, name), string1 = (this.style.removeProperty(name), styleValue(this, name));
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : interpolate0 = interpolate(string00 = string0, string10 = string1);
  };
}
function styleRemove2(name) {
  return function() {
    this.style.removeProperty(name);
  };
}
function styleConstant2(name, interpolate, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = styleValue(this, name);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
  };
}
function styleFunction2(name, interpolate, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0 = styleValue(this, name), value1 = value(this), string1 = value1 + "";
    if (value1 == null)
      string1 = value1 = (this.style.removeProperty(name), styleValue(this, name));
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}
function styleMaybeRemove(id2, name) {
  var on0, on1, listener0, key = "style." + name, event = "end." + key, remove2;
  return function() {
    var schedule = set2(this, id2), on = schedule.on, listener = schedule.value[key] == null ? remove2 || (remove2 = styleRemove2(name)) : void 0;
    if (on !== on0 || listener0 !== listener)
      (on1 = (on0 = on).copy()).on(event, listener0 = listener);
    schedule.on = on1;
  };
}
function style_default2(name, value, priority) {
  var i = (name += "") === "transform" ? interpolateTransformCss : interpolate_default;
  return value == null ? this.styleTween(name, styleNull(name, i)).on("end.style." + name, styleRemove2(name)) : typeof value === "function" ? this.styleTween(name, styleFunction2(name, i, tweenValue(this, "style." + name, value))).each(styleMaybeRemove(this._id, name)) : this.styleTween(name, styleConstant2(name, i, value), priority).on("end.style." + name, null);
}

// node_modules/d3-transition/src/transition/styleTween.js
function styleInterpolate(name, i, priority) {
  return function(t) {
    this.style.setProperty(name, i.call(this, t), priority);
  };
}
function styleTween(name, value, priority) {
  var t, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0)
      t = (i0 = i) && styleInterpolate(name, i, priority);
    return t;
  }
  tween._value = value;
  return tween;
}
function styleTween_default(name, value, priority) {
  var key = "style." + (name += "");
  if (arguments.length < 2)
    return (key = this.tween(key)) && key._value;
  if (value == null)
    return this.tween(key, null);
  if (typeof value !== "function")
    throw new Error();
  return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
}

// node_modules/d3-transition/src/transition/text.js
function textConstant2(value) {
  return function() {
    this.textContent = value;
  };
}
function textFunction2(value) {
  return function() {
    var value1 = value(this);
    this.textContent = value1 == null ? "" : value1;
  };
}
function text_default2(value) {
  return this.tween("text", typeof value === "function" ? textFunction2(tweenValue(this, "text", value)) : textConstant2(value == null ? "" : value + ""));
}

// node_modules/d3-transition/src/transition/textTween.js
function textInterpolate(i) {
  return function(t) {
    this.textContent = i.call(this, t);
  };
}
function textTween(value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0)
      t0 = (i0 = i) && textInterpolate(i);
    return t0;
  }
  tween._value = value;
  return tween;
}
function textTween_default(value) {
  var key = "text";
  if (arguments.length < 1)
    return (key = this.tween(key)) && key._value;
  if (value == null)
    return this.tween(key, null);
  if (typeof value !== "function")
    throw new Error();
  return this.tween(key, textTween(value));
}

// node_modules/d3-transition/src/transition/transition.js
function transition_default() {
  var name = this._name, id0 = this._id, id1 = newId();
  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        var inherit2 = get2(node, id0);
        schedule_default(node, name, id1, i, group, {
          time: inherit2.time + inherit2.delay + inherit2.duration,
          delay: 0,
          duration: inherit2.duration,
          ease: inherit2.ease
        });
      }
    }
  }
  return new Transition(groups, this._parents, name, id1);
}

// node_modules/d3-transition/src/transition/end.js
function end_default() {
  var on0, on1, that = this, id2 = that._id, size = that.size();
  return new Promise(function(resolve, reject) {
    var cancel = { value: reject }, end = { value: function() {
      if (--size === 0)
        resolve();
    } };
    that.each(function() {
      var schedule = set2(this, id2), on = schedule.on;
      if (on !== on0) {
        on1 = (on0 = on).copy();
        on1._.cancel.push(cancel);
        on1._.interrupt.push(cancel);
        on1._.end.push(end);
      }
      schedule.on = on1;
    });
    if (size === 0)
      resolve();
  });
}

// node_modules/d3-transition/src/transition/index.js
var id = 0;
function Transition(groups, parents, name, id2) {
  this._groups = groups;
  this._parents = parents;
  this._name = name;
  this._id = id2;
}
function transition(name) {
  return selection_default().transition(name);
}
function newId() {
  return ++id;
}
var selection_prototype = selection_default.prototype;
Transition.prototype = transition.prototype = {
  constructor: Transition,
  select: select_default3,
  selectAll: selectAll_default2,
  selectChild: selection_prototype.selectChild,
  selectChildren: selection_prototype.selectChildren,
  filter: filter_default2,
  merge: merge_default2,
  selection: selection_default2,
  transition: transition_default,
  call: selection_prototype.call,
  nodes: selection_prototype.nodes,
  node: selection_prototype.node,
  size: selection_prototype.size,
  empty: selection_prototype.empty,
  each: selection_prototype.each,
  on: on_default2,
  attr: attr_default2,
  attrTween: attrTween_default,
  style: style_default2,
  styleTween: styleTween_default,
  text: text_default2,
  textTween: textTween_default,
  remove: remove_default2,
  tween: tween_default,
  delay: delay_default,
  duration: duration_default,
  ease: ease_default,
  easeVarying: easeVarying_default,
  end: end_default,
  [Symbol.iterator]: selection_prototype[Symbol.iterator]
};

// node_modules/d3-ease/src/cubic.js
function cubicInOut(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}

// node_modules/d3-transition/src/selection/transition.js
var defaultTiming = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: cubicInOut
};
function inherit(node, id2) {
  var timing;
  while (!(timing = node.__transition) || !(timing = timing[id2])) {
    if (!(node = node.parentNode)) {
      throw new Error(`transition ${id2} not found`);
    }
  }
  return timing;
}
function transition_default2(name) {
  var id2, timing;
  if (name instanceof Transition) {
    id2 = name._id, name = name._name;
  } else {
    id2 = newId(), (timing = defaultTiming).time = now(), name = name == null ? null : name + "";
  }
  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        schedule_default(node, name, id2, i, group, timing || inherit(node, id2));
      }
    }
  }
  return new Transition(groups, this._parents, name, id2);
}

// node_modules/d3-transition/src/selection/index.js
selection_default.prototype.interrupt = interrupt_default2;
selection_default.prototype.transition = transition_default2;

// node_modules/d3-zoom/src/constant.js
var constant_default4 = (x) => () => x;

// node_modules/d3-zoom/src/event.js
function ZoomEvent(type, {
  sourceEvent,
  target,
  transform: transform2,
  dispatch: dispatch3
}) {
  Object.defineProperties(this, {
    type: { value: type, enumerable: true, configurable: true },
    sourceEvent: { value: sourceEvent, enumerable: true, configurable: true },
    target: { value: target, enumerable: true, configurable: true },
    transform: { value: transform2, enumerable: true, configurable: true },
    _: { value: dispatch3 }
  });
}

// node_modules/d3-zoom/src/transform.js
function Transform(k, x, y) {
  this.k = k;
  this.x = x;
  this.y = y;
}
Transform.prototype = {
  constructor: Transform,
  scale: function(k) {
    return k === 1 ? this : new Transform(this.k * k, this.x, this.y);
  },
  translate: function(x, y) {
    return x === 0 & y === 0 ? this : new Transform(this.k, this.x + this.k * x, this.y + this.k * y);
  },
  apply: function(point) {
    return [point[0] * this.k + this.x, point[1] * this.k + this.y];
  },
  applyX: function(x) {
    return x * this.k + this.x;
  },
  applyY: function(y) {
    return y * this.k + this.y;
  },
  invert: function(location) {
    return [(location[0] - this.x) / this.k, (location[1] - this.y) / this.k];
  },
  invertX: function(x) {
    return (x - this.x) / this.k;
  },
  invertY: function(y) {
    return (y - this.y) / this.k;
  },
  rescaleX: function(x) {
    return x.copy().domain(x.range().map(this.invertX, this).map(x.invert, x));
  },
  rescaleY: function(y) {
    return y.copy().domain(y.range().map(this.invertY, this).map(y.invert, y));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
var identity2 = new Transform(1, 0, 0);
transform.prototype = Transform.prototype;
function transform(node) {
  while (!node.__zoom)
    if (!(node = node.parentNode))
      return identity2;
  return node.__zoom;
}

// node_modules/d3-zoom/src/noevent.js
function nopropagation2(event) {
  event.stopImmediatePropagation();
}
function noevent_default2(event) {
  event.preventDefault();
  event.stopImmediatePropagation();
}

// node_modules/d3-zoom/src/zoom.js
function defaultFilter2(event) {
  return (!event.ctrlKey || event.type === "wheel") && !event.button;
}
function defaultExtent() {
  var e = this;
  if (e instanceof SVGElement) {
    e = e.ownerSVGElement || e;
    if (e.hasAttribute("viewBox")) {
      e = e.viewBox.baseVal;
      return [[e.x, e.y], [e.x + e.width, e.y + e.height]];
    }
    return [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]];
  }
  return [[0, 0], [e.clientWidth, e.clientHeight]];
}
function defaultTransform() {
  return this.__zoom || identity2;
}
function defaultWheelDelta(event) {
  return -event.deltaY * (event.deltaMode === 1 ? 0.05 : event.deltaMode ? 1 : 2e-3) * (event.ctrlKey ? 10 : 1);
}
function defaultTouchable2() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function defaultConstrain(transform2, extent, translateExtent) {
  var dx0 = transform2.invertX(extent[0][0]) - translateExtent[0][0], dx1 = transform2.invertX(extent[1][0]) - translateExtent[1][0], dy0 = transform2.invertY(extent[0][1]) - translateExtent[0][1], dy1 = transform2.invertY(extent[1][1]) - translateExtent[1][1];
  return transform2.translate(
    dx1 > dx0 ? (dx0 + dx1) / 2 : Math.min(0, dx0) || Math.max(0, dx1),
    dy1 > dy0 ? (dy0 + dy1) / 2 : Math.min(0, dy0) || Math.max(0, dy1)
  );
}
function zoom_default2() {
  var filter2 = defaultFilter2, extent = defaultExtent, constrain = defaultConstrain, wheelDelta2 = defaultWheelDelta, touchable = defaultTouchable2, scaleExtent = [0, Infinity], translateExtent = [[-Infinity, -Infinity], [Infinity, Infinity]], duration = 250, interpolate = zoom_default, listeners = dispatch_default("start", "zoom", "end"), touchstarting, touchfirst, touchending, touchDelay = 500, wheelDelay = 150, clickDistance2 = 0, tapDistance = 10;
  function zoom(selection2) {
    selection2.property("__zoom", defaultTransform).on("wheel.zoom", wheeled, { passive: false }).on("mousedown.zoom", mousedowned).on("dblclick.zoom", dblclicked).filter(touchable).on("touchstart.zoom", touchstarted).on("touchmove.zoom", touchmoved).on("touchend.zoom touchcancel.zoom", touchended).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  zoom.transform = function(collection, transform2, point, event) {
    var selection2 = collection.selection ? collection.selection() : collection;
    selection2.property("__zoom", defaultTransform);
    if (collection !== selection2) {
      schedule(collection, transform2, point, event);
    } else {
      selection2.interrupt().each(function() {
        gesture(this, arguments).event(event).start().zoom(null, typeof transform2 === "function" ? transform2.apply(this, arguments) : transform2).end();
      });
    }
  };
  zoom.scaleBy = function(selection2, k, p, event) {
    zoom.scaleTo(selection2, function() {
      var k0 = this.__zoom.k, k1 = typeof k === "function" ? k.apply(this, arguments) : k;
      return k0 * k1;
    }, p, event);
  };
  zoom.scaleTo = function(selection2, k, p, event) {
    zoom.transform(selection2, function() {
      var e = extent.apply(this, arguments), t0 = this.__zoom, p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p, p1 = t0.invert(p0), k1 = typeof k === "function" ? k.apply(this, arguments) : k;
      return constrain(translate(scale(t0, k1), p0, p1), e, translateExtent);
    }, p, event);
  };
  zoom.translateBy = function(selection2, x, y, event) {
    zoom.transform(selection2, function() {
      return constrain(this.__zoom.translate(
        typeof x === "function" ? x.apply(this, arguments) : x,
        typeof y === "function" ? y.apply(this, arguments) : y
      ), extent.apply(this, arguments), translateExtent);
    }, null, event);
  };
  zoom.translateTo = function(selection2, x, y, p, event) {
    zoom.transform(selection2, function() {
      var e = extent.apply(this, arguments), t = this.__zoom, p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p;
      return constrain(identity2.translate(p0[0], p0[1]).scale(t.k).translate(
        typeof x === "function" ? -x.apply(this, arguments) : -x,
        typeof y === "function" ? -y.apply(this, arguments) : -y
      ), e, translateExtent);
    }, p, event);
  };
  function scale(transform2, k) {
    k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], k));
    return k === transform2.k ? transform2 : new Transform(k, transform2.x, transform2.y);
  }
  function translate(transform2, p0, p1) {
    var x = p0[0] - p1[0] * transform2.k, y = p0[1] - p1[1] * transform2.k;
    return x === transform2.x && y === transform2.y ? transform2 : new Transform(transform2.k, x, y);
  }
  function centroid(extent2) {
    return [(+extent2[0][0] + +extent2[1][0]) / 2, (+extent2[0][1] + +extent2[1][1]) / 2];
  }
  function schedule(transition2, transform2, point, event) {
    transition2.on("start.zoom", function() {
      gesture(this, arguments).event(event).start();
    }).on("interrupt.zoom end.zoom", function() {
      gesture(this, arguments).event(event).end();
    }).tween("zoom", function() {
      var that = this, args = arguments, g = gesture(that, args).event(event), e = extent.apply(that, args), p = point == null ? centroid(e) : typeof point === "function" ? point.apply(that, args) : point, w = Math.max(e[1][0] - e[0][0], e[1][1] - e[0][1]), a = that.__zoom, b = typeof transform2 === "function" ? transform2.apply(that, args) : transform2, i = interpolate(a.invert(p).concat(w / a.k), b.invert(p).concat(w / b.k));
      return function(t) {
        if (t === 1)
          t = b;
        else {
          var l = i(t), k = w / l[2];
          t = new Transform(k, p[0] - l[0] * k, p[1] - l[1] * k);
        }
        g.zoom(null, t);
      };
    });
  }
  function gesture(that, args, clean) {
    return !clean && that.__zooming || new Gesture(that, args);
  }
  function Gesture(that, args) {
    this.that = that;
    this.args = args;
    this.active = 0;
    this.sourceEvent = null;
    this.extent = extent.apply(that, args);
    this.taps = 0;
  }
  Gesture.prototype = {
    event: function(event) {
      if (event)
        this.sourceEvent = event;
      return this;
    },
    start: function() {
      if (++this.active === 1) {
        this.that.__zooming = this;
        this.emit("start");
      }
      return this;
    },
    zoom: function(key, transform2) {
      if (this.mouse && key !== "mouse")
        this.mouse[1] = transform2.invert(this.mouse[0]);
      if (this.touch0 && key !== "touch")
        this.touch0[1] = transform2.invert(this.touch0[0]);
      if (this.touch1 && key !== "touch")
        this.touch1[1] = transform2.invert(this.touch1[0]);
      this.that.__zoom = transform2;
      this.emit("zoom");
      return this;
    },
    end: function() {
      if (--this.active === 0) {
        delete this.that.__zooming;
        this.emit("end");
      }
      return this;
    },
    emit: function(type) {
      var d = select_default2(this.that).datum();
      listeners.call(
        type,
        this.that,
        new ZoomEvent(type, {
          sourceEvent: this.sourceEvent,
          target: zoom,
          type,
          transform: this.that.__zoom,
          dispatch: listeners
        }),
        d
      );
    }
  };
  function wheeled(event, ...args) {
    if (!filter2.apply(this, arguments))
      return;
    var g = gesture(this, args).event(event), t = this.__zoom, k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], t.k * Math.pow(2, wheelDelta2.apply(this, arguments)))), p = pointer_default(event);
    if (g.wheel) {
      if (g.mouse[0][0] !== p[0] || g.mouse[0][1] !== p[1]) {
        g.mouse[1] = t.invert(g.mouse[0] = p);
      }
      clearTimeout(g.wheel);
    } else if (t.k === k)
      return;
    else {
      g.mouse = [p, t.invert(p)];
      interrupt_default(this);
      g.start();
    }
    noevent_default2(event);
    g.wheel = setTimeout(wheelidled, wheelDelay);
    g.zoom("mouse", constrain(translate(scale(t, k), g.mouse[0], g.mouse[1]), g.extent, translateExtent));
    function wheelidled() {
      g.wheel = null;
      g.end();
    }
  }
  function mousedowned(event, ...args) {
    if (touchending || !filter2.apply(this, arguments))
      return;
    var currentTarget = event.currentTarget, g = gesture(this, args, true).event(event), v = select_default2(event.view).on("mousemove.zoom", mousemoved, true).on("mouseup.zoom", mouseupped, true), p = pointer_default(event, currentTarget), x0 = event.clientX, y0 = event.clientY;
    nodrag_default(event.view);
    nopropagation2(event);
    g.mouse = [p, this.__zoom.invert(p)];
    interrupt_default(this);
    g.start();
    function mousemoved(event2) {
      noevent_default2(event2);
      if (!g.moved) {
        var dx = event2.clientX - x0, dy = event2.clientY - y0;
        g.moved = dx * dx + dy * dy > clickDistance2;
      }
      g.event(event2).zoom("mouse", constrain(translate(g.that.__zoom, g.mouse[0] = pointer_default(event2, currentTarget), g.mouse[1]), g.extent, translateExtent));
    }
    function mouseupped(event2) {
      v.on("mousemove.zoom mouseup.zoom", null);
      yesdrag(event2.view, g.moved);
      noevent_default2(event2);
      g.event(event2).end();
    }
  }
  function dblclicked(event, ...args) {
    if (!filter2.apply(this, arguments))
      return;
    var t0 = this.__zoom, p0 = pointer_default(event.changedTouches ? event.changedTouches[0] : event, this), p1 = t0.invert(p0), k1 = t0.k * (event.shiftKey ? 0.5 : 2), t1 = constrain(translate(scale(t0, k1), p0, p1), extent.apply(this, args), translateExtent);
    noevent_default2(event);
    if (duration > 0)
      select_default2(this).transition().duration(duration).call(schedule, t1, p0, event);
    else
      select_default2(this).call(zoom.transform, t1, p0, event);
  }
  function touchstarted(event, ...args) {
    if (!filter2.apply(this, arguments))
      return;
    var touches = event.touches, n = touches.length, g = gesture(this, args, event.changedTouches.length === n).event(event), started, i, t, p;
    nopropagation2(event);
    for (i = 0; i < n; ++i) {
      t = touches[i], p = pointer_default(t, this);
      p = [p, this.__zoom.invert(p), t.identifier];
      if (!g.touch0)
        g.touch0 = p, started = true, g.taps = 1 + !!touchstarting;
      else if (!g.touch1 && g.touch0[2] !== p[2])
        g.touch1 = p, g.taps = 0;
    }
    if (touchstarting)
      touchstarting = clearTimeout(touchstarting);
    if (started) {
      if (g.taps < 2)
        touchfirst = p[0], touchstarting = setTimeout(function() {
          touchstarting = null;
        }, touchDelay);
      interrupt_default(this);
      g.start();
    }
  }
  function touchmoved(event, ...args) {
    if (!this.__zooming)
      return;
    var g = gesture(this, args).event(event), touches = event.changedTouches, n = touches.length, i, t, p, l;
    noevent_default2(event);
    for (i = 0; i < n; ++i) {
      t = touches[i], p = pointer_default(t, this);
      if (g.touch0 && g.touch0[2] === t.identifier)
        g.touch0[0] = p;
      else if (g.touch1 && g.touch1[2] === t.identifier)
        g.touch1[0] = p;
    }
    t = g.that.__zoom;
    if (g.touch1) {
      var p0 = g.touch0[0], l0 = g.touch0[1], p1 = g.touch1[0], l1 = g.touch1[1], dp = (dp = p1[0] - p0[0]) * dp + (dp = p1[1] - p0[1]) * dp, dl = (dl = l1[0] - l0[0]) * dl + (dl = l1[1] - l0[1]) * dl;
      t = scale(t, Math.sqrt(dp / dl));
      p = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2];
      l = [(l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2];
    } else if (g.touch0)
      p = g.touch0[0], l = g.touch0[1];
    else
      return;
    g.zoom("touch", constrain(translate(t, p, l), g.extent, translateExtent));
  }
  function touchended(event, ...args) {
    if (!this.__zooming)
      return;
    var g = gesture(this, args).event(event), touches = event.changedTouches, n = touches.length, i, t;
    nopropagation2(event);
    if (touchending)
      clearTimeout(touchending);
    touchending = setTimeout(function() {
      touchending = null;
    }, touchDelay);
    for (i = 0; i < n; ++i) {
      t = touches[i];
      if (g.touch0 && g.touch0[2] === t.identifier)
        delete g.touch0;
      else if (g.touch1 && g.touch1[2] === t.identifier)
        delete g.touch1;
    }
    if (g.touch1 && !g.touch0)
      g.touch0 = g.touch1, delete g.touch1;
    if (g.touch0)
      g.touch0[1] = this.__zoom.invert(g.touch0[0]);
    else {
      g.end();
      if (g.taps === 2) {
        t = pointer_default(t, this);
        if (Math.hypot(touchfirst[0] - t[0], touchfirst[1] - t[1]) < tapDistance) {
          var p = select_default2(this).on("dblclick.zoom");
          if (p)
            p.apply(this, arguments);
        }
      }
    }
  }
  zoom.wheelDelta = function(_) {
    return arguments.length ? (wheelDelta2 = typeof _ === "function" ? _ : constant_default4(+_), zoom) : wheelDelta2;
  };
  zoom.filter = function(_) {
    return arguments.length ? (filter2 = typeof _ === "function" ? _ : constant_default4(!!_), zoom) : filter2;
  };
  zoom.touchable = function(_) {
    return arguments.length ? (touchable = typeof _ === "function" ? _ : constant_default4(!!_), zoom) : touchable;
  };
  zoom.extent = function(_) {
    return arguments.length ? (extent = typeof _ === "function" ? _ : constant_default4([[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]]), zoom) : extent;
  };
  zoom.scaleExtent = function(_) {
    return arguments.length ? (scaleExtent[0] = +_[0], scaleExtent[1] = +_[1], zoom) : [scaleExtent[0], scaleExtent[1]];
  };
  zoom.translateExtent = function(_) {
    return arguments.length ? (translateExtent[0][0] = +_[0][0], translateExtent[1][0] = +_[1][0], translateExtent[0][1] = +_[0][1], translateExtent[1][1] = +_[1][1], zoom) : [[translateExtent[0][0], translateExtent[0][1]], [translateExtent[1][0], translateExtent[1][1]]];
  };
  zoom.constrain = function(_) {
    return arguments.length ? (constrain = _, zoom) : constrain;
  };
  zoom.duration = function(_) {
    return arguments.length ? (duration = +_, zoom) : duration;
  };
  zoom.interpolate = function(_) {
    return arguments.length ? (interpolate = _, zoom) : interpolate;
  };
  zoom.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? zoom : value;
  };
  zoom.clickDistance = function(_) {
    return arguments.length ? (clickDistance2 = (_ = +_) * _, zoom) : Math.sqrt(clickDistance2);
  };
  zoom.tapDistance = function(_) {
    return arguments.length ? (tapDistance = +_, zoom) : tapDistance;
  };
  return zoom;
}

// node_modules/@reactflow/core/dist/esm/index.mjs
var import_react_dom = __toESM(require_react_dom(), 1);
var StoreContext = (0, import_react2.createContext)(null);
var Provider$1 = StoreContext.Provider;
var errorMessages = {
  error001: () => "[React Flow]: Seems like you have not used zustand provider as an ancestor. Help: https://reactflow.dev/error#001",
  error002: () => "It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",
  error003: (nodeType) => `Node type "${nodeType}" not found. Using fallback type "default".`,
  error004: () => "The React Flow parent container needs a width and a height to render the graph.",
  error005: () => "Only child nodes can use a parent extent.",
  error006: () => "Can't create edge. An edge needs a source and a target.",
  error007: (id2) => `The old edge with id=${id2} does not exist.`,
  error009: (type) => `Marker type "${type}" doesn't exist.`,
  error008: (sourceHandle, edge) => `Couldn't create edge for ${!sourceHandle ? "source" : "target"} handle id: "${!sourceHandle ? edge.sourceHandle : edge.targetHandle}", edge id: ${edge.id}.`,
  error010: () => "Handle: No node id found. Make sure to only use a Handle inside a custom Node.",
  error011: (edgeType) => `Edge type "${edgeType}" not found. Using fallback type "default".`,
  error012: (id2) => `Node with id "${id2}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`
};
var zustandErrorMessage = errorMessages["error001"]();
function useStore2(selector, equalityFn) {
  const store = (0, import_react2.useContext)(StoreContext);
  if (store === null) {
    throw new Error(zustandErrorMessage);
  }
  return useStoreWithEqualityFn(store, selector, equalityFn);
}
var useStoreApi = () => {
  const store = (0, import_react2.useContext)(StoreContext);
  if (store === null) {
    throw new Error(zustandErrorMessage);
  }
  return (0, import_react2.useMemo)(() => ({
    getState: store.getState,
    setState: store.setState,
    subscribe: store.subscribe,
    destroy: store.destroy
  }), [store]);
};
var selector$g = (s) => s.userSelectionActive ? "none" : "all";
function Panel({ position, children: children2, className, style: style2, ...rest }) {
  const pointerEvents = useStore2(selector$g);
  const positionClasses = `${position}`.split("-");
  return import_react2.default.createElement("div", { className: cc(["react-flow__panel", className, ...positionClasses]), style: { ...style2, pointerEvents }, ...rest }, children2);
}
function Attribution({ proOptions, position = "bottom-right" }) {
  if (proOptions?.hideAttribution) {
    return null;
  }
  return import_react2.default.createElement(
    Panel,
    { position, className: "react-flow__attribution", "data-message": "Please only hide this attribution when you are subscribed to React Flow Pro: https://pro.reactflow.dev" },
    import_react2.default.createElement("a", { href: "https://reactflow.dev", target: "_blank", rel: "noopener noreferrer", "aria-label": "React Flow attribution" }, "React Flow")
  );
}
var EdgeText = ({ x, y, label, labelStyle = {}, labelShowBg = true, labelBgStyle = {}, labelBgPadding = [2, 4], labelBgBorderRadius = 2, children: children2, className, ...rest }) => {
  const edgeRef = (0, import_react2.useRef)(null);
  const [edgeTextBbox, setEdgeTextBbox] = (0, import_react2.useState)({ x: 0, y: 0, width: 0, height: 0 });
  const edgeTextClasses = cc(["react-flow__edge-textwrapper", className]);
  (0, import_react2.useEffect)(() => {
    if (edgeRef.current) {
      const textBbox = edgeRef.current.getBBox();
      setEdgeTextBbox({
        x: textBbox.x,
        y: textBbox.y,
        width: textBbox.width,
        height: textBbox.height
      });
    }
  }, [label]);
  if (typeof label === "undefined" || !label) {
    return null;
  }
  return import_react2.default.createElement(
    "g",
    { transform: `translate(${x - edgeTextBbox.width / 2} ${y - edgeTextBbox.height / 2})`, className: edgeTextClasses, visibility: edgeTextBbox.width ? "visible" : "hidden", ...rest },
    labelShowBg && import_react2.default.createElement("rect", { width: edgeTextBbox.width + 2 * labelBgPadding[0], x: -labelBgPadding[0], y: -labelBgPadding[1], height: edgeTextBbox.height + 2 * labelBgPadding[1], className: "react-flow__edge-textbg", style: labelBgStyle, rx: labelBgBorderRadius, ry: labelBgBorderRadius }),
    import_react2.default.createElement("text", { className: "react-flow__edge-text", y: edgeTextBbox.height / 2, dy: "0.3em", ref: edgeRef, style: labelStyle }, label),
    children2
  );
};
var EdgeText$1 = (0, import_react2.memo)(EdgeText);
var getDimensions = (node) => ({
  width: node.offsetWidth,
  height: node.offsetHeight
});
var clamp = (val, min = 0, max = 1) => Math.min(Math.max(val, min), max);
var clampPosition = (position = { x: 0, y: 0 }, extent) => ({
  x: clamp(position.x, extent[0][0], extent[1][0]),
  y: clamp(position.y, extent[0][1], extent[1][1])
});
var calcAutoPanVelocity = (value, min, max) => {
  if (value < min) {
    return clamp(Math.abs(value - min), 1, 50) / 50;
  } else if (value > max) {
    return -clamp(Math.abs(value - max), 1, 50) / 50;
  }
  return 0;
};
var calcAutoPan = (pos, bounds) => {
  const xMovement = calcAutoPanVelocity(pos.x, 35, bounds.width - 35) * 20;
  const yMovement = calcAutoPanVelocity(pos.y, 35, bounds.height - 35) * 20;
  return [xMovement, yMovement];
};
var getHostForElement = (element) => element.getRootNode?.() || window?.document;
var getBoundsOfBoxes = (box1, box2) => ({
  x: Math.min(box1.x, box2.x),
  y: Math.min(box1.y, box2.y),
  x2: Math.max(box1.x2, box2.x2),
  y2: Math.max(box1.y2, box2.y2)
});
var rectToBox = ({ x, y, width, height }) => ({
  x,
  y,
  x2: x + width,
  y2: y + height
});
var boxToRect = ({ x, y, x2, y2 }) => ({
  x,
  y,
  width: x2 - x,
  height: y2 - y
});
var nodeToRect = (node) => ({
  ...node.positionAbsolute || { x: 0, y: 0 },
  width: node.width || 0,
  height: node.height || 0
});
var getOverlappingArea = (rectA, rectB) => {
  const xOverlap = Math.max(0, Math.min(rectA.x + rectA.width, rectB.x + rectB.width) - Math.max(rectA.x, rectB.x));
  const yOverlap = Math.max(0, Math.min(rectA.y + rectA.height, rectB.y + rectB.height) - Math.max(rectA.y, rectB.y));
  return Math.ceil(xOverlap * yOverlap);
};
var isRectObject = (obj) => isNumeric(obj.width) && isNumeric(obj.height) && isNumeric(obj.x) && isNumeric(obj.y);
var isNumeric = (n) => !isNaN(n) && isFinite(n);
var internalsSymbol = Symbol.for("internals");
var elementSelectionKeys = ["Enter", " ", "Escape"];
var devWarn = (id2, message) => {
  if (true) {
    console.warn(`[React Flow]: ${message} Help: https://reactflow.dev/error#${id2}`);
  }
};
var isReactKeyboardEvent = (event) => "nativeEvent" in event;
function isInputDOMNode(event) {
  const kbEvent = isReactKeyboardEvent(event) ? event.nativeEvent : event;
  const target = kbEvent.composedPath?.()?.[0] || event.target;
  const isInput = ["INPUT", "SELECT", "TEXTAREA"].includes(target?.nodeName) || target?.hasAttribute("contenteditable");
  return isInput || !!target?.closest(".nokey");
}
var isMouseEvent = (event) => "clientX" in event;
var getEventPosition = (event, bounds) => {
  const isMouseTriggered = isMouseEvent(event);
  const evtX = isMouseTriggered ? event.clientX : event.touches?.[0].clientX;
  const evtY = isMouseTriggered ? event.clientY : event.touches?.[0].clientY;
  return {
    x: evtX - (bounds?.left ?? 0),
    y: evtY - (bounds?.top ?? 0)
  };
};
var isMacOs = () => typeof navigator !== "undefined" && navigator?.userAgent?.indexOf("Mac") >= 0;
var BaseEdge = ({ id: id2, path, labelX, labelY, label, labelStyle, labelShowBg, labelBgStyle, labelBgPadding, labelBgBorderRadius, style: style2, markerEnd, markerStart, interactionWidth = 20 }) => {
  return import_react2.default.createElement(
    import_react2.default.Fragment,
    null,
    import_react2.default.createElement("path", { id: id2, style: style2, d: path, fill: "none", className: "react-flow__edge-path", markerEnd, markerStart }),
    interactionWidth && import_react2.default.createElement("path", { d: path, fill: "none", strokeOpacity: 0, strokeWidth: interactionWidth, className: "react-flow__edge-interaction" }),
    label && isNumeric(labelX) && isNumeric(labelY) ? import_react2.default.createElement(EdgeText$1, { x: labelX, y: labelY, label, labelStyle, labelShowBg, labelBgStyle, labelBgPadding, labelBgBorderRadius }) : null
  );
};
BaseEdge.displayName = "BaseEdge";
function getMouseHandler$1(id2, getState, handler) {
  return handler === void 0 ? handler : (event) => {
    const edge = getState().edges.find((e) => e.id === id2);
    if (edge) {
      handler(event, { ...edge });
    }
  };
}
function getEdgeCenter({ sourceX, sourceY, targetX, targetY }) {
  const xOffset = Math.abs(targetX - sourceX) / 2;
  const centerX = targetX < sourceX ? targetX + xOffset : targetX - xOffset;
  const yOffset = Math.abs(targetY - sourceY) / 2;
  const centerY = targetY < sourceY ? targetY + yOffset : targetY - yOffset;
  return [centerX, centerY, xOffset, yOffset];
}
function getBezierEdgeCenter({ sourceX, sourceY, targetX, targetY, sourceControlX, sourceControlY, targetControlX, targetControlY }) {
  const centerX = sourceX * 0.125 + sourceControlX * 0.375 + targetControlX * 0.375 + targetX * 0.125;
  const centerY = sourceY * 0.125 + sourceControlY * 0.375 + targetControlY * 0.375 + targetY * 0.125;
  const offsetX = Math.abs(centerX - sourceX);
  const offsetY = Math.abs(centerY - sourceY);
  return [centerX, centerY, offsetX, offsetY];
}
var ConnectionMode;
(function(ConnectionMode2) {
  ConnectionMode2["Strict"] = "strict";
  ConnectionMode2["Loose"] = "loose";
})(ConnectionMode || (ConnectionMode = {}));
var PanOnScrollMode;
(function(PanOnScrollMode2) {
  PanOnScrollMode2["Free"] = "free";
  PanOnScrollMode2["Vertical"] = "vertical";
  PanOnScrollMode2["Horizontal"] = "horizontal";
})(PanOnScrollMode || (PanOnScrollMode = {}));
var SelectionMode;
(function(SelectionMode2) {
  SelectionMode2["Partial"] = "partial";
  SelectionMode2["Full"] = "full";
})(SelectionMode || (SelectionMode = {}));
var ConnectionLineType;
(function(ConnectionLineType2) {
  ConnectionLineType2["Bezier"] = "default";
  ConnectionLineType2["Straight"] = "straight";
  ConnectionLineType2["Step"] = "step";
  ConnectionLineType2["SmoothStep"] = "smoothstep";
  ConnectionLineType2["SimpleBezier"] = "simplebezier";
})(ConnectionLineType || (ConnectionLineType = {}));
var MarkerType;
(function(MarkerType2) {
  MarkerType2["Arrow"] = "arrow";
  MarkerType2["ArrowClosed"] = "arrowclosed";
})(MarkerType || (MarkerType = {}));
var Position;
(function(Position2) {
  Position2["Left"] = "left";
  Position2["Top"] = "top";
  Position2["Right"] = "right";
  Position2["Bottom"] = "bottom";
})(Position || (Position = {}));
function getControl({ pos, x1, y1, x2, y2 }) {
  if (pos === Position.Left || pos === Position.Right) {
    return [0.5 * (x1 + x2), y1];
  }
  return [x1, 0.5 * (y1 + y2)];
}
function getSimpleBezierPath({ sourceX, sourceY, sourcePosition = Position.Bottom, targetX, targetY, targetPosition = Position.Top }) {
  const [sourceControlX, sourceControlY] = getControl({
    pos: sourcePosition,
    x1: sourceX,
    y1: sourceY,
    x2: targetX,
    y2: targetY
  });
  const [targetControlX, targetControlY] = getControl({
    pos: targetPosition,
    x1: targetX,
    y1: targetY,
    x2: sourceX,
    y2: sourceY
  });
  const [labelX, labelY, offsetX, offsetY] = getBezierEdgeCenter({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourceControlX,
    sourceControlY,
    targetControlX,
    targetControlY
  });
  return [
    `M${sourceX},${sourceY} C${sourceControlX},${sourceControlY} ${targetControlX},${targetControlY} ${targetX},${targetY}`,
    labelX,
    labelY,
    offsetX,
    offsetY
  ];
}
var SimpleBezierEdge = (0, import_react2.memo)(({ sourceX, sourceY, targetX, targetY, sourcePosition = Position.Bottom, targetPosition = Position.Top, label, labelStyle, labelShowBg, labelBgStyle, labelBgPadding, labelBgBorderRadius, style: style2, markerEnd, markerStart, interactionWidth }) => {
  const [path, labelX, labelY] = getSimpleBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition
  });
  return import_react2.default.createElement(BaseEdge, { path, labelX, labelY, label, labelStyle, labelShowBg, labelBgStyle, labelBgPadding, labelBgBorderRadius, style: style2, markerEnd, markerStart, interactionWidth });
});
SimpleBezierEdge.displayName = "SimpleBezierEdge";
var handleDirections = {
  [Position.Left]: { x: -1, y: 0 },
  [Position.Right]: { x: 1, y: 0 },
  [Position.Top]: { x: 0, y: -1 },
  [Position.Bottom]: { x: 0, y: 1 }
};
var getDirection = ({ source, sourcePosition = Position.Bottom, target }) => {
  if (sourcePosition === Position.Left || sourcePosition === Position.Right) {
    return source.x < target.x ? { x: 1, y: 0 } : { x: -1, y: 0 };
  }
  return source.y < target.y ? { x: 0, y: 1 } : { x: 0, y: -1 };
};
var distance = (a, b) => Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2));
function getPoints({ source, sourcePosition = Position.Bottom, target, targetPosition = Position.Top, center, offset }) {
  const sourceDir = handleDirections[sourcePosition];
  const targetDir = handleDirections[targetPosition];
  const sourceGapped = { x: source.x + sourceDir.x * offset, y: source.y + sourceDir.y * offset };
  const targetGapped = { x: target.x + targetDir.x * offset, y: target.y + targetDir.y * offset };
  const dir = getDirection({
    source: sourceGapped,
    sourcePosition,
    target: targetGapped
  });
  const dirAccessor = dir.x !== 0 ? "x" : "y";
  const currDir = dir[dirAccessor];
  let points = [];
  let centerX, centerY;
  const sourceGapOffset = { x: 0, y: 0 };
  const targetGapOffset = { x: 0, y: 0 };
  const [defaultCenterX, defaultCenterY, defaultOffsetX, defaultOffsetY] = getEdgeCenter({
    sourceX: source.x,
    sourceY: source.y,
    targetX: target.x,
    targetY: target.y
  });
  if (sourceDir[dirAccessor] * targetDir[dirAccessor] === -1) {
    centerX = center.x || defaultCenterX;
    centerY = center.y || defaultCenterY;
    const verticalSplit = [
      { x: centerX, y: sourceGapped.y },
      { x: centerX, y: targetGapped.y }
    ];
    const horizontalSplit = [
      { x: sourceGapped.x, y: centerY },
      { x: targetGapped.x, y: centerY }
    ];
    if (sourceDir[dirAccessor] === currDir) {
      points = dirAccessor === "x" ? verticalSplit : horizontalSplit;
    } else {
      points = dirAccessor === "x" ? horizontalSplit : verticalSplit;
    }
  } else {
    const sourceTarget = [{ x: sourceGapped.x, y: targetGapped.y }];
    const targetSource = [{ x: targetGapped.x, y: sourceGapped.y }];
    if (dirAccessor === "x") {
      points = sourceDir.x === currDir ? targetSource : sourceTarget;
    } else {
      points = sourceDir.y === currDir ? sourceTarget : targetSource;
    }
    if (sourcePosition === targetPosition) {
      const diff = Math.abs(source[dirAccessor] - target[dirAccessor]);
      if (diff <= offset) {
        const gapOffset = Math.min(offset - 1, offset - diff);
        if (sourceDir[dirAccessor] === currDir) {
          sourceGapOffset[dirAccessor] = (sourceGapped[dirAccessor] > source[dirAccessor] ? -1 : 1) * gapOffset;
        } else {
          targetGapOffset[dirAccessor] = (targetGapped[dirAccessor] > target[dirAccessor] ? -1 : 1) * gapOffset;
        }
      }
    }
    if (sourcePosition !== targetPosition) {
      const dirAccessorOpposite = dirAccessor === "x" ? "y" : "x";
      const isSameDir = sourceDir[dirAccessor] === targetDir[dirAccessorOpposite];
      const sourceGtTargetOppo = sourceGapped[dirAccessorOpposite] > targetGapped[dirAccessorOpposite];
      const sourceLtTargetOppo = sourceGapped[dirAccessorOpposite] < targetGapped[dirAccessorOpposite];
      const flipSourceTarget = sourceDir[dirAccessor] === 1 && (!isSameDir && sourceGtTargetOppo || isSameDir && sourceLtTargetOppo) || sourceDir[dirAccessor] !== 1 && (!isSameDir && sourceLtTargetOppo || isSameDir && sourceGtTargetOppo);
      if (flipSourceTarget) {
        points = dirAccessor === "x" ? sourceTarget : targetSource;
      }
    }
    const sourceGapPoint = { x: sourceGapped.x + sourceGapOffset.x, y: sourceGapped.y + sourceGapOffset.y };
    const targetGapPoint = { x: targetGapped.x + targetGapOffset.x, y: targetGapped.y + targetGapOffset.y };
    const maxXDistance = Math.max(Math.abs(sourceGapPoint.x - points[0].x), Math.abs(targetGapPoint.x - points[0].x));
    const maxYDistance = Math.max(Math.abs(sourceGapPoint.y - points[0].y), Math.abs(targetGapPoint.y - points[0].y));
    if (maxXDistance >= maxYDistance) {
      centerX = (sourceGapPoint.x + targetGapPoint.x) / 2;
      centerY = points[0].y;
    } else {
      centerX = points[0].x;
      centerY = (sourceGapPoint.y + targetGapPoint.y) / 2;
    }
  }
  const pathPoints = [
    source,
    { x: sourceGapped.x + sourceGapOffset.x, y: sourceGapped.y + sourceGapOffset.y },
    ...points,
    { x: targetGapped.x + targetGapOffset.x, y: targetGapped.y + targetGapOffset.y },
    target
  ];
  return [pathPoints, centerX, centerY, defaultOffsetX, defaultOffsetY];
}
function getBend(a, b, c, size) {
  const bendSize = Math.min(distance(a, b) / 2, distance(b, c) / 2, size);
  const { x, y } = b;
  if (a.x === x && x === c.x || a.y === y && y === c.y) {
    return `L${x} ${y}`;
  }
  if (a.y === y) {
    const xDir2 = a.x < c.x ? -1 : 1;
    const yDir2 = a.y < c.y ? 1 : -1;
    return `L ${x + bendSize * xDir2},${y}Q ${x},${y} ${x},${y + bendSize * yDir2}`;
  }
  const xDir = a.x < c.x ? 1 : -1;
  const yDir = a.y < c.y ? -1 : 1;
  return `L ${x},${y + bendSize * yDir}Q ${x},${y} ${x + bendSize * xDir},${y}`;
}
function getSmoothStepPath({ sourceX, sourceY, sourcePosition = Position.Bottom, targetX, targetY, targetPosition = Position.Top, borderRadius = 5, centerX, centerY, offset = 20 }) {
  const [points, labelX, labelY, offsetX, offsetY] = getPoints({
    source: { x: sourceX, y: sourceY },
    sourcePosition,
    target: { x: targetX, y: targetY },
    targetPosition,
    center: { x: centerX, y: centerY },
    offset
  });
  const path = points.reduce((res, p, i) => {
    let segment = "";
    if (i > 0 && i < points.length - 1) {
      segment = getBend(points[i - 1], p, points[i + 1], borderRadius);
    } else {
      segment = `${i === 0 ? "M" : "L"}${p.x} ${p.y}`;
    }
    res += segment;
    return res;
  }, "");
  return [path, labelX, labelY, offsetX, offsetY];
}
var SmoothStepEdge = (0, import_react2.memo)(({ sourceX, sourceY, targetX, targetY, label, labelStyle, labelShowBg, labelBgStyle, labelBgPadding, labelBgBorderRadius, style: style2, sourcePosition = Position.Bottom, targetPosition = Position.Top, markerEnd, markerStart, pathOptions, interactionWidth }) => {
  const [path, labelX, labelY] = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
    borderRadius: pathOptions?.borderRadius,
    offset: pathOptions?.offset
  });
  return import_react2.default.createElement(BaseEdge, { path, labelX, labelY, label, labelStyle, labelShowBg, labelBgStyle, labelBgPadding, labelBgBorderRadius, style: style2, markerEnd, markerStart, interactionWidth });
});
SmoothStepEdge.displayName = "SmoothStepEdge";
var StepEdge = (0, import_react2.memo)((props) => import_react2.default.createElement(SmoothStepEdge, { ...props, pathOptions: (0, import_react2.useMemo)(() => ({ borderRadius: 0, offset: props.pathOptions?.offset }), [props.pathOptions?.offset]) }));
StepEdge.displayName = "StepEdge";
function getStraightPath({ sourceX, sourceY, targetX, targetY }) {
  const [labelX, labelY, offsetX, offsetY] = getEdgeCenter({
    sourceX,
    sourceY,
    targetX,
    targetY
  });
  return [`M ${sourceX},${sourceY}L ${targetX},${targetY}`, labelX, labelY, offsetX, offsetY];
}
var StraightEdge = (0, import_react2.memo)(({ sourceX, sourceY, targetX, targetY, label, labelStyle, labelShowBg, labelBgStyle, labelBgPadding, labelBgBorderRadius, style: style2, markerEnd, markerStart, interactionWidth }) => {
  const [path, labelX, labelY] = getStraightPath({ sourceX, sourceY, targetX, targetY });
  return import_react2.default.createElement(BaseEdge, { path, labelX, labelY, label, labelStyle, labelShowBg, labelBgStyle, labelBgPadding, labelBgBorderRadius, style: style2, markerEnd, markerStart, interactionWidth });
});
StraightEdge.displayName = "StraightEdge";
function calculateControlOffset(distance2, curvature) {
  if (distance2 >= 0) {
    return 0.5 * distance2;
  }
  return curvature * 25 * Math.sqrt(-distance2);
}
function getControlWithCurvature({ pos, x1, y1, x2, y2, c }) {
  switch (pos) {
    case Position.Left:
      return [x1 - calculateControlOffset(x1 - x2, c), y1];
    case Position.Right:
      return [x1 + calculateControlOffset(x2 - x1, c), y1];
    case Position.Top:
      return [x1, y1 - calculateControlOffset(y1 - y2, c)];
    case Position.Bottom:
      return [x1, y1 + calculateControlOffset(y2 - y1, c)];
  }
}
function getBezierPath({ sourceX, sourceY, sourcePosition = Position.Bottom, targetX, targetY, targetPosition = Position.Top, curvature = 0.25 }) {
  const [sourceControlX, sourceControlY] = getControlWithCurvature({
    pos: sourcePosition,
    x1: sourceX,
    y1: sourceY,
    x2: targetX,
    y2: targetY,
    c: curvature
  });
  const [targetControlX, targetControlY] = getControlWithCurvature({
    pos: targetPosition,
    x1: targetX,
    y1: targetY,
    x2: sourceX,
    y2: sourceY,
    c: curvature
  });
  const [labelX, labelY, offsetX, offsetY] = getBezierEdgeCenter({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourceControlX,
    sourceControlY,
    targetControlX,
    targetControlY
  });
  return [
    `M${sourceX},${sourceY} C${sourceControlX},${sourceControlY} ${targetControlX},${targetControlY} ${targetX},${targetY}`,
    labelX,
    labelY,
    offsetX,
    offsetY
  ];
}
var BezierEdge = (0, import_react2.memo)(({ sourceX, sourceY, targetX, targetY, sourcePosition = Position.Bottom, targetPosition = Position.Top, label, labelStyle, labelShowBg, labelBgStyle, labelBgPadding, labelBgBorderRadius, style: style2, markerEnd, markerStart, pathOptions, interactionWidth }) => {
  const [path, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
    curvature: pathOptions?.curvature
  });
  return import_react2.default.createElement(BaseEdge, { path, labelX, labelY, label, labelStyle, labelShowBg, labelBgStyle, labelBgPadding, labelBgBorderRadius, style: style2, markerEnd, markerStart, interactionWidth });
});
BezierEdge.displayName = "BezierEdge";
var NodeIdContext = (0, import_react2.createContext)(null);
var Provider = NodeIdContext.Provider;
NodeIdContext.Consumer;
var useNodeId = () => {
  const nodeId = (0, import_react2.useContext)(NodeIdContext);
  return nodeId;
};
var isEdge = (element) => "id" in element && "source" in element && "target" in element;
var getEdgeId = ({ source, sourceHandle, target, targetHandle }) => `reactflow__edge-${source}${sourceHandle || ""}-${target}${targetHandle || ""}`;
var getMarkerId = (marker, rfId) => {
  if (typeof marker === "undefined") {
    return "";
  }
  if (typeof marker === "string") {
    return marker;
  }
  const idPrefix = rfId ? `${rfId}__` : "";
  return `${idPrefix}${Object.keys(marker).sort().map((key) => `${key}=${marker[key]}`).join("&")}`;
};
var connectionExists = (edge, edges) => {
  return edges.some((el) => el.source === edge.source && el.target === edge.target && (el.sourceHandle === edge.sourceHandle || !el.sourceHandle && !edge.sourceHandle) && (el.targetHandle === edge.targetHandle || !el.targetHandle && !edge.targetHandle));
};
var addEdge = (edgeParams, edges) => {
  if (!edgeParams.source || !edgeParams.target) {
    devWarn("006", errorMessages["error006"]());
    return edges;
  }
  let edge;
  if (isEdge(edgeParams)) {
    edge = { ...edgeParams };
  } else {
    edge = {
      ...edgeParams,
      id: getEdgeId(edgeParams)
    };
  }
  if (connectionExists(edge, edges)) {
    return edges;
  }
  return edges.concat(edge);
};
var pointToRendererPoint = ({ x, y }, [tx, ty, tScale], snapToGrid, [snapX, snapY]) => {
  const position = {
    x: (x - tx) / tScale,
    y: (y - ty) / tScale
  };
  if (snapToGrid) {
    return {
      x: snapX * Math.round(position.x / snapX),
      y: snapY * Math.round(position.y / snapY)
    };
  }
  return position;
};
var rendererPointToPoint = ({ x, y }, [tx, ty, tScale]) => {
  return {
    x: x * tScale + tx,
    y: y * tScale + ty
  };
};
var getNodePositionWithOrigin = (node, nodeOrigin = [0, 0]) => {
  if (!node) {
    return {
      x: 0,
      y: 0,
      positionAbsolute: {
        x: 0,
        y: 0
      }
    };
  }
  const offsetX = (node.width ?? 0) * nodeOrigin[0];
  const offsetY = (node.height ?? 0) * nodeOrigin[1];
  const position = {
    x: node.position.x - offsetX,
    y: node.position.y - offsetY
  };
  return {
    ...position,
    positionAbsolute: node.positionAbsolute ? {
      x: node.positionAbsolute.x - offsetX,
      y: node.positionAbsolute.y - offsetY
    } : position
  };
};
var getRectOfNodes = (nodes, nodeOrigin = [0, 0]) => {
  if (nodes.length === 0) {
    return { x: 0, y: 0, width: 0, height: 0 };
  }
  const box = nodes.reduce((currBox, node) => {
    const { x, y } = getNodePositionWithOrigin(node, nodeOrigin).positionAbsolute;
    return getBoundsOfBoxes(currBox, rectToBox({
      x,
      y,
      width: node.width || 0,
      height: node.height || 0
    }));
  }, { x: Infinity, y: Infinity, x2: -Infinity, y2: -Infinity });
  return boxToRect(box);
};
var getNodesInside = (nodeInternals, rect, [tx, ty, tScale] = [0, 0, 1], partially = false, excludeNonSelectableNodes = false, nodeOrigin = [0, 0]) => {
  const paneRect = {
    x: (rect.x - tx) / tScale,
    y: (rect.y - ty) / tScale,
    width: rect.width / tScale,
    height: rect.height / tScale
  };
  const visibleNodes = [];
  nodeInternals.forEach((node) => {
    const { width, height, selectable = true, hidden = false } = node;
    if (excludeNonSelectableNodes && !selectable || hidden) {
      return false;
    }
    const { positionAbsolute } = getNodePositionWithOrigin(node, nodeOrigin);
    const nodeRect = {
      x: positionAbsolute.x,
      y: positionAbsolute.y,
      width: width || 0,
      height: height || 0
    };
    const overlappingArea = getOverlappingArea(paneRect, nodeRect);
    const notInitialized = typeof width === "undefined" || typeof height === "undefined" || width === null || height === null;
    const partiallyVisible = partially && overlappingArea > 0;
    const area = (width || 0) * (height || 0);
    const isVisible = notInitialized || partiallyVisible || overlappingArea >= area;
    if (isVisible || node.dragging) {
      visibleNodes.push(node);
    }
  });
  return visibleNodes;
};
var getConnectedEdges = (nodes, edges) => {
  const nodeIds = nodes.map((node) => node.id);
  return edges.filter((edge) => nodeIds.includes(edge.source) || nodeIds.includes(edge.target));
};
var getTransformForBounds = (bounds, width, height, minZoom, maxZoom, padding = 0.1) => {
  const xZoom = width / (bounds.width * (1 + padding));
  const yZoom = height / (bounds.height * (1 + padding));
  const zoom = Math.min(xZoom, yZoom);
  const clampedZoom = clamp(zoom, minZoom, maxZoom);
  const boundsCenterX = bounds.x + bounds.width / 2;
  const boundsCenterY = bounds.y + bounds.height / 2;
  const x = width / 2 - boundsCenterX * clampedZoom;
  const y = height / 2 - boundsCenterY * clampedZoom;
  return [x, y, clampedZoom];
};
var getD3Transition = (selection2, duration = 0) => {
  return selection2.transition().duration(duration);
};
function getHandles(node, handleBounds, type, currentHandle) {
  return (handleBounds[type] || []).reduce((res, h) => {
    if (`${node.id}-${h.id}-${type}` !== currentHandle) {
      res.push({
        id: h.id || null,
        type,
        nodeId: node.id,
        x: (node.positionAbsolute?.x ?? 0) + h.x + h.width / 2,
        y: (node.positionAbsolute?.y ?? 0) + h.y + h.height / 2
      });
    }
    return res;
  }, []);
}
function getClosestHandle(event, doc, pos, connectionRadius, handles, validator) {
  const { x, y } = getEventPosition(event);
  const domNodes = doc.elementsFromPoint(x, y);
  const handleBelow = domNodes.find((el) => el.classList.contains("react-flow__handle"));
  if (handleBelow) {
    const handleNodeId = handleBelow.getAttribute("data-nodeid");
    if (handleNodeId) {
      const handleType = getHandleType(void 0, handleBelow);
      const handleId = handleBelow.getAttribute("data-handleid");
      const validHandleResult = validator({ nodeId: handleNodeId, id: handleId, type: handleType });
      if (validHandleResult) {
        return {
          handle: {
            id: handleId,
            type: handleType,
            nodeId: handleNodeId,
            x: pos.x,
            y: pos.y
          },
          validHandleResult
        };
      }
    }
  }
  let closestHandles = [];
  let minDistance = Infinity;
  handles.forEach((handle) => {
    const distance2 = Math.sqrt((handle.x - pos.x) ** 2 + (handle.y - pos.y) ** 2);
    if (distance2 <= connectionRadius) {
      const validHandleResult = validator(handle);
      if (distance2 <= minDistance) {
        if (distance2 < minDistance) {
          closestHandles = [{ handle, validHandleResult }];
        } else if (distance2 === minDistance) {
          closestHandles.push({
            handle,
            validHandleResult
          });
        }
        minDistance = distance2;
      }
    }
  });
  if (!closestHandles.length) {
    return { handle: null, validHandleResult: defaultResult() };
  }
  if (closestHandles.length === 1) {
    return closestHandles[0];
  }
  const hasValidHandle = closestHandles.some(({ validHandleResult }) => validHandleResult.isValid);
  const hasTargetHandle = closestHandles.some(({ handle }) => handle.type === "target");
  return closestHandles.find(({ handle, validHandleResult }) => hasTargetHandle ? handle.type === "target" : hasValidHandle ? validHandleResult.isValid : true) || closestHandles[0];
}
var nullConnection = { source: null, target: null, sourceHandle: null, targetHandle: null };
var defaultResult = () => ({
  handleDomNode: null,
  isValid: false,
  connection: nullConnection,
  endHandle: null
});
function isValidHandle(handle, connectionMode, fromNodeId, fromHandleId, fromType, isValidConnection, doc) {
  const isTarget = fromType === "target";
  const handleToCheck = doc.querySelector(`.react-flow__handle[data-id="${handle?.nodeId}-${handle?.id}-${handle?.type}"]`);
  const result = {
    ...defaultResult(),
    handleDomNode: handleToCheck
  };
  if (handleToCheck) {
    const handleType = getHandleType(void 0, handleToCheck);
    const handleNodeId = handleToCheck.getAttribute("data-nodeid");
    const handleId = handleToCheck.getAttribute("data-handleid");
    const connectable = handleToCheck.classList.contains("connectable");
    const connectableEnd = handleToCheck.classList.contains("connectableend");
    const connection = {
      source: isTarget ? handleNodeId : fromNodeId,
      sourceHandle: isTarget ? handleId : fromHandleId,
      target: isTarget ? fromNodeId : handleNodeId,
      targetHandle: isTarget ? fromHandleId : handleId
    };
    result.connection = connection;
    const isConnectable = connectable && connectableEnd;
    const isValid = isConnectable && (connectionMode === ConnectionMode.Strict ? isTarget && handleType === "source" || !isTarget && handleType === "target" : handleNodeId !== fromNodeId || handleId !== fromHandleId);
    if (isValid) {
      result.endHandle = {
        nodeId: handleNodeId,
        handleId,
        type: handleType
      };
      result.isValid = isValidConnection(connection);
    }
  }
  return result;
}
function getHandleLookup({ nodes, nodeId, handleId, handleType }) {
  return nodes.reduce((res, node) => {
    if (node[internalsSymbol]) {
      const { handleBounds } = node[internalsSymbol];
      let sourceHandles = [];
      let targetHandles = [];
      if (handleBounds) {
        sourceHandles = getHandles(node, handleBounds, "source", `${nodeId}-${handleId}-${handleType}`);
        targetHandles = getHandles(node, handleBounds, "target", `${nodeId}-${handleId}-${handleType}`);
      }
      res.push(...sourceHandles, ...targetHandles);
    }
    return res;
  }, []);
}
function getHandleType(edgeUpdaterType, handleDomNode) {
  if (edgeUpdaterType) {
    return edgeUpdaterType;
  } else if (handleDomNode?.classList.contains("target")) {
    return "target";
  } else if (handleDomNode?.classList.contains("source")) {
    return "source";
  }
  return null;
}
function resetRecentHandle(handleDomNode) {
  handleDomNode?.classList.remove("valid", "connecting", "react-flow__handle-valid", "react-flow__handle-connecting");
}
function getConnectionStatus(isInsideConnectionRadius, isHandleValid) {
  let connectionStatus = null;
  if (isHandleValid) {
    connectionStatus = "valid";
  } else if (isInsideConnectionRadius && !isHandleValid) {
    connectionStatus = "invalid";
  }
  return connectionStatus;
}
function handlePointerDown({ event, handleId, nodeId, onConnect, isTarget, getState, setState, isValidConnection, edgeUpdaterType, onEdgeUpdateEnd }) {
  const doc = getHostForElement(event.target);
  const { connectionMode, domNode, autoPanOnConnect, connectionRadius, onConnectStart, panBy, getNodes, cancelConnection } = getState();
  let autoPanId = 0;
  let closestHandle;
  const { x, y } = getEventPosition(event);
  const clickedHandle = doc?.elementFromPoint(x, y);
  const handleType = getHandleType(edgeUpdaterType, clickedHandle);
  const containerBounds = domNode?.getBoundingClientRect();
  if (!containerBounds || !handleType) {
    return;
  }
  let prevActiveHandle;
  let connectionPosition = getEventPosition(event, containerBounds);
  let autoPanStarted = false;
  let connection = null;
  let isValid = false;
  let handleDomNode = null;
  const handleLookup = getHandleLookup({
    nodes: getNodes(),
    nodeId,
    handleId,
    handleType
  });
  const autoPan = () => {
    if (!autoPanOnConnect) {
      return;
    }
    const [xMovement, yMovement] = calcAutoPan(connectionPosition, containerBounds);
    panBy({ x: xMovement, y: yMovement });
    autoPanId = requestAnimationFrame(autoPan);
  };
  setState({
    connectionPosition,
    connectionStatus: null,
    // connectionNodeId etc will be removed in the next major in favor of connectionStartHandle
    connectionNodeId: nodeId,
    connectionHandleId: handleId,
    connectionHandleType: handleType,
    connectionStartHandle: {
      nodeId,
      handleId,
      type: handleType
    },
    connectionEndHandle: null
  });
  onConnectStart?.(event, { nodeId, handleId, handleType });
  function onPointerMove(event2) {
    const { transform: transform2 } = getState();
    connectionPosition = getEventPosition(event2, containerBounds);
    const { handle, validHandleResult } = getClosestHandle(event2, doc, pointToRendererPoint(connectionPosition, transform2, false, [1, 1]), connectionRadius, handleLookup, (handle2) => isValidHandle(handle2, connectionMode, nodeId, handleId, isTarget ? "target" : "source", isValidConnection, doc));
    closestHandle = handle;
    if (!autoPanStarted) {
      autoPan();
      autoPanStarted = true;
    }
    handleDomNode = validHandleResult.handleDomNode;
    connection = validHandleResult.connection;
    isValid = validHandleResult.isValid;
    setState({
      connectionPosition: closestHandle && isValid ? rendererPointToPoint({
        x: closestHandle.x,
        y: closestHandle.y
      }, transform2) : connectionPosition,
      connectionStatus: getConnectionStatus(!!closestHandle, isValid),
      connectionEndHandle: validHandleResult.endHandle
    });
    if (!closestHandle && !isValid && !handleDomNode) {
      return resetRecentHandle(prevActiveHandle);
    }
    if (connection.source !== connection.target && handleDomNode) {
      resetRecentHandle(prevActiveHandle);
      prevActiveHandle = handleDomNode;
      handleDomNode.classList.add("connecting", "react-flow__handle-connecting");
      handleDomNode.classList.toggle("valid", isValid);
      handleDomNode.classList.toggle("react-flow__handle-valid", isValid);
    }
  }
  function onPointerUp(event2) {
    if ((closestHandle || handleDomNode) && connection && isValid) {
      onConnect?.(connection);
    }
    getState().onConnectEnd?.(event2);
    if (edgeUpdaterType) {
      onEdgeUpdateEnd?.(event2);
    }
    resetRecentHandle(prevActiveHandle);
    cancelConnection();
    cancelAnimationFrame(autoPanId);
    autoPanStarted = false;
    isValid = false;
    connection = null;
    handleDomNode = null;
    doc.removeEventListener("mousemove", onPointerMove);
    doc.removeEventListener("mouseup", onPointerUp);
    doc.removeEventListener("touchmove", onPointerMove);
    doc.removeEventListener("touchend", onPointerUp);
  }
  doc.addEventListener("mousemove", onPointerMove);
  doc.addEventListener("mouseup", onPointerUp);
  doc.addEventListener("touchmove", onPointerMove);
  doc.addEventListener("touchend", onPointerUp);
}
var alwaysValid = () => true;
var selector$f = (s) => ({
  connectionStartHandle: s.connectionStartHandle,
  connectOnClick: s.connectOnClick,
  noPanClassName: s.noPanClassName
});
var connectingSelector = (nodeId, handleId, type) => (state) => {
  const { connectionStartHandle: startHandle, connectionEndHandle: endHandle, connectionClickStartHandle: clickHandle } = state;
  return {
    connecting: startHandle?.nodeId === nodeId && startHandle?.handleId === handleId && startHandle?.type === type || endHandle?.nodeId === nodeId && endHandle?.handleId === handleId && endHandle?.type === type,
    clickConnecting: clickHandle?.nodeId === nodeId && clickHandle?.handleId === handleId && clickHandle?.type === type
  };
};
var Handle = (0, import_react2.forwardRef)(({ type = "source", position = Position.Top, isValidConnection, isConnectable = true, isConnectableStart = true, isConnectableEnd = true, id: id2, onConnect, children: children2, className, onMouseDown, onTouchStart, ...rest }, ref) => {
  const handleId = id2 || null;
  const isTarget = type === "target";
  const store = useStoreApi();
  const nodeId = useNodeId();
  const { connectOnClick, noPanClassName } = useStore2(selector$f, shallow$1);
  const { connecting, clickConnecting } = useStore2(connectingSelector(nodeId, handleId, type), shallow$1);
  if (!nodeId) {
    store.getState().onError?.("010", errorMessages["error010"]());
  }
  const onConnectExtended = (params) => {
    const { defaultEdgeOptions, onConnect: onConnectAction, hasDefaultEdges } = store.getState();
    const edgeParams = {
      ...defaultEdgeOptions,
      ...params
    };
    if (hasDefaultEdges) {
      const { edges, setEdges } = store.getState();
      setEdges(addEdge(edgeParams, edges));
    }
    onConnectAction?.(edgeParams);
    onConnect?.(edgeParams);
  };
  const onPointerDown = (event) => {
    if (!nodeId) {
      return;
    }
    const isMouseTriggered = isMouseEvent(event);
    if (isConnectableStart && (isMouseTriggered && event.button === 0 || !isMouseTriggered)) {
      handlePointerDown({
        event,
        handleId,
        nodeId,
        onConnect: onConnectExtended,
        isTarget,
        getState: store.getState,
        setState: store.setState,
        isValidConnection: isValidConnection || store.getState().isValidConnection || alwaysValid
      });
    }
    if (isMouseTriggered) {
      onMouseDown?.(event);
    } else {
      onTouchStart?.(event);
    }
  };
  const onClick = (event) => {
    const { onClickConnectStart, onClickConnectEnd, connectionClickStartHandle, connectionMode, isValidConnection: isValidConnectionStore } = store.getState();
    if (!nodeId || !connectionClickStartHandle && !isConnectableStart) {
      return;
    }
    if (!connectionClickStartHandle) {
      onClickConnectStart?.(event, { nodeId, handleId, handleType: type });
      store.setState({ connectionClickStartHandle: { nodeId, type, handleId } });
      return;
    }
    const doc = getHostForElement(event.target);
    const isValidConnectionHandler = isValidConnection || isValidConnectionStore || alwaysValid;
    const { connection, isValid } = isValidHandle({
      nodeId,
      id: handleId,
      type
    }, connectionMode, connectionClickStartHandle.nodeId, connectionClickStartHandle.handleId || null, connectionClickStartHandle.type, isValidConnectionHandler, doc);
    if (isValid) {
      onConnectExtended(connection);
    }
    onClickConnectEnd?.(event);
    store.setState({ connectionClickStartHandle: null });
  };
  return import_react2.default.createElement("div", { "data-handleid": handleId, "data-nodeid": nodeId, "data-handlepos": position, "data-id": `${nodeId}-${handleId}-${type}`, className: cc([
    "react-flow__handle",
    `react-flow__handle-${position}`,
    "nodrag",
    noPanClassName,
    className,
    {
      source: !isTarget,
      target: isTarget,
      connectable: isConnectable,
      connectablestart: isConnectableStart,
      connectableend: isConnectableEnd,
      connecting: clickConnecting,
      // this class is used to style the handle when the user is connecting
      connectionindicator: isConnectable && (isConnectableStart && !connecting || isConnectableEnd && connecting)
    }
  ]), onMouseDown: onPointerDown, onTouchStart: onPointerDown, onClick: connectOnClick ? onClick : void 0, ref, ...rest }, children2);
});
Handle.displayName = "Handle";
var Handle$1 = (0, import_react2.memo)(Handle);
var DefaultNode = ({ data, isConnectable, targetPosition = Position.Top, sourcePosition = Position.Bottom }) => {
  return import_react2.default.createElement(
    import_react2.default.Fragment,
    null,
    import_react2.default.createElement(Handle$1, { type: "target", position: targetPosition, isConnectable }),
    data?.label,
    import_react2.default.createElement(Handle$1, { type: "source", position: sourcePosition, isConnectable })
  );
};
DefaultNode.displayName = "DefaultNode";
var DefaultNode$1 = (0, import_react2.memo)(DefaultNode);
var InputNode = ({ data, isConnectable, sourcePosition = Position.Bottom }) => import_react2.default.createElement(
  import_react2.default.Fragment,
  null,
  data?.label,
  import_react2.default.createElement(Handle$1, { type: "source", position: sourcePosition, isConnectable })
);
InputNode.displayName = "InputNode";
var InputNode$1 = (0, import_react2.memo)(InputNode);
var OutputNode = ({ data, isConnectable, targetPosition = Position.Top }) => import_react2.default.createElement(
  import_react2.default.Fragment,
  null,
  import_react2.default.createElement(Handle$1, { type: "target", position: targetPosition, isConnectable }),
  data?.label
);
OutputNode.displayName = "OutputNode";
var OutputNode$1 = (0, import_react2.memo)(OutputNode);
var GroupNode = () => null;
GroupNode.displayName = "GroupNode";
var selector$e = (s) => ({
  selectedNodes: s.getNodes().filter((n) => n.selected),
  selectedEdges: s.edges.filter((e) => e.selected)
});
var selectId = (obj) => obj.id;
function areEqual(a, b) {
  return shallow$1(a.selectedNodes.map(selectId), b.selectedNodes.map(selectId)) && shallow$1(a.selectedEdges.map(selectId), b.selectedEdges.map(selectId));
}
var SelectionListener = (0, import_react2.memo)(({ onSelectionChange }) => {
  const store = useStoreApi();
  const { selectedNodes, selectedEdges } = useStore2(selector$e, areEqual);
  (0, import_react2.useEffect)(() => {
    const params = { nodes: selectedNodes, edges: selectedEdges };
    onSelectionChange?.(params);
    store.getState().onSelectionChange?.(params);
  }, [selectedNodes, selectedEdges, onSelectionChange]);
  return null;
});
SelectionListener.displayName = "SelectionListener";
var changeSelector = (s) => !!s.onSelectionChange;
function Wrapper$1({ onSelectionChange }) {
  const storeHasSelectionChange = useStore2(changeSelector);
  if (onSelectionChange || storeHasSelectionChange) {
    return import_react2.default.createElement(SelectionListener, { onSelectionChange });
  }
  return null;
}
var selector$d = (s) => ({
  setNodes: s.setNodes,
  setEdges: s.setEdges,
  setDefaultNodesAndEdges: s.setDefaultNodesAndEdges,
  setMinZoom: s.setMinZoom,
  setMaxZoom: s.setMaxZoom,
  setTranslateExtent: s.setTranslateExtent,
  setNodeExtent: s.setNodeExtent,
  reset: s.reset
});
function useStoreUpdater(value, setStoreState) {
  (0, import_react2.useEffect)(() => {
    if (typeof value !== "undefined") {
      setStoreState(value);
    }
  }, [value]);
}
function useDirectStoreUpdater(key, value, setState) {
  (0, import_react2.useEffect)(() => {
    if (typeof value !== "undefined") {
      setState({ [key]: value });
    }
  }, [value]);
}
var StoreUpdater = ({ nodes, edges, defaultNodes, defaultEdges, onConnect, onConnectStart, onConnectEnd, onClickConnectStart, onClickConnectEnd, nodesDraggable, nodesConnectable, nodesFocusable, edgesFocusable, edgesUpdatable, elevateNodesOnSelect, minZoom, maxZoom, nodeExtent, onNodesChange, onEdgesChange, elementsSelectable, connectionMode, snapGrid, snapToGrid, translateExtent, connectOnClick, defaultEdgeOptions, fitView: fitView2, fitViewOptions, onNodesDelete, onEdgesDelete, onNodeDrag, onNodeDragStart, onNodeDragStop, onSelectionDrag, onSelectionDragStart, onSelectionDragStop, noPanClassName, nodeOrigin, rfId, autoPanOnConnect, autoPanOnNodeDrag, onError, connectionRadius, isValidConnection, nodeDragThreshold }) => {
  const { setNodes, setEdges, setDefaultNodesAndEdges, setMinZoom, setMaxZoom, setTranslateExtent, setNodeExtent, reset } = useStore2(selector$d, shallow$1);
  const store = useStoreApi();
  (0, import_react2.useEffect)(() => {
    const edgesWithDefaults = defaultEdges?.map((e) => ({ ...e, ...defaultEdgeOptions }));
    setDefaultNodesAndEdges(defaultNodes, edgesWithDefaults);
    return () => {
      reset();
    };
  }, []);
  useDirectStoreUpdater("defaultEdgeOptions", defaultEdgeOptions, store.setState);
  useDirectStoreUpdater("connectionMode", connectionMode, store.setState);
  useDirectStoreUpdater("onConnect", onConnect, store.setState);
  useDirectStoreUpdater("onConnectStart", onConnectStart, store.setState);
  useDirectStoreUpdater("onConnectEnd", onConnectEnd, store.setState);
  useDirectStoreUpdater("onClickConnectStart", onClickConnectStart, store.setState);
  useDirectStoreUpdater("onClickConnectEnd", onClickConnectEnd, store.setState);
  useDirectStoreUpdater("nodesDraggable", nodesDraggable, store.setState);
  useDirectStoreUpdater("nodesConnectable", nodesConnectable, store.setState);
  useDirectStoreUpdater("nodesFocusable", nodesFocusable, store.setState);
  useDirectStoreUpdater("edgesFocusable", edgesFocusable, store.setState);
  useDirectStoreUpdater("edgesUpdatable", edgesUpdatable, store.setState);
  useDirectStoreUpdater("elementsSelectable", elementsSelectable, store.setState);
  useDirectStoreUpdater("elevateNodesOnSelect", elevateNodesOnSelect, store.setState);
  useDirectStoreUpdater("snapToGrid", snapToGrid, store.setState);
  useDirectStoreUpdater("snapGrid", snapGrid, store.setState);
  useDirectStoreUpdater("onNodesChange", onNodesChange, store.setState);
  useDirectStoreUpdater("onEdgesChange", onEdgesChange, store.setState);
  useDirectStoreUpdater("connectOnClick", connectOnClick, store.setState);
  useDirectStoreUpdater("fitViewOnInit", fitView2, store.setState);
  useDirectStoreUpdater("fitViewOnInitOptions", fitViewOptions, store.setState);
  useDirectStoreUpdater("onNodesDelete", onNodesDelete, store.setState);
  useDirectStoreUpdater("onEdgesDelete", onEdgesDelete, store.setState);
  useDirectStoreUpdater("onNodeDrag", onNodeDrag, store.setState);
  useDirectStoreUpdater("onNodeDragStart", onNodeDragStart, store.setState);
  useDirectStoreUpdater("onNodeDragStop", onNodeDragStop, store.setState);
  useDirectStoreUpdater("onSelectionDrag", onSelectionDrag, store.setState);
  useDirectStoreUpdater("onSelectionDragStart", onSelectionDragStart, store.setState);
  useDirectStoreUpdater("onSelectionDragStop", onSelectionDragStop, store.setState);
  useDirectStoreUpdater("noPanClassName", noPanClassName, store.setState);
  useDirectStoreUpdater("nodeOrigin", nodeOrigin, store.setState);
  useDirectStoreUpdater("rfId", rfId, store.setState);
  useDirectStoreUpdater("autoPanOnConnect", autoPanOnConnect, store.setState);
  useDirectStoreUpdater("autoPanOnNodeDrag", autoPanOnNodeDrag, store.setState);
  useDirectStoreUpdater("onError", onError, store.setState);
  useDirectStoreUpdater("connectionRadius", connectionRadius, store.setState);
  useDirectStoreUpdater("isValidConnection", isValidConnection, store.setState);
  useDirectStoreUpdater("nodeDragThreshold", nodeDragThreshold, store.setState);
  useStoreUpdater(nodes, setNodes);
  useStoreUpdater(edges, setEdges);
  useStoreUpdater(minZoom, setMinZoom);
  useStoreUpdater(maxZoom, setMaxZoom);
  useStoreUpdater(translateExtent, setTranslateExtent);
  useStoreUpdater(nodeExtent, setNodeExtent);
  return null;
};
var style = { display: "none" };
var ariaLiveStyle = {
  position: "absolute",
  width: 1,
  height: 1,
  margin: -1,
  border: 0,
  padding: 0,
  overflow: "hidden",
  clip: "rect(0px, 0px, 0px, 0px)",
  clipPath: "inset(100%)"
};
var ARIA_NODE_DESC_KEY = "react-flow__node-desc";
var ARIA_EDGE_DESC_KEY = "react-flow__edge-desc";
var ARIA_LIVE_MESSAGE = "react-flow__aria-live";
var selector$c = (s) => s.ariaLiveMessage;
function AriaLiveMessage({ rfId }) {
  const ariaLiveMessage = useStore2(selector$c);
  return import_react2.default.createElement("div", { id: `${ARIA_LIVE_MESSAGE}-${rfId}`, "aria-live": "assertive", "aria-atomic": "true", style: ariaLiveStyle }, ariaLiveMessage);
}
function A11yDescriptions({ rfId, disableKeyboardA11y }) {
  return import_react2.default.createElement(
    import_react2.default.Fragment,
    null,
    import_react2.default.createElement(
      "div",
      { id: `${ARIA_NODE_DESC_KEY}-${rfId}`, style },
      "Press enter or space to select a node.",
      !disableKeyboardA11y && "You can then use the arrow keys to move the node around.",
      " Press delete to remove it and escape to cancel.",
      " "
    ),
    import_react2.default.createElement("div", { id: `${ARIA_EDGE_DESC_KEY}-${rfId}`, style }, "Press enter or space to select an edge. You can then press delete to remove it or escape to cancel."),
    !disableKeyboardA11y && import_react2.default.createElement(AriaLiveMessage, { rfId })
  );
}
var useKeyPress = (keyCode = null, options = { actInsideInputWithModifier: true }) => {
  const [keyPressed, setKeyPressed] = (0, import_react2.useState)(false);
  const modifierPressed = (0, import_react2.useRef)(false);
  const pressedKeys = (0, import_react2.useRef)(/* @__PURE__ */ new Set([]));
  const [keyCodes, keysToWatch] = (0, import_react2.useMemo)(() => {
    if (keyCode !== null) {
      const keyCodeArr = Array.isArray(keyCode) ? keyCode : [keyCode];
      const keys = keyCodeArr.filter((kc) => typeof kc === "string").map((kc) => kc.split("+"));
      const keysFlat = keys.reduce((res, item) => res.concat(...item), []);
      return [keys, keysFlat];
    }
    return [[], []];
  }, [keyCode]);
  (0, import_react2.useEffect)(() => {
    const doc = typeof document !== "undefined" ? document : null;
    const target = options?.target || doc;
    if (keyCode !== null) {
      const downHandler = (event) => {
        modifierPressed.current = event.ctrlKey || event.metaKey || event.shiftKey;
        const preventAction = (!modifierPressed.current || modifierPressed.current && !options.actInsideInputWithModifier) && isInputDOMNode(event);
        if (preventAction) {
          return false;
        }
        const keyOrCode = useKeyOrCode(event.code, keysToWatch);
        pressedKeys.current.add(event[keyOrCode]);
        if (isMatchingKey(keyCodes, pressedKeys.current, false)) {
          event.preventDefault();
          setKeyPressed(true);
        }
      };
      const upHandler = (event) => {
        const preventAction = (!modifierPressed.current || modifierPressed.current && !options.actInsideInputWithModifier) && isInputDOMNode(event);
        if (preventAction) {
          return false;
        }
        const keyOrCode = useKeyOrCode(event.code, keysToWatch);
        if (isMatchingKey(keyCodes, pressedKeys.current, true)) {
          setKeyPressed(false);
          pressedKeys.current.clear();
        } else {
          pressedKeys.current.delete(event[keyOrCode]);
        }
        if (event.key === "Meta") {
          pressedKeys.current.clear();
        }
        modifierPressed.current = false;
      };
      const resetHandler = () => {
        pressedKeys.current.clear();
        setKeyPressed(false);
      };
      target?.addEventListener("keydown", downHandler);
      target?.addEventListener("keyup", upHandler);
      window.addEventListener("blur", resetHandler);
      return () => {
        target?.removeEventListener("keydown", downHandler);
        target?.removeEventListener("keyup", upHandler);
        window.removeEventListener("blur", resetHandler);
      };
    }
  }, [keyCode, setKeyPressed]);
  return keyPressed;
};
function isMatchingKey(keyCodes, pressedKeys, isUp) {
  return keyCodes.filter((keys) => isUp || keys.length === pressedKeys.size).some((keys) => keys.every((k) => pressedKeys.has(k)));
}
function useKeyOrCode(eventCode, keysToWatch) {
  return keysToWatch.includes(eventCode) ? "code" : "key";
}
function calculateXYZPosition(node, nodeInternals, result, nodeOrigin) {
  if (!node.parentNode) {
    return result;
  }
  const parentNode = nodeInternals.get(node.parentNode);
  const parentNodePosition = getNodePositionWithOrigin(parentNode, nodeOrigin);
  return calculateXYZPosition(parentNode, nodeInternals, {
    x: (result.x ?? 0) + parentNodePosition.x,
    y: (result.y ?? 0) + parentNodePosition.y,
    z: (parentNode[internalsSymbol]?.z ?? 0) > (result.z ?? 0) ? parentNode[internalsSymbol]?.z ?? 0 : result.z ?? 0
  }, nodeOrigin);
}
function updateAbsoluteNodePositions(nodeInternals, nodeOrigin, parentNodes) {
  nodeInternals.forEach((node) => {
    if (node.parentNode && !nodeInternals.has(node.parentNode)) {
      throw new Error(`Parent node ${node.parentNode} not found`);
    }
    if (node.parentNode || parentNodes?.[node.id]) {
      const { x, y, z } = calculateXYZPosition(node, nodeInternals, {
        ...node.position,
        z: node[internalsSymbol]?.z ?? 0
      }, nodeOrigin);
      node.positionAbsolute = {
        x,
        y
      };
      node[internalsSymbol].z = z;
      if (parentNodes?.[node.id]) {
        node[internalsSymbol].isParent = true;
      }
    }
  });
}
function createNodeInternals(nodes, nodeInternals, nodeOrigin, elevateNodesOnSelect) {
  const nextNodeInternals = /* @__PURE__ */ new Map();
  const parentNodes = {};
  const selectedNodeZ = elevateNodesOnSelect ? 1e3 : 0;
  nodes.forEach((node) => {
    const z = (isNumeric(node.zIndex) ? node.zIndex : 0) + (node.selected ? selectedNodeZ : 0);
    const currInternals = nodeInternals.get(node.id);
    const internals = {
      width: currInternals?.width,
      height: currInternals?.height,
      ...node,
      positionAbsolute: {
        x: node.position.x,
        y: node.position.y
      }
    };
    if (node.parentNode) {
      internals.parentNode = node.parentNode;
      parentNodes[node.parentNode] = true;
    }
    Object.defineProperty(internals, internalsSymbol, {
      enumerable: false,
      value: {
        handleBounds: currInternals?.[internalsSymbol]?.handleBounds,
        z
      }
    });
    nextNodeInternals.set(node.id, internals);
  });
  updateAbsoluteNodePositions(nextNodeInternals, nodeOrigin, parentNodes);
  return nextNodeInternals;
}
function fitView(get3, options = {}) {
  const { getNodes, width, height, minZoom, maxZoom, d3Zoom, d3Selection, fitViewOnInitDone, fitViewOnInit, nodeOrigin } = get3();
  const isInitialFitView = options.initial && !fitViewOnInitDone && fitViewOnInit;
  const d3initialized = d3Zoom && d3Selection;
  if (d3initialized && (isInitialFitView || !options.initial)) {
    const nodes = getNodes().filter((n) => {
      const isVisible = options.includeHiddenNodes ? n.width && n.height : !n.hidden;
      if (options.nodes?.length) {
        return isVisible && options.nodes.some((optionNode) => optionNode.id === n.id);
      }
      return isVisible;
    });
    const nodesInitialized = nodes.every((n) => n.width && n.height);
    if (nodes.length > 0 && nodesInitialized) {
      const bounds = getRectOfNodes(nodes, nodeOrigin);
      const [x, y, zoom] = getTransformForBounds(bounds, width, height, options.minZoom ?? minZoom, options.maxZoom ?? maxZoom, options.padding ?? 0.1);
      const nextTransform = identity2.translate(x, y).scale(zoom);
      if (typeof options.duration === "number" && options.duration > 0) {
        d3Zoom.transform(getD3Transition(d3Selection, options.duration), nextTransform);
      } else {
        d3Zoom.transform(d3Selection, nextTransform);
      }
      return true;
    }
  }
  return false;
}
function handleControlledNodeSelectionChange(nodeChanges, nodeInternals) {
  nodeChanges.forEach((change) => {
    const node = nodeInternals.get(change.id);
    if (node) {
      nodeInternals.set(node.id, {
        ...node,
        [internalsSymbol]: node[internalsSymbol],
        selected: change.selected
      });
    }
  });
  return new Map(nodeInternals);
}
function handleControlledEdgeSelectionChange(edgeChanges, edges) {
  return edges.map((e) => {
    const change = edgeChanges.find((change2) => change2.id === e.id);
    if (change) {
      e.selected = change.selected;
    }
    return e;
  });
}
function updateNodesAndEdgesSelections({ changedNodes, changedEdges, get: get3, set: set3 }) {
  const { nodeInternals, edges, onNodesChange, onEdgesChange, hasDefaultNodes, hasDefaultEdges } = get3();
  if (changedNodes?.length) {
    if (hasDefaultNodes) {
      set3({ nodeInternals: handleControlledNodeSelectionChange(changedNodes, nodeInternals) });
    }
    onNodesChange?.(changedNodes);
  }
  if (changedEdges?.length) {
    if (hasDefaultEdges) {
      set3({ edges: handleControlledEdgeSelectionChange(changedEdges, edges) });
    }
    onEdgesChange?.(changedEdges);
  }
}
var noop2 = () => {
};
var initialViewportHelper = {
  zoomIn: noop2,
  zoomOut: noop2,
  zoomTo: noop2,
  getZoom: () => 1,
  setViewport: noop2,
  getViewport: () => ({ x: 0, y: 0, zoom: 1 }),
  fitView: () => false,
  setCenter: noop2,
  fitBounds: noop2,
  project: (position) => position,
  viewportInitialized: false
};
var selector$b = (s) => ({
  d3Zoom: s.d3Zoom,
  d3Selection: s.d3Selection
});
var useViewportHelper = () => {
  const store = useStoreApi();
  const { d3Zoom, d3Selection } = useStore2(selector$b, shallow$1);
  const viewportHelperFunctions = (0, import_react2.useMemo)(() => {
    if (d3Selection && d3Zoom) {
      return {
        zoomIn: (options) => d3Zoom.scaleBy(getD3Transition(d3Selection, options?.duration), 1.2),
        zoomOut: (options) => d3Zoom.scaleBy(getD3Transition(d3Selection, options?.duration), 1 / 1.2),
        zoomTo: (zoomLevel, options) => d3Zoom.scaleTo(getD3Transition(d3Selection, options?.duration), zoomLevel),
        getZoom: () => store.getState().transform[2],
        setViewport: (transform2, options) => {
          const [x, y, zoom] = store.getState().transform;
          const nextTransform = identity2.translate(transform2.x ?? x, transform2.y ?? y).scale(transform2.zoom ?? zoom);
          d3Zoom.transform(getD3Transition(d3Selection, options?.duration), nextTransform);
        },
        getViewport: () => {
          const [x, y, zoom] = store.getState().transform;
          return { x, y, zoom };
        },
        fitView: (options) => fitView(store.getState, options),
        setCenter: (x, y, options) => {
          const { width, height, maxZoom } = store.getState();
          const nextZoom = typeof options?.zoom !== "undefined" ? options.zoom : maxZoom;
          const centerX = width / 2 - x * nextZoom;
          const centerY = height / 2 - y * nextZoom;
          const transform2 = identity2.translate(centerX, centerY).scale(nextZoom);
          d3Zoom.transform(getD3Transition(d3Selection, options?.duration), transform2);
        },
        fitBounds: (bounds, options) => {
          const { width, height, minZoom, maxZoom } = store.getState();
          const [x, y, zoom] = getTransformForBounds(bounds, width, height, minZoom, maxZoom, options?.padding ?? 0.1);
          const transform2 = identity2.translate(x, y).scale(zoom);
          d3Zoom.transform(getD3Transition(d3Selection, options?.duration), transform2);
        },
        project: (position) => {
          const { transform: transform2, snapToGrid, snapGrid } = store.getState();
          return pointToRendererPoint(position, transform2, snapToGrid, snapGrid);
        },
        viewportInitialized: true
      };
    }
    return initialViewportHelper;
  }, [d3Zoom, d3Selection]);
  return viewportHelperFunctions;
};
function useReactFlow() {
  const viewportHelper = useViewportHelper();
  const store = useStoreApi();
  const getNodes = (0, import_react2.useCallback)(() => {
    return store.getState().getNodes().map((n) => ({ ...n }));
  }, []);
  const getNode = (0, import_react2.useCallback)((id2) => {
    return store.getState().nodeInternals.get(id2);
  }, []);
  const getEdges = (0, import_react2.useCallback)(() => {
    const { edges = [] } = store.getState();
    return edges.map((e) => ({ ...e }));
  }, []);
  const getEdge = (0, import_react2.useCallback)((id2) => {
    const { edges = [] } = store.getState();
    return edges.find((e) => e.id === id2);
  }, []);
  const setNodes = (0, import_react2.useCallback)((payload) => {
    const { getNodes: getNodes2, setNodes: setNodes2, hasDefaultNodes, onNodesChange } = store.getState();
    const nodes = getNodes2();
    const nextNodes = typeof payload === "function" ? payload(nodes) : payload;
    if (hasDefaultNodes) {
      setNodes2(nextNodes);
    } else if (onNodesChange) {
      const changes = nextNodes.length === 0 ? nodes.map((node) => ({ type: "remove", id: node.id })) : nextNodes.map((node) => ({ item: node, type: "reset" }));
      onNodesChange(changes);
    }
  }, []);
  const setEdges = (0, import_react2.useCallback)((payload) => {
    const { edges = [], setEdges: setEdges2, hasDefaultEdges, onEdgesChange } = store.getState();
    const nextEdges = typeof payload === "function" ? payload(edges) : payload;
    if (hasDefaultEdges) {
      setEdges2(nextEdges);
    } else if (onEdgesChange) {
      const changes = nextEdges.length === 0 ? edges.map((edge) => ({ type: "remove", id: edge.id })) : nextEdges.map((edge) => ({ item: edge, type: "reset" }));
      onEdgesChange(changes);
    }
  }, []);
  const addNodes = (0, import_react2.useCallback)((payload) => {
    const nodes = Array.isArray(payload) ? payload : [payload];
    const { getNodes: getNodes2, setNodes: setNodes2, hasDefaultNodes, onNodesChange } = store.getState();
    if (hasDefaultNodes) {
      const currentNodes = getNodes2();
      const nextNodes = [...currentNodes, ...nodes];
      setNodes2(nextNodes);
    } else if (onNodesChange) {
      const changes = nodes.map((node) => ({ item: node, type: "add" }));
      onNodesChange(changes);
    }
  }, []);
  const addEdges = (0, import_react2.useCallback)((payload) => {
    const nextEdges = Array.isArray(payload) ? payload : [payload];
    const { edges = [], setEdges: setEdges2, hasDefaultEdges, onEdgesChange } = store.getState();
    if (hasDefaultEdges) {
      setEdges2([...edges, ...nextEdges]);
    } else if (onEdgesChange) {
      const changes = nextEdges.map((edge) => ({ item: edge, type: "add" }));
      onEdgesChange(changes);
    }
  }, []);
  const toObject = (0, import_react2.useCallback)(() => {
    const { getNodes: getNodes2, edges = [], transform: transform2 } = store.getState();
    const [x, y, zoom] = transform2;
    return {
      nodes: getNodes2().map((n) => ({ ...n })),
      edges: edges.map((e) => ({ ...e })),
      viewport: {
        x,
        y,
        zoom
      }
    };
  }, []);
  const deleteElements = (0, import_react2.useCallback)(({ nodes: nodesDeleted, edges: edgesDeleted }) => {
    const { nodeInternals, getNodes: getNodes2, edges, hasDefaultNodes, hasDefaultEdges, onNodesDelete, onEdgesDelete, onNodesChange, onEdgesChange } = store.getState();
    const nodeIds = (nodesDeleted || []).map((node) => node.id);
    const edgeIds = (edgesDeleted || []).map((edge) => edge.id);
    const nodesToRemove = getNodes2().reduce((res, node) => {
      const parentHit = !nodeIds.includes(node.id) && node.parentNode && res.find((n) => n.id === node.parentNode);
      const deletable = typeof node.deletable === "boolean" ? node.deletable : true;
      if (deletable && (nodeIds.includes(node.id) || parentHit)) {
        res.push(node);
      }
      return res;
    }, []);
    const deletableEdges = edges.filter((e) => typeof e.deletable === "boolean" ? e.deletable : true);
    const initialHitEdges = deletableEdges.filter((e) => edgeIds.includes(e.id));
    if (nodesToRemove || initialHitEdges) {
      const connectedEdges = getConnectedEdges(nodesToRemove, deletableEdges);
      const edgesToRemove = [...initialHitEdges, ...connectedEdges];
      const edgeIdsToRemove = edgesToRemove.reduce((res, edge) => {
        if (!res.includes(edge.id)) {
          res.push(edge.id);
        }
        return res;
      }, []);
      if (hasDefaultEdges || hasDefaultNodes) {
        if (hasDefaultEdges) {
          store.setState({
            edges: edges.filter((e) => !edgeIdsToRemove.includes(e.id))
          });
        }
        if (hasDefaultNodes) {
          nodesToRemove.forEach((node) => {
            nodeInternals.delete(node.id);
          });
          store.setState({
            nodeInternals: new Map(nodeInternals)
          });
        }
      }
      if (edgeIdsToRemove.length > 0) {
        onEdgesDelete?.(edgesToRemove);
        if (onEdgesChange) {
          onEdgesChange(edgeIdsToRemove.map((id2) => ({
            id: id2,
            type: "remove"
          })));
        }
      }
      if (nodesToRemove.length > 0) {
        onNodesDelete?.(nodesToRemove);
        if (onNodesChange) {
          const nodeChanges = nodesToRemove.map((n) => ({ id: n.id, type: "remove" }));
          onNodesChange(nodeChanges);
        }
      }
    }
  }, []);
  const getNodeRect = (0, import_react2.useCallback)((nodeOrRect) => {
    const isRect = isRectObject(nodeOrRect);
    const node = isRect ? null : store.getState().nodeInternals.get(nodeOrRect.id);
    const nodeRect = isRect ? nodeOrRect : nodeToRect(node);
    return [nodeRect, node, isRect];
  }, []);
  const getIntersectingNodes = (0, import_react2.useCallback)((nodeOrRect, partially = true, nodes) => {
    const [nodeRect, node, isRect] = getNodeRect(nodeOrRect);
    if (!nodeRect) {
      return [];
    }
    return (nodes || store.getState().getNodes()).filter((n) => {
      if (!isRect && (n.id === node.id || !n.positionAbsolute)) {
        return false;
      }
      const currNodeRect = nodeToRect(n);
      const overlappingArea = getOverlappingArea(currNodeRect, nodeRect);
      const partiallyVisible = partially && overlappingArea > 0;
      return partiallyVisible || overlappingArea >= nodeOrRect.width * nodeOrRect.height;
    });
  }, []);
  const isNodeIntersecting = (0, import_react2.useCallback)((nodeOrRect, area, partially = true) => {
    const [nodeRect] = getNodeRect(nodeOrRect);
    if (!nodeRect) {
      return false;
    }
    const overlappingArea = getOverlappingArea(nodeRect, area);
    const partiallyVisible = partially && overlappingArea > 0;
    return partiallyVisible || overlappingArea >= nodeOrRect.width * nodeOrRect.height;
  }, []);
  return (0, import_react2.useMemo)(() => {
    return {
      ...viewportHelper,
      getNodes,
      getNode,
      getEdges,
      getEdge,
      setNodes,
      setEdges,
      addNodes,
      addEdges,
      toObject,
      deleteElements,
      getIntersectingNodes,
      isNodeIntersecting
    };
  }, [
    viewportHelper,
    getNodes,
    getNode,
    getEdges,
    getEdge,
    setNodes,
    setEdges,
    addNodes,
    addEdges,
    toObject,
    deleteElements,
    getIntersectingNodes,
    isNodeIntersecting
  ]);
}
var deleteKeyOptions = { actInsideInputWithModifier: false };
var useGlobalKeyHandler = ({ deleteKeyCode, multiSelectionKeyCode }) => {
  const store = useStoreApi();
  const { deleteElements } = useReactFlow();
  const deleteKeyPressed = useKeyPress(deleteKeyCode, deleteKeyOptions);
  const multiSelectionKeyPressed = useKeyPress(multiSelectionKeyCode);
  (0, import_react2.useEffect)(() => {
    if (deleteKeyPressed) {
      const { edges, getNodes } = store.getState();
      const selectedNodes = getNodes().filter((node) => node.selected);
      const selectedEdges = edges.filter((edge) => edge.selected);
      deleteElements({ nodes: selectedNodes, edges: selectedEdges });
      store.setState({ nodesSelectionActive: false });
    }
  }, [deleteKeyPressed]);
  (0, import_react2.useEffect)(() => {
    store.setState({ multiSelectionActive: multiSelectionKeyPressed });
  }, [multiSelectionKeyPressed]);
};
function useResizeHandler(rendererNode) {
  const store = useStoreApi();
  (0, import_react2.useEffect)(() => {
    let resizeObserver;
    const updateDimensions = () => {
      if (!rendererNode.current) {
        return;
      }
      const size = getDimensions(rendererNode.current);
      if (size.height === 0 || size.width === 0) {
        store.getState().onError?.("004", errorMessages["error004"]());
      }
      store.setState({ width: size.width || 500, height: size.height || 500 });
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    if (rendererNode.current) {
      resizeObserver = new ResizeObserver(() => updateDimensions());
      resizeObserver.observe(rendererNode.current);
    }
    return () => {
      window.removeEventListener("resize", updateDimensions);
      if (resizeObserver && rendererNode.current) {
        resizeObserver.unobserve(rendererNode.current);
      }
    };
  }, []);
}
var containerStyle = {
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0
};
var viewChanged = (prevViewport, eventTransform) => prevViewport.x !== eventTransform.x || prevViewport.y !== eventTransform.y || prevViewport.zoom !== eventTransform.k;
var eventToFlowTransform = (eventTransform) => ({
  x: eventTransform.x,
  y: eventTransform.y,
  zoom: eventTransform.k
});
var isWrappedWithClass = (event, className) => event.target.closest(`.${className}`);
var isRightClickPan = (panOnDrag, usedButton) => usedButton === 2 && Array.isArray(panOnDrag) && panOnDrag.includes(2);
var wheelDelta = (event) => {
  const factor = event.ctrlKey && isMacOs() ? 10 : 1;
  return -event.deltaY * (event.deltaMode === 1 ? 0.05 : event.deltaMode ? 1 : 2e-3) * factor;
};
var selector$a = (s) => ({
  d3Zoom: s.d3Zoom,
  d3Selection: s.d3Selection,
  d3ZoomHandler: s.d3ZoomHandler,
  userSelectionActive: s.userSelectionActive
});
var ZoomPane = ({ onMove, onMoveStart, onMoveEnd, onPaneContextMenu, zoomOnScroll = true, zoomOnPinch = true, panOnScroll = false, panOnScrollSpeed = 0.5, panOnScrollMode = PanOnScrollMode.Free, zoomOnDoubleClick = true, elementsSelectable, panOnDrag = true, defaultViewport, translateExtent, minZoom, maxZoom, zoomActivationKeyCode, preventScrolling = true, children: children2, noWheelClassName, noPanClassName }) => {
  const timerId = (0, import_react2.useRef)();
  const store = useStoreApi();
  const isZoomingOrPanning = (0, import_react2.useRef)(false);
  const zoomedWithRightMouseButton = (0, import_react2.useRef)(false);
  const zoomPane = (0, import_react2.useRef)(null);
  const prevTransform = (0, import_react2.useRef)({ x: 0, y: 0, zoom: 0 });
  const { d3Zoom, d3Selection, d3ZoomHandler, userSelectionActive } = useStore2(selector$a, shallow$1);
  const zoomActivationKeyPressed = useKeyPress(zoomActivationKeyCode);
  const mouseButton = (0, import_react2.useRef)(0);
  const isPanScrolling = (0, import_react2.useRef)(false);
  const panScrollTimeout = (0, import_react2.useRef)();
  useResizeHandler(zoomPane);
  (0, import_react2.useEffect)(() => {
    if (zoomPane.current) {
      const bbox = zoomPane.current.getBoundingClientRect();
      const d3ZoomInstance = zoom_default2().scaleExtent([minZoom, maxZoom]).translateExtent(translateExtent);
      const selection2 = select_default2(zoomPane.current).call(d3ZoomInstance);
      const updatedTransform = identity2.translate(defaultViewport.x, defaultViewport.y).scale(clamp(defaultViewport.zoom, minZoom, maxZoom));
      const extent = [
        [0, 0],
        [bbox.width, bbox.height]
      ];
      const constrainedTransform = d3ZoomInstance.constrain()(updatedTransform, extent, translateExtent);
      d3ZoomInstance.transform(selection2, constrainedTransform);
      d3ZoomInstance.wheelDelta(wheelDelta);
      store.setState({
        d3Zoom: d3ZoomInstance,
        d3Selection: selection2,
        d3ZoomHandler: selection2.on("wheel.zoom"),
        // we need to pass transform because zoom handler is not registered when we set the initial transform
        transform: [constrainedTransform.x, constrainedTransform.y, constrainedTransform.k],
        domNode: zoomPane.current.closest(".react-flow")
      });
    }
  }, []);
  (0, import_react2.useEffect)(() => {
    if (d3Selection && d3Zoom) {
      if (panOnScroll && !zoomActivationKeyPressed && !userSelectionActive) {
        d3Selection.on("wheel.zoom", (event) => {
          if (isWrappedWithClass(event, noWheelClassName)) {
            return false;
          }
          event.preventDefault();
          event.stopImmediatePropagation();
          const currentZoom = d3Selection.property("__zoom").k || 1;
          const _isMacOs = isMacOs();
          if (event.ctrlKey && zoomOnPinch && _isMacOs) {
            const point = pointer_default(event);
            const pinchDelta = wheelDelta(event);
            const zoom = currentZoom * Math.pow(2, pinchDelta);
            d3Zoom.scaleTo(d3Selection, zoom, point, event);
            return;
          }
          const deltaNormalize = event.deltaMode === 1 ? 20 : 1;
          let deltaX = panOnScrollMode === PanOnScrollMode.Vertical ? 0 : event.deltaX * deltaNormalize;
          let deltaY = panOnScrollMode === PanOnScrollMode.Horizontal ? 0 : event.deltaY * deltaNormalize;
          if (!_isMacOs && event.shiftKey && panOnScrollMode !== PanOnScrollMode.Vertical) {
            deltaX = event.deltaY * deltaNormalize;
            deltaY = 0;
          }
          d3Zoom.translateBy(
            d3Selection,
            -(deltaX / currentZoom) * panOnScrollSpeed,
            -(deltaY / currentZoom) * panOnScrollSpeed,
            // @ts-ignore
            { internal: true }
          );
          const nextViewport = eventToFlowTransform(d3Selection.property("__zoom"));
          const { onViewportChangeStart, onViewportChange, onViewportChangeEnd } = store.getState();
          clearTimeout(panScrollTimeout.current);
          if (!isPanScrolling.current) {
            isPanScrolling.current = true;
            onMoveStart?.(event, nextViewport);
            onViewportChangeStart?.(nextViewport);
          }
          if (isPanScrolling.current) {
            onMove?.(event, nextViewport);
            onViewportChange?.(nextViewport);
            panScrollTimeout.current = setTimeout(() => {
              onMoveEnd?.(event, nextViewport);
              onViewportChangeEnd?.(nextViewport);
              isPanScrolling.current = false;
            }, 150);
          }
        }, { passive: false });
      } else if (typeof d3ZoomHandler !== "undefined") {
        d3Selection.on("wheel.zoom", function(event, d) {
          if (!preventScrolling || isWrappedWithClass(event, noWheelClassName)) {
            return null;
          }
          event.preventDefault();
          d3ZoomHandler.call(this, event, d);
        }, { passive: false });
      }
    }
  }, [
    userSelectionActive,
    panOnScroll,
    panOnScrollMode,
    d3Selection,
    d3Zoom,
    d3ZoomHandler,
    zoomActivationKeyPressed,
    zoomOnPinch,
    preventScrolling,
    noWheelClassName,
    onMoveStart,
    onMove,
    onMoveEnd
  ]);
  (0, import_react2.useEffect)(() => {
    if (d3Zoom) {
      d3Zoom.on("start", (event) => {
        if (!event.sourceEvent || event.sourceEvent.internal) {
          return null;
        }
        mouseButton.current = event.sourceEvent?.button;
        const { onViewportChangeStart } = store.getState();
        const flowTransform = eventToFlowTransform(event.transform);
        isZoomingOrPanning.current = true;
        prevTransform.current = flowTransform;
        if (event.sourceEvent?.type === "mousedown") {
          store.setState({ paneDragging: true });
        }
        onViewportChangeStart?.(flowTransform);
        onMoveStart?.(event.sourceEvent, flowTransform);
      });
    }
  }, [d3Zoom, onMoveStart]);
  (0, import_react2.useEffect)(() => {
    if (d3Zoom) {
      if (userSelectionActive && !isZoomingOrPanning.current) {
        d3Zoom.on("zoom", null);
      } else if (!userSelectionActive) {
        d3Zoom.on("zoom", (event) => {
          const { onViewportChange } = store.getState();
          store.setState({ transform: [event.transform.x, event.transform.y, event.transform.k] });
          zoomedWithRightMouseButton.current = !!(onPaneContextMenu && isRightClickPan(panOnDrag, mouseButton.current ?? 0));
          if ((onMove || onViewportChange) && !event.sourceEvent?.internal) {
            const flowTransform = eventToFlowTransform(event.transform);
            onViewportChange?.(flowTransform);
            onMove?.(event.sourceEvent, flowTransform);
          }
        });
      }
    }
  }, [userSelectionActive, d3Zoom, onMove, panOnDrag, onPaneContextMenu]);
  (0, import_react2.useEffect)(() => {
    if (d3Zoom) {
      d3Zoom.on("end", (event) => {
        if (!event.sourceEvent || event.sourceEvent.internal) {
          return null;
        }
        const { onViewportChangeEnd } = store.getState();
        isZoomingOrPanning.current = false;
        store.setState({ paneDragging: false });
        if (onPaneContextMenu && isRightClickPan(panOnDrag, mouseButton.current ?? 0) && !zoomedWithRightMouseButton.current) {
          onPaneContextMenu(event.sourceEvent);
        }
        zoomedWithRightMouseButton.current = false;
        if ((onMoveEnd || onViewportChangeEnd) && viewChanged(prevTransform.current, event.transform)) {
          const flowTransform = eventToFlowTransform(event.transform);
          prevTransform.current = flowTransform;
          clearTimeout(timerId.current);
          timerId.current = setTimeout(() => {
            onViewportChangeEnd?.(flowTransform);
            onMoveEnd?.(event.sourceEvent, flowTransform);
          }, panOnScroll ? 150 : 0);
        }
      });
    }
  }, [d3Zoom, panOnScroll, panOnDrag, onMoveEnd, onPaneContextMenu]);
  (0, import_react2.useEffect)(() => {
    if (d3Zoom) {
      d3Zoom.filter((event) => {
        const zoomScroll = zoomActivationKeyPressed || zoomOnScroll;
        const pinchZoom = zoomOnPinch && event.ctrlKey;
        if ((panOnDrag === true || Array.isArray(panOnDrag) && panOnDrag.includes(1)) && event.button === 1 && event.type === "mousedown" && (isWrappedWithClass(event, "react-flow__node") || isWrappedWithClass(event, "react-flow__edge"))) {
          return true;
        }
        if (!panOnDrag && !zoomScroll && !panOnScroll && !zoomOnDoubleClick && !zoomOnPinch) {
          return false;
        }
        if (userSelectionActive) {
          return false;
        }
        if (!zoomOnDoubleClick && event.type === "dblclick") {
          return false;
        }
        if (isWrappedWithClass(event, noWheelClassName) && event.type === "wheel") {
          return false;
        }
        if (isWrappedWithClass(event, noPanClassName) && (event.type !== "wheel" || panOnScroll && event.type === "wheel")) {
          return false;
        }
        if (!zoomOnPinch && event.ctrlKey && event.type === "wheel") {
          return false;
        }
        if (!zoomScroll && !panOnScroll && !pinchZoom && event.type === "wheel") {
          return false;
        }
        if (!panOnDrag && (event.type === "mousedown" || event.type === "touchstart")) {
          return false;
        }
        if (Array.isArray(panOnDrag) && !panOnDrag.includes(event.button) && (event.type === "mousedown" || event.type === "touchstart")) {
          return false;
        }
        const buttonAllowed = Array.isArray(panOnDrag) && panOnDrag.includes(event.button) || !event.button || event.button <= 1;
        return (!event.ctrlKey || event.type === "wheel") && buttonAllowed;
      });
    }
  }, [
    userSelectionActive,
    d3Zoom,
    zoomOnScroll,
    zoomOnPinch,
    panOnScroll,
    zoomOnDoubleClick,
    panOnDrag,
    elementsSelectable,
    zoomActivationKeyPressed
  ]);
  return import_react2.default.createElement("div", { className: "react-flow__renderer", ref: zoomPane, style: containerStyle }, children2);
};
var selector$9 = (s) => ({
  userSelectionActive: s.userSelectionActive,
  userSelectionRect: s.userSelectionRect
});
function UserSelection() {
  const { userSelectionActive, userSelectionRect } = useStore2(selector$9, shallow$1);
  const isActive = userSelectionActive && userSelectionRect;
  if (!isActive) {
    return null;
  }
  return import_react2.default.createElement("div", { className: "react-flow__selection react-flow__container", style: {
    width: userSelectionRect.width,
    height: userSelectionRect.height,
    transform: `translate(${userSelectionRect.x}px, ${userSelectionRect.y}px)`
  } });
}
function handleParentExpand(res, updateItem) {
  const parent = res.find((e) => e.id === updateItem.parentNode);
  if (parent) {
    const extendWidth = updateItem.position.x + updateItem.width - parent.width;
    const extendHeight = updateItem.position.y + updateItem.height - parent.height;
    if (extendWidth > 0 || extendHeight > 0 || updateItem.position.x < 0 || updateItem.position.y < 0) {
      parent.style = { ...parent.style };
      parent.style.width = parent.style.width ?? parent.width;
      parent.style.height = parent.style.height ?? parent.height;
      if (extendWidth > 0) {
        parent.style.width += extendWidth;
      }
      if (extendHeight > 0) {
        parent.style.height += extendHeight;
      }
      if (updateItem.position.x < 0) {
        const xDiff = Math.abs(updateItem.position.x);
        parent.position.x = parent.position.x - xDiff;
        parent.style.width += xDiff;
        updateItem.position.x = 0;
      }
      if (updateItem.position.y < 0) {
        const yDiff = Math.abs(updateItem.position.y);
        parent.position.y = parent.position.y - yDiff;
        parent.style.height += yDiff;
        updateItem.position.y = 0;
      }
      parent.width = parent.style.width;
      parent.height = parent.style.height;
    }
  }
}
function applyChanges(changes, elements) {
  if (changes.some((c) => c.type === "reset")) {
    return changes.filter((c) => c.type === "reset").map((c) => c.item);
  }
  const initElements = changes.filter((c) => c.type === "add").map((c) => c.item);
  return elements.reduce((res, item) => {
    const currentChanges = changes.filter((c) => c.id === item.id);
    if (currentChanges.length === 0) {
      res.push(item);
      return res;
    }
    const updateItem = { ...item };
    for (const currentChange of currentChanges) {
      if (currentChange) {
        switch (currentChange.type) {
          case "select": {
            updateItem.selected = currentChange.selected;
            break;
          }
          case "position": {
            if (typeof currentChange.position !== "undefined") {
              updateItem.position = currentChange.position;
            }
            if (typeof currentChange.positionAbsolute !== "undefined") {
              updateItem.positionAbsolute = currentChange.positionAbsolute;
            }
            if (typeof currentChange.dragging !== "undefined") {
              updateItem.dragging = currentChange.dragging;
            }
            if (updateItem.expandParent) {
              handleParentExpand(res, updateItem);
            }
            break;
          }
          case "dimensions": {
            if (typeof currentChange.dimensions !== "undefined") {
              updateItem.width = currentChange.dimensions.width;
              updateItem.height = currentChange.dimensions.height;
            }
            if (typeof currentChange.updateStyle !== "undefined") {
              updateItem.style = { ...updateItem.style || {}, ...currentChange.dimensions };
            }
            if (typeof currentChange.resizing === "boolean") {
              updateItem.resizing = currentChange.resizing;
            }
            if (updateItem.expandParent) {
              handleParentExpand(res, updateItem);
            }
            break;
          }
          case "remove": {
            return res;
          }
        }
      }
    }
    res.push(updateItem);
    return res;
  }, initElements);
}
function applyNodeChanges(changes, nodes) {
  return applyChanges(changes, nodes);
}
function applyEdgeChanges(changes, edges) {
  return applyChanges(changes, edges);
}
var createSelectionChange = (id2, selected) => ({
  id: id2,
  type: "select",
  selected
});
function getSelectionChanges(items, selectedIds) {
  return items.reduce((res, item) => {
    const willBeSelected = selectedIds.includes(item.id);
    if (!item.selected && willBeSelected) {
      item.selected = true;
      res.push(createSelectionChange(item.id, true));
    } else if (item.selected && !willBeSelected) {
      item.selected = false;
      res.push(createSelectionChange(item.id, false));
    }
    return res;
  }, []);
}
var wrapHandler = (handler, containerRef) => {
  return (event) => {
    if (event.target !== containerRef.current) {
      return;
    }
    handler?.(event);
  };
};
var selector$8 = (s) => ({
  userSelectionActive: s.userSelectionActive,
  elementsSelectable: s.elementsSelectable,
  dragging: s.paneDragging
});
var Pane = (0, import_react2.memo)(({ isSelecting, selectionMode = SelectionMode.Full, panOnDrag, onSelectionStart, onSelectionEnd, onPaneClick, onPaneContextMenu, onPaneScroll, onPaneMouseEnter, onPaneMouseMove, onPaneMouseLeave, children: children2 }) => {
  const container = (0, import_react2.useRef)(null);
  const store = useStoreApi();
  const prevSelectedNodesCount = (0, import_react2.useRef)(0);
  const prevSelectedEdgesCount = (0, import_react2.useRef)(0);
  const containerBounds = (0, import_react2.useRef)();
  const { userSelectionActive, elementsSelectable, dragging } = useStore2(selector$8, shallow$1);
  const resetUserSelection = () => {
    store.setState({ userSelectionActive: false, userSelectionRect: null });
    prevSelectedNodesCount.current = 0;
    prevSelectedEdgesCount.current = 0;
  };
  const onClick = (event) => {
    onPaneClick?.(event);
    store.getState().resetSelectedElements();
    store.setState({ nodesSelectionActive: false });
  };
  const onContextMenu = (event) => {
    if (Array.isArray(panOnDrag) && panOnDrag?.includes(2)) {
      event.preventDefault();
      return;
    }
    onPaneContextMenu?.(event);
  };
  const onWheel = onPaneScroll ? (event) => onPaneScroll(event) : void 0;
  const onMouseDown = (event) => {
    const { resetSelectedElements, domNode } = store.getState();
    containerBounds.current = domNode?.getBoundingClientRect();
    if (!elementsSelectable || !isSelecting || event.button !== 0 || event.target !== container.current || !containerBounds.current) {
      return;
    }
    const { x, y } = getEventPosition(event, containerBounds.current);
    resetSelectedElements();
    store.setState({
      userSelectionRect: {
        width: 0,
        height: 0,
        startX: x,
        startY: y,
        x,
        y
      }
    });
    onSelectionStart?.(event);
  };
  const onMouseMove = (event) => {
    const { userSelectionRect, nodeInternals, edges, transform: transform2, onNodesChange, onEdgesChange, nodeOrigin, getNodes } = store.getState();
    if (!isSelecting || !containerBounds.current || !userSelectionRect) {
      return;
    }
    store.setState({ userSelectionActive: true, nodesSelectionActive: false });
    const mousePos = getEventPosition(event, containerBounds.current);
    const startX = userSelectionRect.startX ?? 0;
    const startY = userSelectionRect.startY ?? 0;
    const nextUserSelectRect = {
      ...userSelectionRect,
      x: mousePos.x < startX ? mousePos.x : startX,
      y: mousePos.y < startY ? mousePos.y : startY,
      width: Math.abs(mousePos.x - startX),
      height: Math.abs(mousePos.y - startY)
    };
    const nodes = getNodes();
    const selectedNodes = getNodesInside(nodeInternals, nextUserSelectRect, transform2, selectionMode === SelectionMode.Partial, true, nodeOrigin);
    const selectedEdgeIds = getConnectedEdges(selectedNodes, edges).map((e) => e.id);
    const selectedNodeIds = selectedNodes.map((n) => n.id);
    if (prevSelectedNodesCount.current !== selectedNodeIds.length) {
      prevSelectedNodesCount.current = selectedNodeIds.length;
      const changes = getSelectionChanges(nodes, selectedNodeIds);
      if (changes.length) {
        onNodesChange?.(changes);
      }
    }
    if (prevSelectedEdgesCount.current !== selectedEdgeIds.length) {
      prevSelectedEdgesCount.current = selectedEdgeIds.length;
      const changes = getSelectionChanges(edges, selectedEdgeIds);
      if (changes.length) {
        onEdgesChange?.(changes);
      }
    }
    store.setState({
      userSelectionRect: nextUserSelectRect
    });
  };
  const onMouseUp = (event) => {
    if (event.button !== 0) {
      return;
    }
    const { userSelectionRect } = store.getState();
    if (!userSelectionActive && userSelectionRect && event.target === container.current) {
      onClick?.(event);
    }
    store.setState({ nodesSelectionActive: prevSelectedNodesCount.current > 0 });
    resetUserSelection();
    onSelectionEnd?.(event);
  };
  const onMouseLeave = (event) => {
    if (userSelectionActive) {
      store.setState({ nodesSelectionActive: prevSelectedNodesCount.current > 0 });
      onSelectionEnd?.(event);
    }
    resetUserSelection();
  };
  const hasActiveSelection = elementsSelectable && (isSelecting || userSelectionActive);
  return import_react2.default.createElement(
    "div",
    { className: cc(["react-flow__pane", { dragging, selection: isSelecting }]), onClick: hasActiveSelection ? void 0 : wrapHandler(onClick, container), onContextMenu: wrapHandler(onContextMenu, container), onWheel: wrapHandler(onWheel, container), onMouseEnter: hasActiveSelection ? void 0 : onPaneMouseEnter, onMouseDown: hasActiveSelection ? onMouseDown : void 0, onMouseMove: hasActiveSelection ? onMouseMove : onPaneMouseMove, onMouseUp: hasActiveSelection ? onMouseUp : void 0, onMouseLeave: hasActiveSelection ? onMouseLeave : onPaneMouseLeave, ref: container, style: containerStyle },
    children2,
    import_react2.default.createElement(UserSelection, null)
  );
});
Pane.displayName = "Pane";
function isParentSelected(node, nodeInternals) {
  if (!node.parentNode) {
    return false;
  }
  const parentNode = nodeInternals.get(node.parentNode);
  if (!parentNode) {
    return false;
  }
  if (parentNode.selected) {
    return true;
  }
  return isParentSelected(parentNode, nodeInternals);
}
function hasSelector(target, selector, nodeRef) {
  let current = target;
  do {
    if (current?.matches(selector))
      return true;
    if (current === nodeRef.current)
      return false;
    current = current.parentElement;
  } while (current);
  return false;
}
function getDragItems(nodeInternals, nodesDraggable, mousePos, nodeId) {
  return Array.from(nodeInternals.values()).filter((n) => (n.selected || n.id === nodeId) && (!n.parentNode || !isParentSelected(n, nodeInternals)) && (n.draggable || nodesDraggable && typeof n.draggable === "undefined")).map((n) => ({
    id: n.id,
    position: n.position || { x: 0, y: 0 },
    positionAbsolute: n.positionAbsolute || { x: 0, y: 0 },
    distance: {
      x: mousePos.x - (n.positionAbsolute?.x ?? 0),
      y: mousePos.y - (n.positionAbsolute?.y ?? 0)
    },
    delta: {
      x: 0,
      y: 0
    },
    extent: n.extent,
    parentNode: n.parentNode,
    width: n.width,
    height: n.height,
    expandParent: n.expandParent
  }));
}
function clampNodeExtent(node, extent) {
  if (!extent || extent === "parent") {
    return extent;
  }
  return [extent[0], [extent[1][0] - (node.width || 0), extent[1][1] - (node.height || 0)]];
}
function calcNextPosition(node, nextPosition, nodeInternals, nodeExtent, nodeOrigin = [0, 0], onError) {
  const clampedNodeExtent = clampNodeExtent(node, node.extent || nodeExtent);
  let currentExtent = clampedNodeExtent;
  if (node.extent === "parent" && !node.expandParent) {
    if (node.parentNode && node.width && node.height) {
      const parent = nodeInternals.get(node.parentNode);
      const { x: parentX, y: parentY } = getNodePositionWithOrigin(parent, nodeOrigin).positionAbsolute;
      currentExtent = parent && isNumeric(parentX) && isNumeric(parentY) && isNumeric(parent.width) && isNumeric(parent.height) ? [
        [parentX + node.width * nodeOrigin[0], parentY + node.height * nodeOrigin[1]],
        [
          parentX + parent.width - node.width + node.width * nodeOrigin[0],
          parentY + parent.height - node.height + node.height * nodeOrigin[1]
        ]
      ] : currentExtent;
    } else {
      onError?.("005", errorMessages["error005"]());
      currentExtent = clampedNodeExtent;
    }
  } else if (node.extent && node.parentNode && node.extent !== "parent") {
    const parent = nodeInternals.get(node.parentNode);
    const { x: parentX, y: parentY } = getNodePositionWithOrigin(parent, nodeOrigin).positionAbsolute;
    currentExtent = [
      [node.extent[0][0] + parentX, node.extent[0][1] + parentY],
      [node.extent[1][0] + parentX, node.extent[1][1] + parentY]
    ];
  }
  let parentPosition = { x: 0, y: 0 };
  if (node.parentNode) {
    const parentNode = nodeInternals.get(node.parentNode);
    parentPosition = getNodePositionWithOrigin(parentNode, nodeOrigin).positionAbsolute;
  }
  const positionAbsolute = currentExtent && currentExtent !== "parent" ? clampPosition(nextPosition, currentExtent) : nextPosition;
  return {
    position: {
      x: positionAbsolute.x - parentPosition.x,
      y: positionAbsolute.y - parentPosition.y
    },
    positionAbsolute
  };
}
function getEventHandlerParams({ nodeId, dragItems, nodeInternals }) {
  const extentedDragItems = dragItems.map((n) => {
    const node = nodeInternals.get(n.id);
    return {
      ...node,
      position: n.position,
      positionAbsolute: n.positionAbsolute
    };
  });
  return [nodeId ? extentedDragItems.find((n) => n.id === nodeId) : extentedDragItems[0], extentedDragItems];
}
var getHandleBounds = (selector, nodeElement, zoom, nodeOrigin) => {
  const handles = nodeElement.querySelectorAll(selector);
  if (!handles || !handles.length) {
    return null;
  }
  const handlesArray = Array.from(handles);
  const nodeBounds = nodeElement.getBoundingClientRect();
  const nodeOffset = {
    x: nodeBounds.width * nodeOrigin[0],
    y: nodeBounds.height * nodeOrigin[1]
  };
  return handlesArray.map((handle) => {
    const handleBounds = handle.getBoundingClientRect();
    return {
      id: handle.getAttribute("data-handleid"),
      position: handle.getAttribute("data-handlepos"),
      x: (handleBounds.left - nodeBounds.left - nodeOffset.x) / zoom,
      y: (handleBounds.top - nodeBounds.top - nodeOffset.y) / zoom,
      ...getDimensions(handle)
    };
  });
};
function getMouseHandler(id2, getState, handler) {
  return handler === void 0 ? handler : (event) => {
    const node = getState().nodeInternals.get(id2);
    if (node) {
      handler(event, { ...node });
    }
  };
}
function handleNodeClick({ id: id2, store, unselect = false, nodeRef }) {
  const { addSelectedNodes, unselectNodesAndEdges, multiSelectionActive, nodeInternals, onError } = store.getState();
  const node = nodeInternals.get(id2);
  if (!node) {
    onError?.("012", errorMessages["error012"](id2));
    return;
  }
  store.setState({ nodesSelectionActive: false });
  if (!node.selected) {
    addSelectedNodes([id2]);
  } else if (unselect || node.selected && multiSelectionActive) {
    unselectNodesAndEdges({ nodes: [node], edges: [] });
    requestAnimationFrame(() => nodeRef?.current?.blur());
  }
}
function useGetPointerPosition() {
  const store = useStoreApi();
  const getPointerPosition = (0, import_react2.useCallback)(({ sourceEvent }) => {
    const { transform: transform2, snapGrid, snapToGrid } = store.getState();
    const x = sourceEvent.touches ? sourceEvent.touches[0].clientX : sourceEvent.clientX;
    const y = sourceEvent.touches ? sourceEvent.touches[0].clientY : sourceEvent.clientY;
    const pointerPos = {
      x: (x - transform2[0]) / transform2[2],
      y: (y - transform2[1]) / transform2[2]
    };
    return {
      xSnapped: snapToGrid ? snapGrid[0] * Math.round(pointerPos.x / snapGrid[0]) : pointerPos.x,
      ySnapped: snapToGrid ? snapGrid[1] * Math.round(pointerPos.y / snapGrid[1]) : pointerPos.y,
      ...pointerPos
    };
  }, []);
  return getPointerPosition;
}
function wrapSelectionDragFunc(selectionFunc) {
  return (event, _, nodes) => selectionFunc?.(event, nodes);
}
function useDrag({ nodeRef, disabled = false, noDragClassName, handleSelector, nodeId, isSelectable, selectNodesOnDrag }) {
  const store = useStoreApi();
  const [dragging, setDragging] = (0, import_react2.useState)(false);
  const dragItems = (0, import_react2.useRef)([]);
  const lastPos = (0, import_react2.useRef)({ x: null, y: null });
  const autoPanId = (0, import_react2.useRef)(0);
  const containerBounds = (0, import_react2.useRef)(null);
  const mousePosition = (0, import_react2.useRef)({ x: 0, y: 0 });
  const dragEvent = (0, import_react2.useRef)(null);
  const autoPanStarted = (0, import_react2.useRef)(false);
  const dragStarted = (0, import_react2.useRef)(false);
  const getPointerPosition = useGetPointerPosition();
  (0, import_react2.useEffect)(() => {
    if (nodeRef?.current) {
      const selection2 = select_default2(nodeRef.current);
      const updateNodes = ({ x, y }) => {
        const { nodeInternals, onNodeDrag, onSelectionDrag, updateNodePositions, nodeExtent, snapGrid, snapToGrid, nodeOrigin, onError } = store.getState();
        lastPos.current = { x, y };
        let hasChange = false;
        let nodesBox = { x: 0, y: 0, x2: 0, y2: 0 };
        if (dragItems.current.length > 1 && nodeExtent) {
          const rect = getRectOfNodes(dragItems.current, nodeOrigin);
          nodesBox = rectToBox(rect);
        }
        dragItems.current = dragItems.current.map((n) => {
          const nextPosition = { x: x - n.distance.x, y: y - n.distance.y };
          if (snapToGrid) {
            nextPosition.x = snapGrid[0] * Math.round(nextPosition.x / snapGrid[0]);
            nextPosition.y = snapGrid[1] * Math.round(nextPosition.y / snapGrid[1]);
          }
          const adjustedNodeExtent = [
            [nodeExtent[0][0], nodeExtent[0][1]],
            [nodeExtent[1][0], nodeExtent[1][1]]
          ];
          if (dragItems.current.length > 1 && nodeExtent && !n.extent) {
            adjustedNodeExtent[0][0] = n.positionAbsolute.x - nodesBox.x + nodeExtent[0][0];
            adjustedNodeExtent[1][0] = n.positionAbsolute.x + (n.width ?? 0) - nodesBox.x2 + nodeExtent[1][0];
            adjustedNodeExtent[0][1] = n.positionAbsolute.y - nodesBox.y + nodeExtent[0][1];
            adjustedNodeExtent[1][1] = n.positionAbsolute.y + (n.height ?? 0) - nodesBox.y2 + nodeExtent[1][1];
          }
          const updatedPos = calcNextPosition(n, nextPosition, nodeInternals, adjustedNodeExtent, nodeOrigin, onError);
          hasChange = hasChange || n.position.x !== updatedPos.position.x || n.position.y !== updatedPos.position.y;
          n.position = updatedPos.position;
          n.positionAbsolute = updatedPos.positionAbsolute;
          return n;
        });
        if (!hasChange) {
          return;
        }
        updateNodePositions(dragItems.current, true, true);
        setDragging(true);
        const onDrag = nodeId ? onNodeDrag : wrapSelectionDragFunc(onSelectionDrag);
        if (onDrag && dragEvent.current) {
          const [currentNode, nodes] = getEventHandlerParams({
            nodeId,
            dragItems: dragItems.current,
            nodeInternals
          });
          onDrag(dragEvent.current, currentNode, nodes);
        }
      };
      const autoPan = () => {
        if (!containerBounds.current) {
          return;
        }
        const [xMovement, yMovement] = calcAutoPan(mousePosition.current, containerBounds.current);
        if (xMovement !== 0 || yMovement !== 0) {
          const { transform: transform2, panBy } = store.getState();
          lastPos.current.x = (lastPos.current.x ?? 0) - xMovement / transform2[2];
          lastPos.current.y = (lastPos.current.y ?? 0) - yMovement / transform2[2];
          if (panBy({ x: xMovement, y: yMovement })) {
            updateNodes(lastPos.current);
          }
        }
        autoPanId.current = requestAnimationFrame(autoPan);
      };
      const startDrag = (event) => {
        const { nodeInternals, multiSelectionActive, nodesDraggable, unselectNodesAndEdges, onNodeDragStart, onSelectionDragStart } = store.getState();
        dragStarted.current = true;
        const onStart = nodeId ? onNodeDragStart : wrapSelectionDragFunc(onSelectionDragStart);
        if ((!selectNodesOnDrag || !isSelectable) && !multiSelectionActive && nodeId) {
          if (!nodeInternals.get(nodeId)?.selected) {
            unselectNodesAndEdges();
          }
        }
        if (nodeId && isSelectable && selectNodesOnDrag) {
          handleNodeClick({
            id: nodeId,
            store,
            nodeRef
          });
        }
        const pointerPos = getPointerPosition(event);
        lastPos.current = pointerPos;
        dragItems.current = getDragItems(nodeInternals, nodesDraggable, pointerPos, nodeId);
        if (onStart && dragItems.current) {
          const [currentNode, nodes] = getEventHandlerParams({
            nodeId,
            dragItems: dragItems.current,
            nodeInternals
          });
          onStart(event.sourceEvent, currentNode, nodes);
        }
      };
      if (disabled) {
        selection2.on(".drag", null);
      } else {
        const dragHandler = drag_default().on("start", (event) => {
          const { domNode, nodeDragThreshold } = store.getState();
          if (nodeDragThreshold === 0) {
            startDrag(event);
          }
          const pointerPos = getPointerPosition(event);
          lastPos.current = pointerPos;
          containerBounds.current = domNode?.getBoundingClientRect() || null;
          mousePosition.current = getEventPosition(event.sourceEvent, containerBounds.current);
        }).on("drag", (event) => {
          const pointerPos = getPointerPosition(event);
          const { autoPanOnNodeDrag, nodeDragThreshold } = store.getState();
          if (!autoPanStarted.current && dragStarted.current && autoPanOnNodeDrag) {
            autoPanStarted.current = true;
            autoPan();
          }
          if (!dragStarted.current) {
            const x = pointerPos.xSnapped - (lastPos?.current?.x ?? 0);
            const y = pointerPos.ySnapped - (lastPos?.current?.y ?? 0);
            const distance2 = Math.sqrt(x * x + y * y);
            if (distance2 > nodeDragThreshold) {
              startDrag(event);
            }
          }
          if ((lastPos.current.x !== pointerPos.xSnapped || lastPos.current.y !== pointerPos.ySnapped) && dragItems.current && dragStarted.current) {
            dragEvent.current = event.sourceEvent;
            mousePosition.current = getEventPosition(event.sourceEvent, containerBounds.current);
            updateNodes(pointerPos);
          }
        }).on("end", (event) => {
          if (!dragStarted.current) {
            return;
          }
          setDragging(false);
          autoPanStarted.current = false;
          dragStarted.current = false;
          cancelAnimationFrame(autoPanId.current);
          if (dragItems.current) {
            const { updateNodePositions, nodeInternals, onNodeDragStop, onSelectionDragStop } = store.getState();
            const onStop = nodeId ? onNodeDragStop : wrapSelectionDragFunc(onSelectionDragStop);
            updateNodePositions(dragItems.current, false, false);
            if (onStop) {
              const [currentNode, nodes] = getEventHandlerParams({
                nodeId,
                dragItems: dragItems.current,
                nodeInternals
              });
              onStop(event.sourceEvent, currentNode, nodes);
            }
          }
        }).filter((event) => {
          const target = event.target;
          const isDraggable = !event.button && (!noDragClassName || !hasSelector(target, `.${noDragClassName}`, nodeRef)) && (!handleSelector || hasSelector(target, handleSelector, nodeRef));
          return isDraggable;
        });
        selection2.call(dragHandler);
        return () => {
          selection2.on(".drag", null);
        };
      }
    }
  }, [
    nodeRef,
    disabled,
    noDragClassName,
    handleSelector,
    isSelectable,
    store,
    nodeId,
    selectNodesOnDrag,
    getPointerPosition
  ]);
  return dragging;
}
function useUpdateNodePositions() {
  const store = useStoreApi();
  const updatePositions = (0, import_react2.useCallback)((params) => {
    const { nodeInternals, nodeExtent, updateNodePositions, getNodes, snapToGrid, snapGrid, onError, nodesDraggable } = store.getState();
    const selectedNodes = getNodes().filter((n) => n.selected && (n.draggable || nodesDraggable && typeof n.draggable === "undefined"));
    const xVelo = snapToGrid ? snapGrid[0] : 5;
    const yVelo = snapToGrid ? snapGrid[1] : 5;
    const factor = params.isShiftPressed ? 4 : 1;
    const positionDiffX = params.x * xVelo * factor;
    const positionDiffY = params.y * yVelo * factor;
    const nodeUpdates = selectedNodes.map((n) => {
      if (n.positionAbsolute) {
        const nextPosition = { x: n.positionAbsolute.x + positionDiffX, y: n.positionAbsolute.y + positionDiffY };
        if (snapToGrid) {
          nextPosition.x = snapGrid[0] * Math.round(nextPosition.x / snapGrid[0]);
          nextPosition.y = snapGrid[1] * Math.round(nextPosition.y / snapGrid[1]);
        }
        const { positionAbsolute, position } = calcNextPosition(n, nextPosition, nodeInternals, nodeExtent, void 0, onError);
        n.position = position;
        n.positionAbsolute = positionAbsolute;
      }
      return n;
    });
    updateNodePositions(nodeUpdates, true, false);
  }, []);
  return updatePositions;
}
var arrowKeyDiffs = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
};
var wrapNode = (NodeComponent) => {
  const NodeWrapper = ({ id: id2, type, data, xPos, yPos, xPosOrigin, yPosOrigin, selected, onClick, onMouseEnter, onMouseMove, onMouseLeave, onContextMenu, onDoubleClick, style: style2, className, isDraggable, isSelectable, isConnectable, isFocusable, selectNodesOnDrag, sourcePosition, targetPosition, hidden, resizeObserver, dragHandle, zIndex, isParent, noDragClassName, noPanClassName, initialized, disableKeyboardA11y, ariaLabel, rfId }) => {
    const store = useStoreApi();
    const nodeRef = (0, import_react2.useRef)(null);
    const prevSourcePosition = (0, import_react2.useRef)(sourcePosition);
    const prevTargetPosition = (0, import_react2.useRef)(targetPosition);
    const prevType = (0, import_react2.useRef)(type);
    const hasPointerEvents = isSelectable || isDraggable || onClick || onMouseEnter || onMouseMove || onMouseLeave;
    const updatePositions = useUpdateNodePositions();
    const onMouseEnterHandler = getMouseHandler(id2, store.getState, onMouseEnter);
    const onMouseMoveHandler = getMouseHandler(id2, store.getState, onMouseMove);
    const onMouseLeaveHandler = getMouseHandler(id2, store.getState, onMouseLeave);
    const onContextMenuHandler = getMouseHandler(id2, store.getState, onContextMenu);
    const onDoubleClickHandler = getMouseHandler(id2, store.getState, onDoubleClick);
    const onSelectNodeHandler = (event) => {
      const { nodeDragThreshold } = store.getState();
      if (isSelectable && (!selectNodesOnDrag || !isDraggable || nodeDragThreshold > 0)) {
        handleNodeClick({
          id: id2,
          store,
          nodeRef
        });
      }
      if (onClick) {
        const node = store.getState().nodeInternals.get(id2);
        if (node) {
          onClick(event, { ...node });
        }
      }
    };
    const onKeyDown = (event) => {
      if (isInputDOMNode(event)) {
        return;
      }
      if (elementSelectionKeys.includes(event.key) && isSelectable) {
        const unselect = event.key === "Escape";
        handleNodeClick({
          id: id2,
          store,
          unselect,
          nodeRef
        });
      } else if (!disableKeyboardA11y && isDraggable && selected && Object.prototype.hasOwnProperty.call(arrowKeyDiffs, event.key)) {
        store.setState({
          ariaLiveMessage: `Moved selected node ${event.key.replace("Arrow", "").toLowerCase()}. New position, x: ${~~xPos}, y: ${~~yPos}`
        });
        updatePositions({
          x: arrowKeyDiffs[event.key].x,
          y: arrowKeyDiffs[event.key].y,
          isShiftPressed: event.shiftKey
        });
      }
    };
    (0, import_react2.useEffect)(() => {
      if (nodeRef.current && !hidden) {
        const currNode = nodeRef.current;
        resizeObserver?.observe(currNode);
        return () => resizeObserver?.unobserve(currNode);
      }
    }, [hidden]);
    (0, import_react2.useEffect)(() => {
      const typeChanged = prevType.current !== type;
      const sourcePosChanged = prevSourcePosition.current !== sourcePosition;
      const targetPosChanged = prevTargetPosition.current !== targetPosition;
      if (nodeRef.current && (typeChanged || sourcePosChanged || targetPosChanged)) {
        if (typeChanged) {
          prevType.current = type;
        }
        if (sourcePosChanged) {
          prevSourcePosition.current = sourcePosition;
        }
        if (targetPosChanged) {
          prevTargetPosition.current = targetPosition;
        }
        store.getState().updateNodeDimensions([{ id: id2, nodeElement: nodeRef.current, forceUpdate: true }]);
      }
    }, [id2, type, sourcePosition, targetPosition]);
    const dragging = useDrag({
      nodeRef,
      disabled: hidden || !isDraggable,
      noDragClassName,
      handleSelector: dragHandle,
      nodeId: id2,
      isSelectable,
      selectNodesOnDrag
    });
    if (hidden) {
      return null;
    }
    return import_react2.default.createElement(
      "div",
      { className: cc([
        "react-flow__node",
        `react-flow__node-${type}`,
        {
          // this is overwritable by passing `nopan` as a class name
          [noPanClassName]: isDraggable
        },
        className,
        {
          selected,
          selectable: isSelectable,
          parent: isParent,
          dragging
        }
      ]), ref: nodeRef, style: {
        zIndex,
        transform: `translate(${xPosOrigin}px,${yPosOrigin}px)`,
        pointerEvents: hasPointerEvents ? "all" : "none",
        visibility: initialized ? "visible" : "hidden",
        ...style2
      }, "data-id": id2, "data-testid": `rf__node-${id2}`, onMouseEnter: onMouseEnterHandler, onMouseMove: onMouseMoveHandler, onMouseLeave: onMouseLeaveHandler, onContextMenu: onContextMenuHandler, onClick: onSelectNodeHandler, onDoubleClick: onDoubleClickHandler, onKeyDown: isFocusable ? onKeyDown : void 0, tabIndex: isFocusable ? 0 : void 0, role: isFocusable ? "button" : void 0, "aria-describedby": disableKeyboardA11y ? void 0 : `${ARIA_NODE_DESC_KEY}-${rfId}`, "aria-label": ariaLabel },
      import_react2.default.createElement(
        Provider,
        { value: id2 },
        import_react2.default.createElement(NodeComponent, { id: id2, data, type, xPos, yPos, selected, isConnectable, sourcePosition, targetPosition, dragging, dragHandle, zIndex })
      )
    );
  };
  NodeWrapper.displayName = "NodeWrapper";
  return (0, import_react2.memo)(NodeWrapper);
};
var selector$7 = (s) => {
  const selectedNodes = s.getNodes().filter((n) => n.selected);
  return {
    ...getRectOfNodes(selectedNodes, s.nodeOrigin),
    transformString: `translate(${s.transform[0]}px,${s.transform[1]}px) scale(${s.transform[2]})`,
    userSelectionActive: s.userSelectionActive
  };
};
function NodesSelection({ onSelectionContextMenu, noPanClassName, disableKeyboardA11y }) {
  const store = useStoreApi();
  const { width, height, x: left, y: top, transformString, userSelectionActive } = useStore2(selector$7, shallow$1);
  const updatePositions = useUpdateNodePositions();
  const nodeRef = (0, import_react2.useRef)(null);
  (0, import_react2.useEffect)(() => {
    if (!disableKeyboardA11y) {
      nodeRef.current?.focus({
        preventScroll: true
      });
    }
  }, [disableKeyboardA11y]);
  useDrag({
    nodeRef
  });
  if (userSelectionActive || !width || !height) {
    return null;
  }
  const onContextMenu = onSelectionContextMenu ? (event) => {
    const selectedNodes = store.getState().getNodes().filter((n) => n.selected);
    onSelectionContextMenu(event, selectedNodes);
  } : void 0;
  const onKeyDown = (event) => {
    if (Object.prototype.hasOwnProperty.call(arrowKeyDiffs, event.key)) {
      updatePositions({
        x: arrowKeyDiffs[event.key].x,
        y: arrowKeyDiffs[event.key].y,
        isShiftPressed: event.shiftKey
      });
    }
  };
  return import_react2.default.createElement(
    "div",
    { className: cc(["react-flow__nodesselection", "react-flow__container", noPanClassName]), style: {
      transform: transformString
    } },
    import_react2.default.createElement("div", { ref: nodeRef, className: "react-flow__nodesselection-rect", onContextMenu, tabIndex: disableKeyboardA11y ? void 0 : -1, onKeyDown: disableKeyboardA11y ? void 0 : onKeyDown, style: {
      width,
      height,
      top,
      left
    } })
  );
}
var NodesSelection$1 = (0, import_react2.memo)(NodesSelection);
var selector$6 = (s) => s.nodesSelectionActive;
var FlowRenderer = ({ children: children2, onPaneClick, onPaneMouseEnter, onPaneMouseMove, onPaneMouseLeave, onPaneContextMenu, onPaneScroll, deleteKeyCode, onMove, onMoveStart, onMoveEnd, selectionKeyCode, selectionOnDrag, selectionMode, onSelectionStart, onSelectionEnd, multiSelectionKeyCode, panActivationKeyCode, zoomActivationKeyCode, elementsSelectable, zoomOnScroll, zoomOnPinch, panOnScroll, panOnScrollSpeed, panOnScrollMode, zoomOnDoubleClick, panOnDrag: _panOnDrag, defaultViewport, translateExtent, minZoom, maxZoom, preventScrolling, onSelectionContextMenu, noWheelClassName, noPanClassName, disableKeyboardA11y }) => {
  const nodesSelectionActive = useStore2(selector$6);
  const selectionKeyPressed = useKeyPress(selectionKeyCode);
  const panActivationKeyPressed = useKeyPress(panActivationKeyCode);
  const panOnDrag = panActivationKeyPressed || _panOnDrag;
  const isSelecting = selectionKeyPressed || selectionOnDrag && panOnDrag !== true;
  useGlobalKeyHandler({ deleteKeyCode, multiSelectionKeyCode });
  return import_react2.default.createElement(
    ZoomPane,
    { onMove, onMoveStart, onMoveEnd, onPaneContextMenu, elementsSelectable, zoomOnScroll, zoomOnPinch, panOnScroll, panOnScrollSpeed, panOnScrollMode, zoomOnDoubleClick, panOnDrag: !selectionKeyPressed && panOnDrag, defaultViewport, translateExtent, minZoom, maxZoom, zoomActivationKeyCode, preventScrolling, noWheelClassName, noPanClassName },
    import_react2.default.createElement(
      Pane,
      { onSelectionStart, onSelectionEnd, onPaneClick, onPaneMouseEnter, onPaneMouseMove, onPaneMouseLeave, onPaneContextMenu, onPaneScroll, panOnDrag, isSelecting: !!isSelecting, selectionMode },
      children2,
      nodesSelectionActive && import_react2.default.createElement(NodesSelection$1, { onSelectionContextMenu, noPanClassName, disableKeyboardA11y })
    )
  );
};
FlowRenderer.displayName = "FlowRenderer";
var FlowRenderer$1 = (0, import_react2.memo)(FlowRenderer);
function useVisibleNodes(onlyRenderVisible) {
  const nodes = useStore2((0, import_react2.useCallback)((s) => onlyRenderVisible ? getNodesInside(s.nodeInternals, { x: 0, y: 0, width: s.width, height: s.height }, s.transform, true) : s.getNodes(), [onlyRenderVisible]));
  return nodes;
}
function createNodeTypes(nodeTypes) {
  const standardTypes = {
    input: wrapNode(nodeTypes.input || InputNode$1),
    default: wrapNode(nodeTypes.default || DefaultNode$1),
    output: wrapNode(nodeTypes.output || OutputNode$1),
    group: wrapNode(nodeTypes.group || GroupNode)
  };
  const wrappedTypes = {};
  const specialTypes = Object.keys(nodeTypes).filter((k) => !["input", "default", "output", "group"].includes(k)).reduce((res, key) => {
    res[key] = wrapNode(nodeTypes[key] || DefaultNode$1);
    return res;
  }, wrappedTypes);
  return {
    ...standardTypes,
    ...specialTypes
  };
}
var getPositionWithOrigin = ({ x, y, width, height, origin }) => {
  if (!width || !height) {
    return { x, y };
  }
  if (origin[0] < 0 || origin[1] < 0 || origin[0] > 1 || origin[1] > 1) {
    return { x, y };
  }
  return {
    x: x - width * origin[0],
    y: y - height * origin[1]
  };
};
var selector$5 = (s) => ({
  nodesDraggable: s.nodesDraggable,
  nodesConnectable: s.nodesConnectable,
  nodesFocusable: s.nodesFocusable,
  elementsSelectable: s.elementsSelectable,
  updateNodeDimensions: s.updateNodeDimensions,
  onError: s.onError
});
var NodeRenderer = (props) => {
  const { nodesDraggable, nodesConnectable, nodesFocusable, elementsSelectable, updateNodeDimensions, onError } = useStore2(selector$5, shallow$1);
  const nodes = useVisibleNodes(props.onlyRenderVisibleElements);
  const resizeObserverRef = (0, import_react2.useRef)();
  const resizeObserver = (0, import_react2.useMemo)(() => {
    if (typeof ResizeObserver === "undefined") {
      return null;
    }
    const observer = new ResizeObserver((entries) => {
      const updates = entries.map((entry) => ({
        id: entry.target.getAttribute("data-id"),
        nodeElement: entry.target,
        forceUpdate: true
      }));
      updateNodeDimensions(updates);
    });
    resizeObserverRef.current = observer;
    return observer;
  }, []);
  (0, import_react2.useEffect)(() => {
    return () => {
      resizeObserverRef?.current?.disconnect();
    };
  }, []);
  return import_react2.default.createElement("div", { className: "react-flow__nodes", style: containerStyle }, nodes.map((node) => {
    let nodeType = node.type || "default";
    if (!props.nodeTypes[nodeType]) {
      onError?.("003", errorMessages["error003"](nodeType));
      nodeType = "default";
    }
    const NodeComponent = props.nodeTypes[nodeType] || props.nodeTypes.default;
    const isDraggable = !!(node.draggable || nodesDraggable && typeof node.draggable === "undefined");
    const isSelectable = !!(node.selectable || elementsSelectable && typeof node.selectable === "undefined");
    const isConnectable = !!(node.connectable || nodesConnectable && typeof node.connectable === "undefined");
    const isFocusable = !!(node.focusable || nodesFocusable && typeof node.focusable === "undefined");
    const clampedPosition = props.nodeExtent ? clampPosition(node.positionAbsolute, props.nodeExtent) : node.positionAbsolute;
    const posX = clampedPosition?.x ?? 0;
    const posY = clampedPosition?.y ?? 0;
    const posOrigin = getPositionWithOrigin({
      x: posX,
      y: posY,
      width: node.width ?? 0,
      height: node.height ?? 0,
      origin: props.nodeOrigin
    });
    return import_react2.default.createElement(NodeComponent, { key: node.id, id: node.id, className: node.className, style: node.style, type: nodeType, data: node.data, sourcePosition: node.sourcePosition || Position.Bottom, targetPosition: node.targetPosition || Position.Top, hidden: node.hidden, xPos: posX, yPos: posY, xPosOrigin: posOrigin.x, yPosOrigin: posOrigin.y, selectNodesOnDrag: props.selectNodesOnDrag, onClick: props.onNodeClick, onMouseEnter: props.onNodeMouseEnter, onMouseMove: props.onNodeMouseMove, onMouseLeave: props.onNodeMouseLeave, onContextMenu: props.onNodeContextMenu, onDoubleClick: props.onNodeDoubleClick, selected: !!node.selected, isDraggable, isSelectable, isConnectable, isFocusable, resizeObserver, dragHandle: node.dragHandle, zIndex: node[internalsSymbol]?.z ?? 0, isParent: !!node[internalsSymbol]?.isParent, noDragClassName: props.noDragClassName, noPanClassName: props.noPanClassName, initialized: !!node.width && !!node.height, rfId: props.rfId, disableKeyboardA11y: props.disableKeyboardA11y, ariaLabel: node.ariaLabel });
  }));
};
NodeRenderer.displayName = "NodeRenderer";
var NodeRenderer$1 = (0, import_react2.memo)(NodeRenderer);
var shiftX = (x, shift, position) => {
  if (position === Position.Left)
    return x - shift;
  if (position === Position.Right)
    return x + shift;
  return x;
};
var shiftY = (y, shift, position) => {
  if (position === Position.Top)
    return y - shift;
  if (position === Position.Bottom)
    return y + shift;
  return y;
};
var EdgeUpdaterClassName = "react-flow__edgeupdater";
var EdgeAnchor = ({ position, centerX, centerY, radius = 10, onMouseDown, onMouseEnter, onMouseOut, type }) => import_react2.default.createElement("circle", { onMouseDown, onMouseEnter, onMouseOut, className: cc([EdgeUpdaterClassName, `${EdgeUpdaterClassName}-${type}`]), cx: shiftX(centerX, radius, position), cy: shiftY(centerY, radius, position), r: radius, stroke: "transparent", fill: "transparent" });
var alwaysValidConnection = () => true;
var wrapEdge = (EdgeComponent) => {
  const EdgeWrapper = ({ id: id2, className, type, data, onClick, onEdgeDoubleClick, selected, animated, label, labelStyle, labelShowBg, labelBgStyle, labelBgPadding, labelBgBorderRadius, style: style2, source, target, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, elementsSelectable, hidden, sourceHandleId, targetHandleId, onContextMenu, onMouseEnter, onMouseMove, onMouseLeave, edgeUpdaterRadius, onEdgeUpdate, onEdgeUpdateStart, onEdgeUpdateEnd, markerEnd, markerStart, rfId, ariaLabel, isFocusable, isUpdatable, pathOptions, interactionWidth }) => {
    const edgeRef = (0, import_react2.useRef)(null);
    const [updateHover, setUpdateHover] = (0, import_react2.useState)(false);
    const [updating, setUpdating] = (0, import_react2.useState)(false);
    const store = useStoreApi();
    const markerStartUrl = (0, import_react2.useMemo)(() => `url(#${getMarkerId(markerStart, rfId)})`, [markerStart, rfId]);
    const markerEndUrl = (0, import_react2.useMemo)(() => `url(#${getMarkerId(markerEnd, rfId)})`, [markerEnd, rfId]);
    if (hidden) {
      return null;
    }
    const onEdgeClick = (event) => {
      const { edges, addSelectedEdges, unselectNodesAndEdges, multiSelectionActive } = store.getState();
      const edge = edges.find((e) => e.id === id2);
      if (!edge) {
        return;
      }
      if (elementsSelectable) {
        store.setState({ nodesSelectionActive: false });
        if (edge.selected && multiSelectionActive) {
          unselectNodesAndEdges({ nodes: [], edges: [edge] });
          edgeRef.current?.blur();
        } else {
          addSelectedEdges([id2]);
        }
      }
      if (onClick) {
        onClick(event, edge);
      }
    };
    const onEdgeDoubleClickHandler = getMouseHandler$1(id2, store.getState, onEdgeDoubleClick);
    const onEdgeContextMenu = getMouseHandler$1(id2, store.getState, onContextMenu);
    const onEdgeMouseEnter = getMouseHandler$1(id2, store.getState, onMouseEnter);
    const onEdgeMouseMove = getMouseHandler$1(id2, store.getState, onMouseMove);
    const onEdgeMouseLeave = getMouseHandler$1(id2, store.getState, onMouseLeave);
    const handleEdgeUpdater = (event, isSourceHandle) => {
      if (event.button !== 0) {
        return;
      }
      const { edges, isValidConnection: isValidConnectionStore } = store.getState();
      const nodeId = isSourceHandle ? target : source;
      const handleId = (isSourceHandle ? targetHandleId : sourceHandleId) || null;
      const handleType = isSourceHandle ? "target" : "source";
      const isValidConnection = isValidConnectionStore || alwaysValidConnection;
      const isTarget = isSourceHandle;
      const edge = edges.find((e) => e.id === id2);
      setUpdating(true);
      onEdgeUpdateStart?.(event, edge, handleType);
      const _onEdgeUpdateEnd = (evt) => {
        setUpdating(false);
        onEdgeUpdateEnd?.(evt, edge, handleType);
      };
      const onConnectEdge = (connection) => onEdgeUpdate?.(edge, connection);
      handlePointerDown({
        event,
        handleId,
        nodeId,
        onConnect: onConnectEdge,
        isTarget,
        getState: store.getState,
        setState: store.setState,
        isValidConnection,
        edgeUpdaterType: handleType,
        onEdgeUpdateEnd: _onEdgeUpdateEnd
      });
    };
    const onEdgeUpdaterSourceMouseDown = (event) => handleEdgeUpdater(event, true);
    const onEdgeUpdaterTargetMouseDown = (event) => handleEdgeUpdater(event, false);
    const onEdgeUpdaterMouseEnter = () => setUpdateHover(true);
    const onEdgeUpdaterMouseOut = () => setUpdateHover(false);
    const inactive = !elementsSelectable && !onClick;
    const onKeyDown = (event) => {
      if (elementSelectionKeys.includes(event.key) && elementsSelectable) {
        const { unselectNodesAndEdges, addSelectedEdges, edges } = store.getState();
        const unselect = event.key === "Escape";
        if (unselect) {
          edgeRef.current?.blur();
          unselectNodesAndEdges({ edges: [edges.find((e) => e.id === id2)] });
        } else {
          addSelectedEdges([id2]);
        }
      }
    };
    return import_react2.default.createElement(
      "g",
      { className: cc([
        "react-flow__edge",
        `react-flow__edge-${type}`,
        className,
        { selected, animated, inactive, updating: updateHover }
      ]), onClick: onEdgeClick, onDoubleClick: onEdgeDoubleClickHandler, onContextMenu: onEdgeContextMenu, onMouseEnter: onEdgeMouseEnter, onMouseMove: onEdgeMouseMove, onMouseLeave: onEdgeMouseLeave, onKeyDown: isFocusable ? onKeyDown : void 0, tabIndex: isFocusable ? 0 : void 0, role: isFocusable ? "button" : "img", "data-testid": `rf__edge-${id2}`, "aria-label": ariaLabel === null ? void 0 : ariaLabel ? ariaLabel : `Edge from ${source} to ${target}`, "aria-describedby": isFocusable ? `${ARIA_EDGE_DESC_KEY}-${rfId}` : void 0, ref: edgeRef },
      !updating && import_react2.default.createElement(EdgeComponent, { id: id2, source, target, selected, animated, label, labelStyle, labelShowBg, labelBgStyle, labelBgPadding, labelBgBorderRadius, data, style: style2, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, sourceHandleId, targetHandleId, markerStart: markerStartUrl, markerEnd: markerEndUrl, pathOptions, interactionWidth }),
      isUpdatable && import_react2.default.createElement(
        import_react2.default.Fragment,
        null,
        (isUpdatable === "source" || isUpdatable === true) && import_react2.default.createElement(EdgeAnchor, { position: sourcePosition, centerX: sourceX, centerY: sourceY, radius: edgeUpdaterRadius, onMouseDown: onEdgeUpdaterSourceMouseDown, onMouseEnter: onEdgeUpdaterMouseEnter, onMouseOut: onEdgeUpdaterMouseOut, type: "source" }),
        (isUpdatable === "target" || isUpdatable === true) && import_react2.default.createElement(EdgeAnchor, { position: targetPosition, centerX: targetX, centerY: targetY, radius: edgeUpdaterRadius, onMouseDown: onEdgeUpdaterTargetMouseDown, onMouseEnter: onEdgeUpdaterMouseEnter, onMouseOut: onEdgeUpdaterMouseOut, type: "target" })
      )
    );
  };
  EdgeWrapper.displayName = "EdgeWrapper";
  return (0, import_react2.memo)(EdgeWrapper);
};
function createEdgeTypes(edgeTypes) {
  const standardTypes = {
    default: wrapEdge(edgeTypes.default || BezierEdge),
    straight: wrapEdge(edgeTypes.bezier || StraightEdge),
    step: wrapEdge(edgeTypes.step || StepEdge),
    smoothstep: wrapEdge(edgeTypes.step || SmoothStepEdge),
    simplebezier: wrapEdge(edgeTypes.simplebezier || SimpleBezierEdge)
  };
  const wrappedTypes = {};
  const specialTypes = Object.keys(edgeTypes).filter((k) => !["default", "bezier"].includes(k)).reduce((res, key) => {
    res[key] = wrapEdge(edgeTypes[key] || BezierEdge);
    return res;
  }, wrappedTypes);
  return {
    ...standardTypes,
    ...specialTypes
  };
}
function getHandlePosition(position, nodeRect, handle = null) {
  const x = (handle?.x || 0) + nodeRect.x;
  const y = (handle?.y || 0) + nodeRect.y;
  const width = handle?.width || nodeRect.width;
  const height = handle?.height || nodeRect.height;
  switch (position) {
    case Position.Top:
      return {
        x: x + width / 2,
        y
      };
    case Position.Right:
      return {
        x: x + width,
        y: y + height / 2
      };
    case Position.Bottom:
      return {
        x: x + width / 2,
        y: y + height
      };
    case Position.Left:
      return {
        x,
        y: y + height / 2
      };
  }
}
function getHandle(bounds, handleId) {
  if (!bounds) {
    return null;
  }
  if (bounds.length === 1 || !handleId) {
    return bounds[0];
  } else if (handleId) {
    return bounds.find((d) => d.id === handleId) || null;
  }
  return null;
}
var getEdgePositions = (sourceNodeRect, sourceHandle, sourcePosition, targetNodeRect, targetHandle, targetPosition) => {
  const sourceHandlePos = getHandlePosition(sourcePosition, sourceNodeRect, sourceHandle);
  const targetHandlePos = getHandlePosition(targetPosition, targetNodeRect, targetHandle);
  return {
    sourceX: sourceHandlePos.x,
    sourceY: sourceHandlePos.y,
    targetX: targetHandlePos.x,
    targetY: targetHandlePos.y
  };
};
function isEdgeVisible({ sourcePos, targetPos, sourceWidth, sourceHeight, targetWidth, targetHeight, width, height, transform: transform2 }) {
  const edgeBox = {
    x: Math.min(sourcePos.x, targetPos.x),
    y: Math.min(sourcePos.y, targetPos.y),
    x2: Math.max(sourcePos.x + sourceWidth, targetPos.x + targetWidth),
    y2: Math.max(sourcePos.y + sourceHeight, targetPos.y + targetHeight)
  };
  if (edgeBox.x === edgeBox.x2) {
    edgeBox.x2 += 1;
  }
  if (edgeBox.y === edgeBox.y2) {
    edgeBox.y2 += 1;
  }
  const viewBox = rectToBox({
    x: (0 - transform2[0]) / transform2[2],
    y: (0 - transform2[1]) / transform2[2],
    width: width / transform2[2],
    height: height / transform2[2]
  });
  const xOverlap = Math.max(0, Math.min(viewBox.x2, edgeBox.x2) - Math.max(viewBox.x, edgeBox.x));
  const yOverlap = Math.max(0, Math.min(viewBox.y2, edgeBox.y2) - Math.max(viewBox.y, edgeBox.y));
  const overlappingArea = Math.ceil(xOverlap * yOverlap);
  return overlappingArea > 0;
}
function getNodeData(node) {
  const handleBounds = node?.[internalsSymbol]?.handleBounds || null;
  const isValid = handleBounds && node?.width && node?.height && typeof node?.positionAbsolute?.x !== "undefined" && typeof node?.positionAbsolute?.y !== "undefined";
  return [
    {
      x: node?.positionAbsolute?.x || 0,
      y: node?.positionAbsolute?.y || 0,
      width: node?.width || 0,
      height: node?.height || 0
    },
    handleBounds,
    !!isValid
  ];
}
var defaultEdgeTree = [{ level: 0, isMaxLevel: true, edges: [] }];
function groupEdgesByZLevel(edges, nodeInternals, elevateEdgesOnSelect = false) {
  let maxLevel = -1;
  const levelLookup = edges.reduce((tree, edge) => {
    const hasZIndex = isNumeric(edge.zIndex);
    let z = hasZIndex ? edge.zIndex : 0;
    if (elevateEdgesOnSelect) {
      const targetNode = nodeInternals.get(edge.target);
      const sourceNode = nodeInternals.get(edge.source);
      const edgeOrConnectedNodeSelected = edge.selected || targetNode?.selected || sourceNode?.selected;
      const selectedZIndex = Math.max(sourceNode?.[internalsSymbol]?.z || 0, targetNode?.[internalsSymbol]?.z || 0, 1e3);
      z = (hasZIndex ? edge.zIndex : 0) + (edgeOrConnectedNodeSelected ? selectedZIndex : 0);
    }
    if (tree[z]) {
      tree[z].push(edge);
    } else {
      tree[z] = [edge];
    }
    maxLevel = z > maxLevel ? z : maxLevel;
    return tree;
  }, {});
  const edgeTree = Object.entries(levelLookup).map(([key, edges2]) => {
    const level = +key;
    return {
      edges: edges2,
      level,
      isMaxLevel: level === maxLevel
    };
  });
  if (edgeTree.length === 0) {
    return defaultEdgeTree;
  }
  return edgeTree;
}
function useVisibleEdges(onlyRenderVisible, nodeInternals, elevateEdgesOnSelect) {
  const edges = useStore2((0, import_react2.useCallback)((s) => {
    if (!onlyRenderVisible) {
      return s.edges;
    }
    return s.edges.filter((e) => {
      const sourceNode = nodeInternals.get(e.source);
      const targetNode = nodeInternals.get(e.target);
      return sourceNode?.width && sourceNode?.height && targetNode?.width && targetNode?.height && isEdgeVisible({
        sourcePos: sourceNode.positionAbsolute || { x: 0, y: 0 },
        targetPos: targetNode.positionAbsolute || { x: 0, y: 0 },
        sourceWidth: sourceNode.width,
        sourceHeight: sourceNode.height,
        targetWidth: targetNode.width,
        targetHeight: targetNode.height,
        width: s.width,
        height: s.height,
        transform: s.transform
      });
    });
  }, [onlyRenderVisible, nodeInternals]));
  return groupEdgesByZLevel(edges, nodeInternals, elevateEdgesOnSelect);
}
var ArrowSymbol = ({ color: color2 = "none", strokeWidth = 1 }) => {
  return import_react2.default.createElement("polyline", { style: {
    stroke: color2,
    strokeWidth
  }, strokeLinecap: "round", strokeLinejoin: "round", fill: "none", points: "-5,-4 0,0 -5,4" });
};
var ArrowClosedSymbol = ({ color: color2 = "none", strokeWidth = 1 }) => {
  return import_react2.default.createElement("polyline", { style: {
    stroke: color2,
    fill: color2,
    strokeWidth
  }, strokeLinecap: "round", strokeLinejoin: "round", points: "-5,-4 0,0 -5,4 -5,-4" });
};
var MarkerSymbols = {
  [MarkerType.Arrow]: ArrowSymbol,
  [MarkerType.ArrowClosed]: ArrowClosedSymbol
};
function useMarkerSymbol(type) {
  const store = useStoreApi();
  const symbol = (0, import_react2.useMemo)(() => {
    const symbolExists = Object.prototype.hasOwnProperty.call(MarkerSymbols, type);
    if (!symbolExists) {
      store.getState().onError?.("009", errorMessages["error009"](type));
      return null;
    }
    return MarkerSymbols[type];
  }, [type]);
  return symbol;
}
var Marker = ({ id: id2, type, color: color2, width = 12.5, height = 12.5, markerUnits = "strokeWidth", strokeWidth, orient = "auto-start-reverse" }) => {
  const Symbol2 = useMarkerSymbol(type);
  if (!Symbol2) {
    return null;
  }
  return import_react2.default.createElement(
    "marker",
    { className: "react-flow__arrowhead", id: id2, markerWidth: `${width}`, markerHeight: `${height}`, viewBox: "-10 -10 20 20", markerUnits, orient, refX: "0", refY: "0" },
    import_react2.default.createElement(Symbol2, { color: color2, strokeWidth })
  );
};
var markerSelector = ({ defaultColor, rfId }) => (s) => {
  const ids = [];
  return s.edges.reduce((markers, edge) => {
    [edge.markerStart, edge.markerEnd].forEach((marker) => {
      if (marker && typeof marker === "object") {
        const markerId = getMarkerId(marker, rfId);
        if (!ids.includes(markerId)) {
          markers.push({ id: markerId, color: marker.color || defaultColor, ...marker });
          ids.push(markerId);
        }
      }
    });
    return markers;
  }, []).sort((a, b) => a.id.localeCompare(b.id));
};
var MarkerDefinitions = ({ defaultColor, rfId }) => {
  const markers = useStore2(
    (0, import_react2.useCallback)(markerSelector({ defaultColor, rfId }), [defaultColor, rfId]),
    // the id includes all marker options, so we just need to look at that part of the marker
    (a, b) => !(a.length !== b.length || a.some((m, i) => m.id !== b[i].id))
  );
  return import_react2.default.createElement("defs", null, markers.map((marker) => import_react2.default.createElement(Marker, { id: marker.id, key: marker.id, type: marker.type, color: marker.color, width: marker.width, height: marker.height, markerUnits: marker.markerUnits, strokeWidth: marker.strokeWidth, orient: marker.orient })));
};
MarkerDefinitions.displayName = "MarkerDefinitions";
var MarkerDefinitions$1 = (0, import_react2.memo)(MarkerDefinitions);
var selector$4 = (s) => ({
  nodesConnectable: s.nodesConnectable,
  edgesFocusable: s.edgesFocusable,
  edgesUpdatable: s.edgesUpdatable,
  elementsSelectable: s.elementsSelectable,
  width: s.width,
  height: s.height,
  connectionMode: s.connectionMode,
  nodeInternals: s.nodeInternals,
  onError: s.onError
});
var EdgeRenderer = ({ defaultMarkerColor, onlyRenderVisibleElements, elevateEdgesOnSelect, rfId, edgeTypes, noPanClassName, onEdgeUpdate, onEdgeContextMenu, onEdgeMouseEnter, onEdgeMouseMove, onEdgeMouseLeave, onEdgeClick, edgeUpdaterRadius, onEdgeDoubleClick, onEdgeUpdateStart, onEdgeUpdateEnd, children: children2 }) => {
  const { edgesFocusable, edgesUpdatable, elementsSelectable, width, height, connectionMode, nodeInternals, onError } = useStore2(selector$4, shallow$1);
  const edgeTree = useVisibleEdges(onlyRenderVisibleElements, nodeInternals, elevateEdgesOnSelect);
  if (!width) {
    return null;
  }
  return import_react2.default.createElement(
    import_react2.default.Fragment,
    null,
    edgeTree.map(({ level, edges, isMaxLevel }) => import_react2.default.createElement(
      "svg",
      { key: level, style: { zIndex: level }, width, height, className: "react-flow__edges react-flow__container" },
      isMaxLevel && import_react2.default.createElement(MarkerDefinitions$1, { defaultColor: defaultMarkerColor, rfId }),
      import_react2.default.createElement("g", null, edges.map((edge) => {
        const [sourceNodeRect, sourceHandleBounds, sourceIsValid] = getNodeData(nodeInternals.get(edge.source));
        const [targetNodeRect, targetHandleBounds, targetIsValid] = getNodeData(nodeInternals.get(edge.target));
        if (!sourceIsValid || !targetIsValid) {
          return null;
        }
        let edgeType = edge.type || "default";
        if (!edgeTypes[edgeType]) {
          onError?.("011", errorMessages["error011"](edgeType));
          edgeType = "default";
        }
        const EdgeComponent = edgeTypes[edgeType] || edgeTypes.default;
        const targetNodeHandles = connectionMode === ConnectionMode.Strict ? targetHandleBounds.target : (targetHandleBounds.target ?? []).concat(targetHandleBounds.source ?? []);
        const sourceHandle = getHandle(sourceHandleBounds.source, edge.sourceHandle);
        const targetHandle = getHandle(targetNodeHandles, edge.targetHandle);
        const sourcePosition = sourceHandle?.position || Position.Bottom;
        const targetPosition = targetHandle?.position || Position.Top;
        const isFocusable = !!(edge.focusable || edgesFocusable && typeof edge.focusable === "undefined");
        const isUpdatable = typeof onEdgeUpdate !== "undefined" && (edge.updatable || edgesUpdatable && typeof edge.updatable === "undefined");
        if (!sourceHandle || !targetHandle) {
          onError?.("008", errorMessages["error008"](sourceHandle, edge));
          return null;
        }
        const { sourceX, sourceY, targetX, targetY } = getEdgePositions(sourceNodeRect, sourceHandle, sourcePosition, targetNodeRect, targetHandle, targetPosition);
        return import_react2.default.createElement(EdgeComponent, { key: edge.id, id: edge.id, className: cc([edge.className, noPanClassName]), type: edgeType, data: edge.data, selected: !!edge.selected, animated: !!edge.animated, hidden: !!edge.hidden, label: edge.label, labelStyle: edge.labelStyle, labelShowBg: edge.labelShowBg, labelBgStyle: edge.labelBgStyle, labelBgPadding: edge.labelBgPadding, labelBgBorderRadius: edge.labelBgBorderRadius, style: edge.style, source: edge.source, target: edge.target, sourceHandleId: edge.sourceHandle, targetHandleId: edge.targetHandle, markerEnd: edge.markerEnd, markerStart: edge.markerStart, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, elementsSelectable, onEdgeUpdate, onContextMenu: onEdgeContextMenu, onMouseEnter: onEdgeMouseEnter, onMouseMove: onEdgeMouseMove, onMouseLeave: onEdgeMouseLeave, onClick: onEdgeClick, edgeUpdaterRadius, onEdgeDoubleClick, onEdgeUpdateStart, onEdgeUpdateEnd, rfId, ariaLabel: edge.ariaLabel, isFocusable, isUpdatable, pathOptions: "pathOptions" in edge ? edge.pathOptions : void 0, interactionWidth: edge.interactionWidth });
      }))
    )),
    children2
  );
};
EdgeRenderer.displayName = "EdgeRenderer";
var EdgeRenderer$1 = (0, import_react2.memo)(EdgeRenderer);
var selector$3 = (s) => `translate(${s.transform[0]}px,${s.transform[1]}px) scale(${s.transform[2]})`;
function Viewport({ children: children2 }) {
  const transform2 = useStore2(selector$3);
  return import_react2.default.createElement("div", { className: "react-flow__viewport react-flow__container", style: { transform: transform2 } }, children2);
}
function useOnInitHandler(onInit) {
  const rfInstance = useReactFlow();
  const isInitialized = (0, import_react2.useRef)(false);
  (0, import_react2.useEffect)(() => {
    if (!isInitialized.current && rfInstance.viewportInitialized && onInit) {
      setTimeout(() => onInit(rfInstance), 1);
      isInitialized.current = true;
    }
  }, [onInit, rfInstance.viewportInitialized]);
}
var oppositePosition = {
  [Position.Left]: Position.Right,
  [Position.Right]: Position.Left,
  [Position.Top]: Position.Bottom,
  [Position.Bottom]: Position.Top
};
var ConnectionLine = ({ nodeId, handleType, style: style2, type = ConnectionLineType.Bezier, CustomComponent, connectionStatus }) => {
  const { fromNode, handleId, toX, toY, connectionMode } = useStore2((0, import_react2.useCallback)((s) => ({
    fromNode: s.nodeInternals.get(nodeId),
    handleId: s.connectionHandleId,
    toX: (s.connectionPosition.x - s.transform[0]) / s.transform[2],
    toY: (s.connectionPosition.y - s.transform[1]) / s.transform[2],
    connectionMode: s.connectionMode
  }), [nodeId]), shallow$1);
  const fromHandleBounds = fromNode?.[internalsSymbol]?.handleBounds;
  let handleBounds = fromHandleBounds?.[handleType];
  if (connectionMode === ConnectionMode.Loose) {
    handleBounds = handleBounds ? handleBounds : fromHandleBounds?.[handleType === "source" ? "target" : "source"];
  }
  if (!fromNode || !handleBounds) {
    return null;
  }
  const fromHandle = handleId ? handleBounds.find((d) => d.id === handleId) : handleBounds[0];
  const fromHandleX = fromHandle ? fromHandle.x + fromHandle.width / 2 : (fromNode.width ?? 0) / 2;
  const fromHandleY = fromHandle ? fromHandle.y + fromHandle.height / 2 : fromNode.height ?? 0;
  const fromX = (fromNode.positionAbsolute?.x ?? 0) + fromHandleX;
  const fromY = (fromNode.positionAbsolute?.y ?? 0) + fromHandleY;
  const fromPosition = fromHandle?.position;
  const toPosition = fromPosition ? oppositePosition[fromPosition] : null;
  if (!fromPosition || !toPosition) {
    return null;
  }
  if (CustomComponent) {
    return import_react2.default.createElement(CustomComponent, { connectionLineType: type, connectionLineStyle: style2, fromNode, fromHandle, fromX, fromY, toX, toY, fromPosition, toPosition, connectionStatus });
  }
  let dAttr = "";
  const pathParams = {
    sourceX: fromX,
    sourceY: fromY,
    sourcePosition: fromPosition,
    targetX: toX,
    targetY: toY,
    targetPosition: toPosition
  };
  if (type === ConnectionLineType.Bezier) {
    [dAttr] = getBezierPath(pathParams);
  } else if (type === ConnectionLineType.Step) {
    [dAttr] = getSmoothStepPath({
      ...pathParams,
      borderRadius: 0
    });
  } else if (type === ConnectionLineType.SmoothStep) {
    [dAttr] = getSmoothStepPath(pathParams);
  } else if (type === ConnectionLineType.SimpleBezier) {
    [dAttr] = getSimpleBezierPath(pathParams);
  } else {
    dAttr = `M${fromX},${fromY} ${toX},${toY}`;
  }
  return import_react2.default.createElement("path", { d: dAttr, fill: "none", className: "react-flow__connection-path", style: style2 });
};
ConnectionLine.displayName = "ConnectionLine";
var selector$2 = (s) => ({
  nodeId: s.connectionNodeId,
  handleType: s.connectionHandleType,
  nodesConnectable: s.nodesConnectable,
  connectionStatus: s.connectionStatus,
  width: s.width,
  height: s.height
});
function ConnectionLineWrapper({ containerStyle: containerStyle2, style: style2, type, component }) {
  const { nodeId, handleType, nodesConnectable, width, height, connectionStatus } = useStore2(selector$2, shallow$1);
  const isValid = !!(nodeId && handleType && width && nodesConnectable);
  if (!isValid) {
    return null;
  }
  return import_react2.default.createElement(
    "svg",
    { style: containerStyle2, width, height, className: "react-flow__edges react-flow__connectionline react-flow__container" },
    import_react2.default.createElement(
      "g",
      { className: cc(["react-flow__connection", connectionStatus]) },
      import_react2.default.createElement(ConnectionLine, { nodeId, handleType, style: style2, type, CustomComponent: component, connectionStatus })
    )
  );
}
function useNodeOrEdgeTypes(nodeOrEdgeTypes, createTypes) {
  const typesKeysRef = (0, import_react2.useRef)(null);
  const store = useStoreApi();
  const typesParsed = (0, import_react2.useMemo)(() => {
    if (true) {
      const typeKeys = Object.keys(nodeOrEdgeTypes);
      if (shallow$1(typesKeysRef.current, typeKeys)) {
        store.getState().onError?.("002", errorMessages["error002"]());
      }
      typesKeysRef.current = typeKeys;
    }
    return createTypes(nodeOrEdgeTypes);
  }, [nodeOrEdgeTypes]);
  return typesParsed;
}
var GraphView = ({ nodeTypes, edgeTypes, onMove, onMoveStart, onMoveEnd, onInit, onNodeClick, onEdgeClick, onNodeDoubleClick, onEdgeDoubleClick, onNodeMouseEnter, onNodeMouseMove, onNodeMouseLeave, onNodeContextMenu, onSelectionContextMenu, onSelectionStart, onSelectionEnd, connectionLineType, connectionLineStyle, connectionLineComponent, connectionLineContainerStyle, selectionKeyCode, selectionOnDrag, selectionMode, multiSelectionKeyCode, panActivationKeyCode, zoomActivationKeyCode, deleteKeyCode, onlyRenderVisibleElements, elementsSelectable, selectNodesOnDrag, defaultViewport, translateExtent, minZoom, maxZoom, preventScrolling, defaultMarkerColor, zoomOnScroll, zoomOnPinch, panOnScroll, panOnScrollSpeed, panOnScrollMode, zoomOnDoubleClick, panOnDrag, onPaneClick, onPaneMouseEnter, onPaneMouseMove, onPaneMouseLeave, onPaneScroll, onPaneContextMenu, onEdgeUpdate, onEdgeContextMenu, onEdgeMouseEnter, onEdgeMouseMove, onEdgeMouseLeave, edgeUpdaterRadius, onEdgeUpdateStart, onEdgeUpdateEnd, noDragClassName, noWheelClassName, noPanClassName, elevateEdgesOnSelect, disableKeyboardA11y, nodeOrigin, nodeExtent, rfId }) => {
  const nodeTypesWrapped = useNodeOrEdgeTypes(nodeTypes, createNodeTypes);
  const edgeTypesWrapped = useNodeOrEdgeTypes(edgeTypes, createEdgeTypes);
  useOnInitHandler(onInit);
  return import_react2.default.createElement(
    FlowRenderer$1,
    { onPaneClick, onPaneMouseEnter, onPaneMouseMove, onPaneMouseLeave, onPaneContextMenu, onPaneScroll, deleteKeyCode, selectionKeyCode, selectionOnDrag, selectionMode, onSelectionStart, onSelectionEnd, multiSelectionKeyCode, panActivationKeyCode, zoomActivationKeyCode, elementsSelectable, onMove, onMoveStart, onMoveEnd, zoomOnScroll, zoomOnPinch, zoomOnDoubleClick, panOnScroll, panOnScrollSpeed, panOnScrollMode, panOnDrag, defaultViewport, translateExtent, minZoom, maxZoom, onSelectionContextMenu, preventScrolling, noDragClassName, noWheelClassName, noPanClassName, disableKeyboardA11y },
    import_react2.default.createElement(
      Viewport,
      null,
      import_react2.default.createElement(
        EdgeRenderer$1,
        { edgeTypes: edgeTypesWrapped, onEdgeClick, onEdgeDoubleClick, onEdgeUpdate, onlyRenderVisibleElements, onEdgeContextMenu, onEdgeMouseEnter, onEdgeMouseMove, onEdgeMouseLeave, onEdgeUpdateStart, onEdgeUpdateEnd, edgeUpdaterRadius, defaultMarkerColor, noPanClassName, elevateEdgesOnSelect: !!elevateEdgesOnSelect, disableKeyboardA11y, rfId },
        import_react2.default.createElement(ConnectionLineWrapper, { style: connectionLineStyle, type: connectionLineType, component: connectionLineComponent, containerStyle: connectionLineContainerStyle })
      ),
      import_react2.default.createElement("div", { className: "react-flow__edgelabel-renderer" }),
      import_react2.default.createElement(NodeRenderer$1, { nodeTypes: nodeTypesWrapped, onNodeClick, onNodeDoubleClick, onNodeMouseEnter, onNodeMouseMove, onNodeMouseLeave, onNodeContextMenu, selectNodesOnDrag, onlyRenderVisibleElements, noPanClassName, noDragClassName, disableKeyboardA11y, nodeOrigin, nodeExtent, rfId })
    )
  );
};
GraphView.displayName = "GraphView";
var GraphView$1 = (0, import_react2.memo)(GraphView);
var infiniteExtent = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
];
var initialState = {
  rfId: "1",
  width: 0,
  height: 0,
  transform: [0, 0, 1],
  nodeInternals: /* @__PURE__ */ new Map(),
  edges: [],
  onNodesChange: null,
  onEdgesChange: null,
  hasDefaultNodes: false,
  hasDefaultEdges: false,
  d3Zoom: null,
  d3Selection: null,
  d3ZoomHandler: void 0,
  minZoom: 0.5,
  maxZoom: 2,
  translateExtent: infiniteExtent,
  nodeExtent: infiniteExtent,
  nodesSelectionActive: false,
  userSelectionActive: false,
  userSelectionRect: null,
  connectionNodeId: null,
  connectionHandleId: null,
  connectionHandleType: "source",
  connectionPosition: { x: 0, y: 0 },
  connectionStatus: null,
  connectionMode: ConnectionMode.Strict,
  domNode: null,
  paneDragging: false,
  noPanClassName: "nopan",
  nodeOrigin: [0, 0],
  nodeDragThreshold: 0,
  snapGrid: [15, 15],
  snapToGrid: false,
  nodesDraggable: true,
  nodesConnectable: true,
  nodesFocusable: true,
  edgesFocusable: true,
  edgesUpdatable: true,
  elementsSelectable: true,
  elevateNodesOnSelect: true,
  fitViewOnInit: false,
  fitViewOnInitDone: false,
  fitViewOnInitOptions: void 0,
  multiSelectionActive: false,
  connectionStartHandle: null,
  connectionEndHandle: null,
  connectionClickStartHandle: null,
  connectOnClick: true,
  ariaLiveMessage: "",
  autoPanOnConnect: true,
  autoPanOnNodeDrag: true,
  connectionRadius: 20,
  onError: devWarn,
  isValidConnection: void 0
};
var createRFStore = () => createWithEqualityFn((set3, get3) => ({
  ...initialState,
  setNodes: (nodes) => {
    const { nodeInternals, nodeOrigin, elevateNodesOnSelect } = get3();
    set3({ nodeInternals: createNodeInternals(nodes, nodeInternals, nodeOrigin, elevateNodesOnSelect) });
  },
  getNodes: () => {
    return Array.from(get3().nodeInternals.values());
  },
  setEdges: (edges) => {
    const { defaultEdgeOptions = {} } = get3();
    set3({ edges: edges.map((e) => ({ ...defaultEdgeOptions, ...e })) });
  },
  setDefaultNodesAndEdges: (nodes, edges) => {
    const hasDefaultNodes = typeof nodes !== "undefined";
    const hasDefaultEdges = typeof edges !== "undefined";
    const nodeInternals = hasDefaultNodes ? createNodeInternals(nodes, /* @__PURE__ */ new Map(), get3().nodeOrigin, get3().elevateNodesOnSelect) : /* @__PURE__ */ new Map();
    const nextEdges = hasDefaultEdges ? edges : [];
    set3({ nodeInternals, edges: nextEdges, hasDefaultNodes, hasDefaultEdges });
  },
  updateNodeDimensions: (updates) => {
    const { onNodesChange, nodeInternals, fitViewOnInit, fitViewOnInitDone, fitViewOnInitOptions, domNode, nodeOrigin } = get3();
    const viewportNode = domNode?.querySelector(".react-flow__viewport");
    if (!viewportNode) {
      return;
    }
    const style2 = window.getComputedStyle(viewportNode);
    const { m22: zoom } = new window.DOMMatrixReadOnly(style2.transform);
    const changes = updates.reduce((res, update) => {
      const node = nodeInternals.get(update.id);
      if (node) {
        const dimensions = getDimensions(update.nodeElement);
        const doUpdate = !!(dimensions.width && dimensions.height && (node.width !== dimensions.width || node.height !== dimensions.height || update.forceUpdate));
        if (doUpdate) {
          nodeInternals.set(node.id, {
            ...node,
            [internalsSymbol]: {
              ...node[internalsSymbol],
              handleBounds: {
                source: getHandleBounds(".source", update.nodeElement, zoom, nodeOrigin),
                target: getHandleBounds(".target", update.nodeElement, zoom, nodeOrigin)
              }
            },
            ...dimensions
          });
          res.push({
            id: node.id,
            type: "dimensions",
            dimensions
          });
        }
      }
      return res;
    }, []);
    updateAbsoluteNodePositions(nodeInternals, nodeOrigin);
    const nextFitViewOnInitDone = fitViewOnInitDone || fitViewOnInit && !fitViewOnInitDone && fitView(get3, { initial: true, ...fitViewOnInitOptions });
    set3({ nodeInternals: new Map(nodeInternals), fitViewOnInitDone: nextFitViewOnInitDone });
    if (changes?.length > 0) {
      onNodesChange?.(changes);
    }
  },
  updateNodePositions: (nodeDragItems, positionChanged = true, dragging = false) => {
    const { triggerNodeChanges } = get3();
    const changes = nodeDragItems.map((node) => {
      const change = {
        id: node.id,
        type: "position",
        dragging
      };
      if (positionChanged) {
        change.positionAbsolute = node.positionAbsolute;
        change.position = node.position;
      }
      return change;
    });
    triggerNodeChanges(changes);
  },
  triggerNodeChanges: (changes) => {
    const { onNodesChange, nodeInternals, hasDefaultNodes, nodeOrigin, getNodes, elevateNodesOnSelect } = get3();
    if (changes?.length) {
      if (hasDefaultNodes) {
        const nodes = applyNodeChanges(changes, getNodes());
        const nextNodeInternals = createNodeInternals(nodes, nodeInternals, nodeOrigin, elevateNodesOnSelect);
        set3({ nodeInternals: nextNodeInternals });
      }
      onNodesChange?.(changes);
    }
  },
  addSelectedNodes: (selectedNodeIds) => {
    const { multiSelectionActive, edges, getNodes } = get3();
    let changedNodes;
    let changedEdges = null;
    if (multiSelectionActive) {
      changedNodes = selectedNodeIds.map((nodeId) => createSelectionChange(nodeId, true));
    } else {
      changedNodes = getSelectionChanges(getNodes(), selectedNodeIds);
      changedEdges = getSelectionChanges(edges, []);
    }
    updateNodesAndEdgesSelections({
      changedNodes,
      changedEdges,
      get: get3,
      set: set3
    });
  },
  addSelectedEdges: (selectedEdgeIds) => {
    const { multiSelectionActive, edges, getNodes } = get3();
    let changedEdges;
    let changedNodes = null;
    if (multiSelectionActive) {
      changedEdges = selectedEdgeIds.map((edgeId) => createSelectionChange(edgeId, true));
    } else {
      changedEdges = getSelectionChanges(edges, selectedEdgeIds);
      changedNodes = getSelectionChanges(getNodes(), []);
    }
    updateNodesAndEdgesSelections({
      changedNodes,
      changedEdges,
      get: get3,
      set: set3
    });
  },
  unselectNodesAndEdges: ({ nodes, edges } = {}) => {
    const { edges: storeEdges, getNodes } = get3();
    const nodesToUnselect = nodes ? nodes : getNodes();
    const edgesToUnselect = edges ? edges : storeEdges;
    const changedNodes = nodesToUnselect.map((n) => {
      n.selected = false;
      return createSelectionChange(n.id, false);
    });
    const changedEdges = edgesToUnselect.map((edge) => createSelectionChange(edge.id, false));
    updateNodesAndEdgesSelections({
      changedNodes,
      changedEdges,
      get: get3,
      set: set3
    });
  },
  setMinZoom: (minZoom) => {
    const { d3Zoom, maxZoom } = get3();
    d3Zoom?.scaleExtent([minZoom, maxZoom]);
    set3({ minZoom });
  },
  setMaxZoom: (maxZoom) => {
    const { d3Zoom, minZoom } = get3();
    d3Zoom?.scaleExtent([minZoom, maxZoom]);
    set3({ maxZoom });
  },
  setTranslateExtent: (translateExtent) => {
    get3().d3Zoom?.translateExtent(translateExtent);
    set3({ translateExtent });
  },
  resetSelectedElements: () => {
    const { edges, getNodes } = get3();
    const nodes = getNodes();
    const nodesToUnselect = nodes.filter((e) => e.selected).map((n) => createSelectionChange(n.id, false));
    const edgesToUnselect = edges.filter((e) => e.selected).map((e) => createSelectionChange(e.id, false));
    updateNodesAndEdgesSelections({
      changedNodes: nodesToUnselect,
      changedEdges: edgesToUnselect,
      get: get3,
      set: set3
    });
  },
  setNodeExtent: (nodeExtent) => {
    const { nodeInternals } = get3();
    nodeInternals.forEach((node) => {
      node.positionAbsolute = clampPosition(node.position, nodeExtent);
    });
    set3({
      nodeExtent,
      nodeInternals: new Map(nodeInternals)
    });
  },
  panBy: (delta) => {
    const { transform: transform2, width, height, d3Zoom, d3Selection, translateExtent } = get3();
    if (!d3Zoom || !d3Selection || !delta.x && !delta.y) {
      return false;
    }
    const nextTransform = identity2.translate(transform2[0] + delta.x, transform2[1] + delta.y).scale(transform2[2]);
    const extent = [
      [0, 0],
      [width, height]
    ];
    const constrainedTransform = d3Zoom?.constrain()(nextTransform, extent, translateExtent);
    d3Zoom.transform(d3Selection, constrainedTransform);
    const transformChanged = transform2[0] !== constrainedTransform.x || transform2[1] !== constrainedTransform.y || transform2[2] !== constrainedTransform.k;
    return transformChanged;
  },
  cancelConnection: () => set3({
    connectionNodeId: initialState.connectionNodeId,
    connectionHandleId: initialState.connectionHandleId,
    connectionHandleType: initialState.connectionHandleType,
    connectionStatus: initialState.connectionStatus,
    connectionStartHandle: initialState.connectionStartHandle,
    connectionEndHandle: initialState.connectionEndHandle
  }),
  reset: () => set3({ ...initialState })
}), Object.is);
var ReactFlowProvider = ({ children: children2 }) => {
  const storeRef = (0, import_react2.useRef)(null);
  if (!storeRef.current) {
    storeRef.current = createRFStore();
  }
  return import_react2.default.createElement(Provider$1, { value: storeRef.current }, children2);
};
ReactFlowProvider.displayName = "ReactFlowProvider";
var Wrapper = ({ children: children2 }) => {
  const isWrapped = (0, import_react2.useContext)(StoreContext);
  if (isWrapped) {
    return import_react2.default.createElement(import_react2.default.Fragment, null, children2);
  }
  return import_react2.default.createElement(ReactFlowProvider, null, children2);
};
Wrapper.displayName = "ReactFlowWrapper";
var defaultNodeTypes = {
  input: InputNode$1,
  default: DefaultNode$1,
  output: OutputNode$1,
  group: GroupNode
};
var defaultEdgeTypes = {
  default: BezierEdge,
  straight: StraightEdge,
  step: StepEdge,
  smoothstep: SmoothStepEdge,
  simplebezier: SimpleBezierEdge
};
var initNodeOrigin = [0, 0];
var initSnapGrid = [15, 15];
var initDefaultViewport = { x: 0, y: 0, zoom: 1 };
var wrapperStyle = {
  width: "100%",
  height: "100%",
  overflow: "hidden",
  position: "relative",
  zIndex: 0
};
var ReactFlow = (0, import_react2.forwardRef)(({ nodes, edges, defaultNodes, defaultEdges, className, nodeTypes = defaultNodeTypes, edgeTypes = defaultEdgeTypes, onNodeClick, onEdgeClick, onInit, onMove, onMoveStart, onMoveEnd, onConnect, onConnectStart, onConnectEnd, onClickConnectStart, onClickConnectEnd, onNodeMouseEnter, onNodeMouseMove, onNodeMouseLeave, onNodeContextMenu, onNodeDoubleClick, onNodeDragStart, onNodeDrag, onNodeDragStop, onNodesDelete, onEdgesDelete, onSelectionChange, onSelectionDragStart, onSelectionDrag, onSelectionDragStop, onSelectionContextMenu, onSelectionStart, onSelectionEnd, connectionMode = ConnectionMode.Strict, connectionLineType = ConnectionLineType.Bezier, connectionLineStyle, connectionLineComponent, connectionLineContainerStyle, deleteKeyCode = "Backspace", selectionKeyCode = "Shift", selectionOnDrag = false, selectionMode = SelectionMode.Full, panActivationKeyCode = "Space", multiSelectionKeyCode = isMacOs() ? "Meta" : "Control", zoomActivationKeyCode = isMacOs() ? "Meta" : "Control", snapToGrid = false, snapGrid = initSnapGrid, onlyRenderVisibleElements = false, selectNodesOnDrag = true, nodesDraggable, nodesConnectable, nodesFocusable, nodeOrigin = initNodeOrigin, edgesFocusable, edgesUpdatable, elementsSelectable, defaultViewport = initDefaultViewport, minZoom = 0.5, maxZoom = 2, translateExtent = infiniteExtent, preventScrolling = true, nodeExtent, defaultMarkerColor = "#b1b1b7", zoomOnScroll = true, zoomOnPinch = true, panOnScroll = false, panOnScrollSpeed = 0.5, panOnScrollMode = PanOnScrollMode.Free, zoomOnDoubleClick = true, panOnDrag = true, onPaneClick, onPaneMouseEnter, onPaneMouseMove, onPaneMouseLeave, onPaneScroll, onPaneContextMenu, children: children2, onEdgeUpdate, onEdgeContextMenu, onEdgeDoubleClick, onEdgeMouseEnter, onEdgeMouseMove, onEdgeMouseLeave, onEdgeUpdateStart, onEdgeUpdateEnd, edgeUpdaterRadius = 10, onNodesChange, onEdgesChange, noDragClassName = "nodrag", noWheelClassName = "nowheel", noPanClassName = "nopan", fitView: fitView2 = false, fitViewOptions, connectOnClick = true, attributionPosition, proOptions, defaultEdgeOptions, elevateNodesOnSelect = true, elevateEdgesOnSelect = false, disableKeyboardA11y = false, autoPanOnConnect = true, autoPanOnNodeDrag = true, connectionRadius = 20, isValidConnection, onError, style: style2, id: id2, nodeDragThreshold, ...rest }, ref) => {
  const rfId = id2 || "1";
  return import_react2.default.createElement(
    "div",
    { ...rest, style: { ...style2, ...wrapperStyle }, ref, className: cc(["react-flow", className]), "data-testid": "rf__wrapper", id: id2 },
    import_react2.default.createElement(
      Wrapper,
      null,
      import_react2.default.createElement(GraphView$1, { onInit, onMove, onMoveStart, onMoveEnd, onNodeClick, onEdgeClick, onNodeMouseEnter, onNodeMouseMove, onNodeMouseLeave, onNodeContextMenu, onNodeDoubleClick, nodeTypes, edgeTypes, connectionLineType, connectionLineStyle, connectionLineComponent, connectionLineContainerStyle, selectionKeyCode, selectionOnDrag, selectionMode, deleteKeyCode, multiSelectionKeyCode, panActivationKeyCode, zoomActivationKeyCode, onlyRenderVisibleElements, selectNodesOnDrag, defaultViewport, translateExtent, minZoom, maxZoom, preventScrolling, zoomOnScroll, zoomOnPinch, zoomOnDoubleClick, panOnScroll, panOnScrollSpeed, panOnScrollMode, panOnDrag, onPaneClick, onPaneMouseEnter, onPaneMouseMove, onPaneMouseLeave, onPaneScroll, onPaneContextMenu, onSelectionContextMenu, onSelectionStart, onSelectionEnd, onEdgeUpdate, onEdgeContextMenu, onEdgeDoubleClick, onEdgeMouseEnter, onEdgeMouseMove, onEdgeMouseLeave, onEdgeUpdateStart, onEdgeUpdateEnd, edgeUpdaterRadius, defaultMarkerColor, noDragClassName, noWheelClassName, noPanClassName, elevateEdgesOnSelect, rfId, disableKeyboardA11y, nodeOrigin, nodeExtent }),
      import_react2.default.createElement(StoreUpdater, { nodes, edges, defaultNodes, defaultEdges, onConnect, onConnectStart, onConnectEnd, onClickConnectStart, onClickConnectEnd, nodesDraggable, nodesConnectable, nodesFocusable, edgesFocusable, edgesUpdatable, elementsSelectable, elevateNodesOnSelect, minZoom, maxZoom, nodeExtent, onNodesChange, onEdgesChange, snapToGrid, snapGrid, connectionMode, translateExtent, connectOnClick, defaultEdgeOptions, fitView: fitView2, fitViewOptions, onNodesDelete, onEdgesDelete, onNodeDragStart, onNodeDrag, onNodeDragStop, onSelectionDrag, onSelectionDragStart, onSelectionDragStop, noPanClassName, nodeOrigin, rfId, autoPanOnConnect, autoPanOnNodeDrag, onError, connectionRadius, isValidConnection, nodeDragThreshold }),
      import_react2.default.createElement(Wrapper$1, { onSelectionChange }),
      children2,
      import_react2.default.createElement(Attribution, { proOptions, position: attributionPosition }),
      import_react2.default.createElement(A11yDescriptions, { rfId, disableKeyboardA11y })
    )
  );
});
ReactFlow.displayName = "ReactFlow";
var selector$1 = (s) => s.domNode?.querySelector(".react-flow__edgelabel-renderer");
function EdgeLabelRenderer({ children: children2 }) {
  const edgeLabelRenderer = useStore2(selector$1);
  if (!edgeLabelRenderer) {
    return null;
  }
  return (0, import_react_dom.createPortal)(children2, edgeLabelRenderer);
}
function createUseItemsState(applyChanges2) {
  return (initialItems) => {
    const [items, setItems] = (0, import_react2.useState)(initialItems);
    const onItemsChange = (0, import_react2.useCallback)((changes) => setItems((items2) => applyChanges2(changes, items2)), []);
    return [items, setItems, onItemsChange];
  };
}
var useNodesState = createUseItemsState(applyNodeChanges);
var useEdgesState = createUseItemsState(applyEdgeChanges);

// node_modules/@reactflow/node-toolbar/dist/esm/index.mjs
var import_react3 = __toESM(require_react(), 1);
var import_react_dom2 = __toESM(require_react_dom(), 1);

// node_modules/d3-hierarchy/src/hierarchy/count.js
function count(node) {
  var sum = 0, children2 = node.children, i = children2 && children2.length;
  if (!i)
    sum = 1;
  else
    while (--i >= 0)
      sum += children2[i].value;
  node.value = sum;
}
function count_default() {
  return this.eachAfter(count);
}

// node_modules/d3-hierarchy/src/hierarchy/each.js
function each_default2(callback, that) {
  let index = -1;
  for (const node of this) {
    callback.call(that, node, ++index, this);
  }
  return this;
}

// node_modules/d3-hierarchy/src/hierarchy/eachBefore.js
function eachBefore_default(callback, that) {
  var node = this, nodes = [node], children2, i, index = -1;
  while (node = nodes.pop()) {
    callback.call(that, node, ++index, this);
    if (children2 = node.children) {
      for (i = children2.length - 1; i >= 0; --i) {
        nodes.push(children2[i]);
      }
    }
  }
  return this;
}

// node_modules/d3-hierarchy/src/hierarchy/eachAfter.js
function eachAfter_default(callback, that) {
  var node = this, nodes = [node], next = [], children2, i, n, index = -1;
  while (node = nodes.pop()) {
    next.push(node);
    if (children2 = node.children) {
      for (i = 0, n = children2.length; i < n; ++i) {
        nodes.push(children2[i]);
      }
    }
  }
  while (node = next.pop()) {
    callback.call(that, node, ++index, this);
  }
  return this;
}

// node_modules/d3-hierarchy/src/hierarchy/find.js
function find_default(callback, that) {
  let index = -1;
  for (const node of this) {
    if (callback.call(that, node, ++index, this)) {
      return node;
    }
  }
}

// node_modules/d3-hierarchy/src/hierarchy/sum.js
function sum_default(value) {
  return this.eachAfter(function(node) {
    var sum = +value(node.data) || 0, children2 = node.children, i = children2 && children2.length;
    while (--i >= 0)
      sum += children2[i].value;
    node.value = sum;
  });
}

// node_modules/d3-hierarchy/src/hierarchy/sort.js
function sort_default2(compare) {
  return this.eachBefore(function(node) {
    if (node.children) {
      node.children.sort(compare);
    }
  });
}

// node_modules/d3-hierarchy/src/hierarchy/path.js
function path_default(end) {
  var start2 = this, ancestor = leastCommonAncestor(start2, end), nodes = [start2];
  while (start2 !== ancestor) {
    start2 = start2.parent;
    nodes.push(start2);
  }
  var k = nodes.length;
  while (end !== ancestor) {
    nodes.splice(k, 0, end);
    end = end.parent;
  }
  return nodes;
}
function leastCommonAncestor(a, b) {
  if (a === b)
    return a;
  var aNodes = a.ancestors(), bNodes = b.ancestors(), c = null;
  a = aNodes.pop();
  b = bNodes.pop();
  while (a === b) {
    c = a;
    a = aNodes.pop();
    b = bNodes.pop();
  }
  return c;
}

// node_modules/d3-hierarchy/src/hierarchy/ancestors.js
function ancestors_default() {
  var node = this, nodes = [node];
  while (node = node.parent) {
    nodes.push(node);
  }
  return nodes;
}

// node_modules/d3-hierarchy/src/hierarchy/descendants.js
function descendants_default() {
  return Array.from(this);
}

// node_modules/d3-hierarchy/src/hierarchy/leaves.js
function leaves_default() {
  var leaves = [];
  this.eachBefore(function(node) {
    if (!node.children) {
      leaves.push(node);
    }
  });
  return leaves;
}

// node_modules/d3-hierarchy/src/hierarchy/links.js
function links_default() {
  var root2 = this, links = [];
  root2.each(function(node) {
    if (node !== root2) {
      links.push({ source: node.parent, target: node });
    }
  });
  return links;
}

// node_modules/d3-hierarchy/src/hierarchy/iterator.js
function* iterator_default2() {
  var node = this, current, next = [node], children2, i, n;
  do {
    current = next.reverse(), next = [];
    while (node = current.pop()) {
      yield node;
      if (children2 = node.children) {
        for (i = 0, n = children2.length; i < n; ++i) {
          next.push(children2[i]);
        }
      }
    }
  } while (next.length);
}

// node_modules/d3-hierarchy/src/hierarchy/index.js
function hierarchy(data, children2) {
  if (data instanceof Map) {
    data = [void 0, data];
    if (children2 === void 0)
      children2 = mapChildren;
  } else if (children2 === void 0) {
    children2 = objectChildren;
  }
  var root2 = new Node(data), node, nodes = [root2], child, childs, i, n;
  while (node = nodes.pop()) {
    if ((childs = children2(node.data)) && (n = (childs = Array.from(childs)).length)) {
      node.children = childs;
      for (i = n - 1; i >= 0; --i) {
        nodes.push(child = childs[i] = new Node(childs[i]));
        child.parent = node;
        child.depth = node.depth + 1;
      }
    }
  }
  return root2.eachBefore(computeHeight);
}
function node_copy() {
  return hierarchy(this).eachBefore(copyData);
}
function objectChildren(d) {
  return d.children;
}
function mapChildren(d) {
  return Array.isArray(d) ? d[1] : null;
}
function copyData(node) {
  if (node.data.value !== void 0)
    node.value = node.data.value;
  node.data = node.data.data;
}
function computeHeight(node) {
  var height = 0;
  do
    node.height = height;
  while ((node = node.parent) && node.height < ++height);
}
function Node(data) {
  this.data = data;
  this.depth = this.height = 0;
  this.parent = null;
}
Node.prototype = hierarchy.prototype = {
  constructor: Node,
  count: count_default,
  each: each_default2,
  eachAfter: eachAfter_default,
  eachBefore: eachBefore_default,
  find: find_default,
  sum: sum_default,
  sort: sort_default2,
  path: path_default,
  ancestors: ancestors_default,
  descendants: descendants_default,
  leaves: leaves_default,
  links: links_default,
  copy: node_copy,
  [Symbol.iterator]: iterator_default2
};

// node_modules/d3-hierarchy/src/accessors.js
function optional(f) {
  return f == null ? null : required(f);
}
function required(f) {
  if (typeof f !== "function")
    throw new Error();
  return f;
}

// node_modules/d3-hierarchy/src/stratify.js
var preroot = { depth: -1 };
var ambiguous = {};
var imputed = {};
function defaultId(d) {
  return d.id;
}
function defaultParentId(d) {
  return d.parentId;
}
function stratify_default() {
  var id2 = defaultId, parentId = defaultParentId, path;
  function stratify(data) {
    var nodes = Array.from(data), currentId = id2, currentParentId = parentId, n, d, i, root2, parent, node, nodeId, nodeKey, nodeByKey = /* @__PURE__ */ new Map();
    if (path != null) {
      const I = nodes.map((d2, i2) => normalize(path(d2, i2, data)));
      const P = I.map(parentof);
      const S = new Set(I).add("");
      for (const i2 of P) {
        if (!S.has(i2)) {
          S.add(i2);
          I.push(i2);
          P.push(parentof(i2));
          nodes.push(imputed);
        }
      }
      currentId = (_, i2) => I[i2];
      currentParentId = (_, i2) => P[i2];
    }
    for (i = 0, n = nodes.length; i < n; ++i) {
      d = nodes[i], node = nodes[i] = new Node(d);
      if ((nodeId = currentId(d, i, data)) != null && (nodeId += "")) {
        nodeKey = node.id = nodeId;
        nodeByKey.set(nodeKey, nodeByKey.has(nodeKey) ? ambiguous : node);
      }
      if ((nodeId = currentParentId(d, i, data)) != null && (nodeId += "")) {
        node.parent = nodeId;
      }
    }
    for (i = 0; i < n; ++i) {
      node = nodes[i];
      if (nodeId = node.parent) {
        parent = nodeByKey.get(nodeId);
        if (!parent)
          throw new Error("missing: " + nodeId);
        if (parent === ambiguous)
          throw new Error("ambiguous: " + nodeId);
        if (parent.children)
          parent.children.push(node);
        else
          parent.children = [node];
        node.parent = parent;
      } else {
        if (root2)
          throw new Error("multiple roots");
        root2 = node;
      }
    }
    if (!root2)
      throw new Error("no root");
    if (path != null) {
      while (root2.data === imputed && root2.children.length === 1) {
        root2 = root2.children[0], --n;
      }
      for (let i2 = nodes.length - 1; i2 >= 0; --i2) {
        node = nodes[i2];
        if (node.data !== imputed)
          break;
        node.data = null;
      }
    }
    root2.parent = preroot;
    root2.eachBefore(function(node2) {
      node2.depth = node2.parent.depth + 1;
      --n;
    }).eachBefore(computeHeight);
    root2.parent = null;
    if (n > 0)
      throw new Error("cycle");
    return root2;
  }
  stratify.id = function(x) {
    return arguments.length ? (id2 = optional(x), stratify) : id2;
  };
  stratify.parentId = function(x) {
    return arguments.length ? (parentId = optional(x), stratify) : parentId;
  };
  stratify.path = function(x) {
    return arguments.length ? (path = optional(x), stratify) : path;
  };
  return stratify;
}
function normalize(path) {
  path = `${path}`;
  let i = path.length;
  if (slash(path, i - 1) && !slash(path, i - 2))
    path = path.slice(0, -1);
  return path[0] === "/" ? path : `/${path}`;
}
function parentof(path) {
  let i = path.length;
  if (i < 2)
    return "";
  while (--i > 1)
    if (slash(path, i))
      break;
  return path.slice(0, i);
}
function slash(path, i) {
  if (path[i] === "/") {
    let k = 0;
    while (i > 0 && path[--i] === "\\")
      ++k;
    if ((k & 1) === 0)
      return true;
  }
  return false;
}

// node_modules/d3-hierarchy/src/tree.js
function defaultSeparation(a, b) {
  return a.parent === b.parent ? 1 : 2;
}
function nextLeft(v) {
  var children2 = v.children;
  return children2 ? children2[0] : v.t;
}
function nextRight(v) {
  var children2 = v.children;
  return children2 ? children2[children2.length - 1] : v.t;
}
function moveSubtree(wm, wp, shift) {
  var change = shift / (wp.i - wm.i);
  wp.c -= change;
  wp.s += shift;
  wm.c += change;
  wp.z += shift;
  wp.m += shift;
}
function executeShifts(v) {
  var shift = 0, change = 0, children2 = v.children, i = children2.length, w;
  while (--i >= 0) {
    w = children2[i];
    w.z += shift;
    w.m += shift;
    shift += w.s + (change += w.c);
  }
}
function nextAncestor(vim, v, ancestor) {
  return vim.a.parent === v.parent ? vim.a : ancestor;
}
function TreeNode(node, i) {
  this._ = node;
  this.parent = null;
  this.children = null;
  this.A = null;
  this.a = this;
  this.z = 0;
  this.m = 0;
  this.c = 0;
  this.s = 0;
  this.t = null;
  this.i = i;
}
TreeNode.prototype = Object.create(Node.prototype);
function treeRoot(root2) {
  var tree = new TreeNode(root2, 0), node, nodes = [tree], child, children2, i, n;
  while (node = nodes.pop()) {
    if (children2 = node._.children) {
      node.children = new Array(n = children2.length);
      for (i = n - 1; i >= 0; --i) {
        nodes.push(child = node.children[i] = new TreeNode(children2[i], i));
        child.parent = node;
      }
    }
  }
  (tree.parent = new TreeNode(null, 0)).children = [tree];
  return tree;
}
function tree_default() {
  var separation = defaultSeparation, dx = 1, dy = 1, nodeSize = null;
  function tree(root2) {
    var t = treeRoot(root2);
    t.eachAfter(firstWalk), t.parent.m = -t.z;
    t.eachBefore(secondWalk);
    if (nodeSize)
      root2.eachBefore(sizeNode);
    else {
      var left = root2, right = root2, bottom = root2;
      root2.eachBefore(function(node) {
        if (node.x < left.x)
          left = node;
        if (node.x > right.x)
          right = node;
        if (node.depth > bottom.depth)
          bottom = node;
      });
      var s = left === right ? 1 : separation(left, right) / 2, tx = s - left.x, kx = dx / (right.x + s + tx), ky = dy / (bottom.depth || 1);
      root2.eachBefore(function(node) {
        node.x = (node.x + tx) * kx;
        node.y = node.depth * ky;
      });
    }
    return root2;
  }
  function firstWalk(v) {
    var children2 = v.children, siblings = v.parent.children, w = v.i ? siblings[v.i - 1] : null;
    if (children2) {
      executeShifts(v);
      var midpoint = (children2[0].z + children2[children2.length - 1].z) / 2;
      if (w) {
        v.z = w.z + separation(v._, w._);
        v.m = v.z - midpoint;
      } else {
        v.z = midpoint;
      }
    } else if (w) {
      v.z = w.z + separation(v._, w._);
    }
    v.parent.A = apportion(v, w, v.parent.A || siblings[0]);
  }
  function secondWalk(v) {
    v._.x = v.z + v.parent.m;
    v.m += v.parent.m;
  }
  function apportion(v, w, ancestor) {
    if (w) {
      var vip = v, vop = v, vim = w, vom = vip.parent.children[0], sip = vip.m, sop = vop.m, sim = vim.m, som = vom.m, shift;
      while (vim = nextRight(vim), vip = nextLeft(vip), vim && vip) {
        vom = nextLeft(vom);
        vop = nextRight(vop);
        vop.a = v;
        shift = vim.z + sim - vip.z - sip + separation(vim._, vip._);
        if (shift > 0) {
          moveSubtree(nextAncestor(vim, v, ancestor), v, shift);
          sip += shift;
          sop += shift;
        }
        sim += vim.m;
        sip += vip.m;
        som += vom.m;
        sop += vop.m;
      }
      if (vim && !nextRight(vop)) {
        vop.t = vim;
        vop.m += sim - sop;
      }
      if (vip && !nextLeft(vom)) {
        vom.t = vip;
        vom.m += sip - som;
        ancestor = v;
      }
    }
    return ancestor;
  }
  function sizeNode(node) {
    node.x *= dx;
    node.y = node.depth * dy;
  }
  tree.separation = function(x) {
    return arguments.length ? (separation = x, tree) : separation;
  };
  tree.size = function(x) {
    return arguments.length ? (nodeSize = false, dx = +x[0], dy = +x[1], tree) : nodeSize ? null : [dx, dy];
  };
  tree.nodeSize = function(x) {
    return arguments.length ? (nodeSize = true, dx = +x[0], dy = +x[1], tree) : nodeSize ? [dx, dy] : null;
  };
  return tree;
}

// js/workflow-diagram/constants.ts
var FIT_DURATION = 180;
var FIT_PADDING = 0.3;
var NODE_WIDTH = 180;
var NODE_HEIGHT = 40;

// js/workflow-diagram/layout.ts
var layout = tree_default().nodeSize([200, 200]).separation(() => 2);
var calculateLayout = async (model2, update, flow, duration = 500) => {
  const { nodes, edges } = model2;
  const hierarchy2 = stratify_default().id((d) => d.id).parentId((d) => edges.find((e) => e.target === d.id)?.source)(nodes);
  const root2 = layout(hierarchy2);
  const newNodes = root2.descendants().map((d) => ({
    ...d.data,
    position: { x: d.x, y: d.y },
    // Ensure nodes have a width/height so that we can later do a fit to bounds
    width: NODE_WIDTH,
    height: NODE_HEIGHT
  }));
  const newModel = { nodes: newNodes, edges };
  const finalPositions = newNodes.reduce((obj, next) => {
    obj[next.id] = next.position;
    return obj;
  }, {});
  const hasOldPositions = nodes.find((n) => n.position);
  if (hasOldPositions && duration) {
    await animate(model2, newModel, update, flow, duration);
  } else {
    update(newModel);
  }
  return finalPositions;
};
var layout_default = calculateLayout;
var animate = (from, to, setModel, flowInstance, duration = 500) => {
  return new Promise((resolve) => {
    const transitions = to.nodes.map((node) => {
      let animateFrom = from.nodes.find(({ id: id2 }) => id2 === node.id);
      if (!animateFrom || !animateFrom.position) {
        const edge = from.edges.find(({ target }) => target === node.id);
        animateFrom = from.nodes.find(({ id: id2 }) => id2 === edge.source);
      }
      return {
        id: node.id,
        from: animateFrom.position || { x: 0, y: 0 },
        to: node.position,
        node
      };
    });
    let isFirst = true;
    const t = timer((elapsed) => {
      const s = elapsed / duration;
      const currNodes = transitions.map(({ node, from: from2, to: to2 }) => ({
        ...node,
        position: {
          // simple linear interpolation
          x: from2.x + (to2.x - from2.x) * s,
          y: from2.y + (to2.y - from2.y) * s
        }
      }));
      setModel({ edges: to.edges, nodes: currNodes });
      if (isFirst) {
        const bounds = getRectOfNodes(to.nodes);
        flowInstance.fitBounds(bounds, { duration, padding: FIT_PADDING });
        isFirst = false;
      }
      if (elapsed > duration) {
        const finalNodes = transitions.map(({ node, to: to2 }) => ({
          ...node,
          position: {
            x: to2.x,
            y: to2.y
          }
        }));
        setModel({ edges: to.edges, nodes: finalNodes });
        t.stop();
        resolve();
      }
    });
  });
};

// js/workflow-diagram/nodes/Trigger.tsx
var import_react7 = __toESM(require_react());

// js/workflow-diagram/components/trigger-icons.tsx
var import_react4 = __toESM(require_react());
var lockClosedIcon = /* @__PURE__ */ import_react4.default.createElement("svg", { width: "38", height: "38", viewBox: "0 0 38 38", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, /* @__PURE__ */ import_react4.default.createElement("g", { filter: "url(#filter0_dd_365_7433)" }, /* @__PURE__ */ import_react4.default.createElement("circle", { cx: "19", cy: "15", r: "14", fill: "white" }), /* @__PURE__ */ import_react4.default.createElement("circle", { cx: "19", cy: "15", r: "13.5", stroke: "white" })), /* @__PURE__ */ import_react4.default.createElement("circle", { cx: "19", cy: "15", r: "10.5", fill: "white", stroke: "#71757E" }), /* @__PURE__ */ import_react4.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.2858 9.6875C17.767 9.6875 16.5358 10.7648 16.5358 12.0938V13.4688C15.6679 13.4688 14.9644 14.0844 14.9644 14.8438V17.9375C14.9644 18.6969 15.6679 19.3125 16.5358 19.3125H22.0358C22.9037 19.3125 23.6072 18.6969 23.6072 17.9375V14.8438C23.6072 14.0844 22.9037 13.4688 22.0358 13.4688V12.0938C22.0358 10.7648 20.8046 9.6875 19.2858 9.6875ZM21.2501 13.4688V12.0938C21.2501 11.1445 20.3706 10.375 19.2858 10.375C18.2009 10.375 17.3215 11.1445 17.3215 12.0938V13.4688H21.2501Z", fill: "#71757E" }), /* @__PURE__ */ import_react4.default.createElement("defs", null, /* @__PURE__ */ import_react4.default.createElement("filter", { id: "filter0_dd_365_7433", x: "0", y: "0", width: "38", height: "38", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" }, /* @__PURE__ */ import_react4.default.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }), /* @__PURE__ */ import_react4.default.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }), /* @__PURE__ */ import_react4.default.createElement("feMorphology", { radius: "1", operator: "erode", in: "SourceAlpha", result: "effect1_dropShadow_365_7433" }), /* @__PURE__ */ import_react4.default.createElement("feOffset", { dy: "4" }), /* @__PURE__ */ import_react4.default.createElement("feGaussianBlur", { stdDeviation: "3" }), /* @__PURE__ */ import_react4.default.createElement("feComposite", { in2: "hardAlpha", operator: "out" }), /* @__PURE__ */ import_react4.default.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" }), /* @__PURE__ */ import_react4.default.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow_365_7433" }), /* @__PURE__ */ import_react4.default.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }), /* @__PURE__ */ import_react4.default.createElement("feMorphology", { radius: "1", operator: "erode", in: "SourceAlpha", result: "effect2_dropShadow_365_7433" }), /* @__PURE__ */ import_react4.default.createElement("feOffset", { dy: "2" }), /* @__PURE__ */ import_react4.default.createElement("feGaussianBlur", { stdDeviation: "2" }), /* @__PURE__ */ import_react4.default.createElement("feComposite", { in2: "hardAlpha", operator: "out" }), /* @__PURE__ */ import_react4.default.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" }), /* @__PURE__ */ import_react4.default.createElement("feBlend", { mode: "normal", in2: "effect1_dropShadow_365_7433", result: "effect2_dropShadow_365_7433" }), /* @__PURE__ */ import_react4.default.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect2_dropShadow_365_7433", result: "shape" }))));

// js/workflow-diagram/nodes/Trigger.tsx
var import_cronstrue = __toESM(require_cronstrue());

// js/workflow-diagram/nodes/Node.tsx
var import_react6 = __toESM(require_react());

// js/workflow-diagram/components/Shape.tsx
var import_react5 = __toESM(require_react());
var Circle = ({ width, height, styles, strokeWidth }) => /* @__PURE__ */ import_react5.default.createElement(
  "ellipse",
  {
    cx: strokeWidth + width / 2,
    cy: strokeWidth + height / 2,
    rx: width / 2,
    ry: height / 2,
    strokeWidth,
    ...styles
  }
);
var Rect = ({ width, height, styles, strokeWidth }) => /* @__PURE__ */ import_react5.default.createElement(
  "rect",
  {
    x: strokeWidth,
    y: strokeWidth,
    rx: 16,
    width,
    height,
    strokeWidth,
    ...styles
  }
);
var Shape = ({ shape, width, height, strokeWidth, styles }) => {
  if (shape === "circle") {
    return /* @__PURE__ */ import_react5.default.createElement(
      Circle,
      {
        width,
        height,
        styles,
        strokeWidth
      }
    );
  } else {
    return /* @__PURE__ */ import_react5.default.createElement(
      Rect,
      {
        width,
        height,
        styles,
        strokeWidth
      }
    );
  }
};
var Shape_default = Shape;

// js/workflow-diagram/styles.ts
var EDGE_COLOR = "#b1b1b7";
var EDGE_COLOR_DISABLED = "#E1E1E1";
var EDGE_COLOR_SELECTED = "#4f46e5";
var EDGE_COLOR_SELECTED_DISABLED = "#bdbaf3";
var ERROR_COLOR = "#ef4444";
var labelStyles = (selected, data) => {
  const { condition_type, enabled } = data;
  const primaryColor = (selected2, enabled2) => {
    if (enabled2)
      return selected2 ? EDGE_COLOR_SELECTED : EDGE_COLOR;
    return selected2 ? EDGE_COLOR_SELECTED_DISABLED : EDGE_COLOR_DISABLED;
  };
  const backgroundColor = enabled ? "white" : "#F6F6F6";
  if (condition_type === "js_expression") {
    return {
      padding: "0 4px",
      height: "32px",
      border: `solid 2px ${primaryColor(selected, enabled)}`,
      borderRadius: 4,
      display: "inline-block",
      fontSize: 14,
      lineHeight: "26px",
      textAlign: "center",
      fontWeight: 500,
      color: primaryColor(selected, enabled),
      backgroundColor
    };
  } else {
    return {
      width: "32px",
      height: "32px",
      border: `solid 2px ${primaryColor(selected, enabled)}`,
      borderRadius: 16,
      fontSize: 18,
      textAlign: "center",
      fontWeight: 700,
      color: primaryColor(selected, enabled),
      backgroundColor
    };
  }
};
var styleItem = (item) => {
  let edge = item;
  if (edge.target && edge.source) {
    return styleEdge(edge);
  }
  return styleNode(item);
};
var styleNode = (node) => {
  const { data } = node;
  if (data?.enabled == false) {
    node.style = {
      opacity: 0.5
    };
  }
  return node;
};
var styleEdge = (edge) => {
  edge.style = {
    strokeWidth: "2",
    stroke: edge.selected ? EDGE_COLOR_SELECTED : EDGE_COLOR
  };
  if (edge.data?.placeholder) {
    edge.style.strokeDasharray = "4, 4";
    edge.style.strokeWidth = "1.5px";
  }
  if (!edge.data?.enabled) {
    edge.style.strokeDasharray = "4, 4";
    edge.style.strokeWidth = "1.5px";
    edge.style.opacity = 0.5;
  }
  if (edge.markerEnd) {
    edge.markerEnd = {
      ...edge.markerEnd,
      width: 15,
      color: edge.selected ? EDGE_COLOR_SELECTED : EDGE_COLOR
    };
  }
  return edge;
};
var nodeIconStyles = (selected, hasErrors2) => {
  const size = 100;
  const primaryColor = selected ? EDGE_COLOR_SELECTED : EDGE_COLOR;
  return {
    width: size,
    height: size,
    anchorx: size / 2,
    strokeWidth: 2,
    style: {
      stroke: hasErrors2 ? ERROR_COLOR : primaryColor,
      fill: "white"
    }
  };
};
var nodeLabelStyles = (selected) => {
  const primaryColor = selected ? EDGE_COLOR_SELECTED : EDGE_COLOR;
  return {
    color: primaryColor,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  };
};
var sortOrderForSvg = (a, b) => {
  if (a.data.enabled > b.data.enabled) {
    return 1;
  }
  if (a.data.enabled < b.data.enabled) {
    return -1;
  }
  return a.selected - b.selected;
};

// js/workflow-diagram/nodes/Node.tsx
function errorsMessage(errors) {
  const messages = Object.entries(errors).map(([key, errorArray]) => {
    return `${key} ${errorArray.join(", ")}`;
  });
  return messages.join(", ");
}
var hasErrors = (errors) => {
  if (!errors)
    return false;
  return Object.values(errors).some((errorArray) => errorArray.length > 0);
};
var Label = ({ children: children2, hasErrors: hasErrors2 = false }) => {
  const textColorClass = hasErrors2 ? "text-red-500" : "";
  if (children2 && children2.length) {
    return /* @__PURE__ */ import_react6.default.createElement(
      "p",
      {
        className: `line-clamp-2 align-left text-m max-w-[275px] text-ellipsis overflow-hidden ${textColorClass}`
      },
      children2
    );
  }
  return null;
};
var ErrorMessage = ({ message }) => {
  if (message && message.length) {
    return /* @__PURE__ */ import_react6.default.createElement("p", { className: "line-clamp-2 align-left text-xs text-red-500 flex items-center" }, /* @__PURE__ */ import_react6.default.createElement(ExclamationCircleIcon_default, { className: "mr-1 w-5" }), message);
  }
  return null;
};
var SubLabel = ({ children: children2 }) => {
  if (children2 && children2.length) {
    return /* @__PURE__ */ import_react6.default.createElement("p", { className: "line-clamp-2 align-left text-sm text-slate-500" }, children2);
  }
  return null;
};
var Node3 = ({
  // standard  react flow stuff
  isConnectable,
  selected,
  targetPosition,
  sourcePosition,
  // custom stuff
  toolbar,
  shape,
  label,
  // main label which appears to the right
  sublabel,
  // A smaller label to the right
  primaryIcon,
  // displayed inside the SVG shape
  secondaryIcon,
  errors
}) => {
  const { width, height, anchorx, strokeWidth, style: style2 } = nodeIconStyles(
    selected,
    hasErrors(errors)
  );
  return /* @__PURE__ */ import_react6.default.createElement("div", { className: "group" }, /* @__PURE__ */ import_react6.default.createElement("div", { className: "flex flex-row cursor-pointer" }, /* @__PURE__ */ import_react6.default.createElement("div", null, targetPosition && /* @__PURE__ */ import_react6.default.createElement(
    Handle$1,
    {
      type: "target",
      isConnectable,
      position: targetPosition,
      style: {
        visibility: "hidden",
        height: 0,
        top: 0,
        left: strokeWidth + anchorx
      }
    }
  ), /* @__PURE__ */ import_react6.default.createElement("svg", { style: { maxWidth: "110px", maxHeight: "110px" } }, /* @__PURE__ */ import_react6.default.createElement(
    Shape_default,
    {
      shape,
      width,
      height,
      strokeWidth,
      styles: style2
    }
  )), primaryIcon && /* @__PURE__ */ import_react6.default.createElement(
    "div",
    {
      style: {
        position: "absolute",
        // Position is half of the difference of the actual width, offset for stroke
        left: 0.175 * width + strokeWidth,
        top: 0.175 * height + strokeWidth,
        height: `${0.65 * height}px`,
        width: `${0.65 * width}px`,
        ...nodeLabelStyles(selected)
      }
    },
    typeof primaryIcon === "string" ? /* @__PURE__ */ import_react6.default.createElement(
      "div",
      {
        className: "font-bold",
        style: {
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        }
      },
      primaryIcon
    ) : primaryIcon
  ), secondaryIcon && /* @__PURE__ */ import_react6.default.createElement(
    "div",
    {
      style: {
        position: "absolute",
        left: "2%",
        // You can adjust these values for precise positioning
        top: "2%",
        height: `${0.3 * height}px`,
        // Adjusting size for secondary icon
        width: `${0.3 * width}px`,
        ...nodeLabelStyles(selected)
      }
    },
    typeof secondaryIcon === "string" ? /* @__PURE__ */ import_react6.default.createElement(
      "div",
      {
        className: "font-bold",
        style: {
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        }
      },
      secondaryIcon
    ) : secondaryIcon
  )), sourcePosition && /* @__PURE__ */ import_react6.default.createElement(
    Handle$1,
    {
      type: "source",
      isConnectable,
      position: sourcePosition,
      style: {
        visibility: "hidden",
        height: 0,
        top: height,
        left: strokeWidth + anchorx
      }
    }
  ), /* @__PURE__ */ import_react6.default.createElement("div", { className: "flex flex-col flex-1 justify-center ml-2" }, /* @__PURE__ */ import_react6.default.createElement(Label, { hasErrors: hasErrors(errors) }, label), hasErrors(errors) && /* @__PURE__ */ import_react6.default.createElement(
    ErrorMessage,
    {
      message: errorsMessage(errors) || "An error occurred"
    }
  ), /* @__PURE__ */ import_react6.default.createElement(SubLabel, null, sublabel))), toolbar && /* @__PURE__ */ import_react6.default.createElement(
    "div",
    {
      style: {
        width: `${width}px`,
        marginLeft: "2px",
        marginTop: "-14px"
      },
      className: "flex flex-col items-center\n                    opacity-0  group-hover:opacity-100\n                    transition duration-150 ease-in-out"
    },
    toolbar()
  ));
};
Node3.displayName = "Node";
var Node_default = (0, import_react6.memo)(Node3);

// js/workflow-diagram/nodes/Trigger.tsx
var TriggerNode = ({
  sourcePosition = Position.Bottom,
  ...props
}) => {
  const { label, sublabel, tooltip, primaryIcon, secondaryIcon } = getTriggerMeta(
    props.data
  );
  return /* @__PURE__ */ import_react7.default.createElement(
    Node_default,
    {
      ...props,
      shape: "circle",
      label,
      sublabel,
      tooltip,
      primaryIcon,
      secondaryIcon,
      sourcePosition,
      interactive: props.data.trigger.type === "webhook",
      toolbar: false
    }
  );
};
TriggerNode.displayName = "TriggerWorkflowNode";
var Trigger_default = (0, import_react7.memo)(TriggerNode);
function getTriggerMeta(trigger) {
  switch (trigger.type) {
    case "webhook":
      return {
        label: "Webhook trigger",
        sublabel: `On each request received`,
        tooltip: "Click to copy webhook URL",
        primaryIcon: /* @__PURE__ */ import_react7.default.createElement(GlobeAltIcon_default, null),
        secondaryIcon: trigger.has_auth_method ? lockClosedIcon : null
      };
    case "cron":
      try {
        return {
          label: "Cron trigger",
          sublabel: import_cronstrue.default.toString(trigger.cron_expression),
          primaryIcon: /* @__PURE__ */ import_react7.default.createElement(ClockIcon_default, null),
          secondaryIcon: null
        };
      } catch (_error) {
      }
  }
  return { label: "", sublabel: "" };
}

// js/workflow-diagram/nodes/Job.tsx
var import_react10 = __toESM(require_react());

// js/workflow-diagram/components/PlusButton.tsx
var import_react8 = __toESM(require_react());
function PlusButton() {
  return /* @__PURE__ */ import_react8.default.createElement(
    "button",
    {
      name: "add-node",
      className: "transition duration-150 ease-in-out pointer-events-auto rounded-full\n               bg-indigo-600 py-1 px-4 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500"
    },
    /* @__PURE__ */ import_react8.default.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        className: "w-4 h-4"
      },
      /* @__PURE__ */ import_react8.default.createElement(
        "path",
        {
          fillRule: "evenodd",
          d: "M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z",
          clipRule: "evenodd"
        }
      )
    )
  );
}
var PlusButton_default = PlusButton;

// js/workflow-diagram/util/get-adaptor-name.ts
var get_adaptor_name_default = (specifier) => {
  if (specifier) {
    const [prefix, name] = specifier.match(/@openfn.language-(.+)@/);
    return name || "unknown";
  }
  return "";
};

// js/workflow-diagram/useAdaptorIcons.ts
var import_react9 = __toESM(require_react());
var deffered;
var useAdaptorIcons = () => {
  const [data, setData] = (0, import_react9.useState)({});
  (0, import_react9.useEffect)(() => {
    if (!deffered) {
      deffered = fetch("/images/adaptors/adaptor_icons.json").then((response) => response.json()).catch((err) => {
        console.error("Error fetching Adaptor Icons manifest:", err);
      });
    }
    deffered.then((d) => {
      setData(d);
    });
  }, []);
  return data;
};
var useAdaptorIcons_default = useAdaptorIcons;

// js/workflow-diagram/nodes/Job.tsx
var JobNode = ({
  targetPosition = Position.Top,
  sourcePosition = Position.Bottom,
  ...props
}) => {
  const toolbar = () => props.data?.allowPlaceholder && /* @__PURE__ */ import_react10.default.createElement(PlusButton_default, null);
  const adaptorIconsData = useAdaptorIcons_default();
  const adaptor = get_adaptor_name_default(props.data?.adaptor);
  const icon = getAdaptorIcon(adaptor, adaptorIconsData);
  return /* @__PURE__ */ import_react10.default.createElement(
    Node_default,
    {
      ...props,
      label: props.data?.name,
      primaryIcon: icon,
      sublabel: adaptor,
      targetPosition,
      sourcePosition,
      allowSource: true,
      toolbar,
      errors: props.data?.errors
    }
  );
};
JobNode.displayName = "JobNode";
function getAdaptorIcon(adaptor, adaptorIconsData) {
  try {
    if (adaptorIconsData && adaptor in adaptorIconsData && adaptorIconsData[adaptor]?.square) {
      const srcPath = adaptorIconsData[adaptor].square;
      return /* @__PURE__ */ import_react10.default.createElement("img", { src: srcPath, alt: adaptor });
    } else {
      return adaptor;
    }
  } catch (e) {
    return adaptor;
  }
}
var Job_default = (0, import_react10.memo)(JobNode);

// js/workflow-diagram/nodes/PlaceholderJob.tsx
var import_react11 = __toESM(require_react());
var iconBaseStyle = "mx-1";
var iconNormalStyle = iconBaseStyle + " text-primary-500 hover:text-primary-900";
var iconErrorStyle = iconBaseStyle + " text-red-500 hover:text-red-600";
var dispatch2 = (el, eventName, data) => {
  const e = new CustomEvent(eventName, {
    bubbles: true,
    detail: data
  });
  el.dispatchEvent(e);
};
var PlaceholderJobNode = ({ id: id2, selected }) => {
  const textRef = (0, import_react11.useRef)();
  const [validationResult, setValidationResult] = (0, import_react11.useState)({
    isValid: true,
    message: ""
  });
  const handleKeyDown = (evt) => {
    if (evt.code === "Escape") {
      handleCancel();
      return;
    }
    if (evt.target.value.trim() === "") {
      setValidationResult({
        isValid: false,
        message: "Name cannot be empty."
      });
      return;
    }
    if (evt.code === "Enter") {
      validationResult.isValid && handleCommit();
    }
  };
  const handleChange = (evt) => {
    setValidationResult(validateName(evt.target.value));
  };
  const validateName = (name) => {
    if (name.length > 100) {
      return {
        isValid: false,
        message: "Name should not exceed 100 characters."
      };
    }
    const regex = /^[a-zA-Z0-9_\- ]*$/;
    if (!regex.test(name)) {
      return {
        isValid: false,
        message: "Name can only contain alphanumeric characters, underscores, dashes, and spaces."
      };
    }
    return {
      isValid: true,
      message: "Valid name."
    };
  };
  const handleCommit = (0, import_react11.useCallback)(
    (evt) => {
      if (textRef.current) {
        dispatch2(textRef.current, "commit-placeholder", {
          id: id2,
          name: textRef.current.value
        });
      }
      evt?.stopPropagation();
    },
    [textRef]
  );
  const handleCancel = (0, import_react11.useCallback)(
    (evt) => {
      if (textRef.current) {
        dispatch2(textRef.current, "cancel-placeholder", { id: id2 });
      }
      evt?.stopPropagation();
    },
    [textRef]
  );
  return /* @__PURE__ */ import_react11.default.createElement(
    "div",
    {
      className: [
        "bg-transparent",
        "cursor-pointer",
        "h-full",
        "p-1",
        "rounded-md",
        "shadow-sm",
        "text-center",
        "text-xs",
        "border-dashed",
        "border-2",
        validationResult.isValid ? "border-indigo-500" : "border-red-500 text-red-500",
        selected ? "border-opacity-70" : "border-opacity-30"
      ].join(" "),
      style: {
        width: `${NODE_WIDTH}px`,
        height: `${NODE_HEIGHT}px`,
        // TODO for now, just curdely align this placeholder so that it sits in the right position
        // We'll later change the placeholder to look more consistent
        // (or otherwise come back and do this nicely)
        marginLeft: "-35px"
        // magic number
      }
    },
    /* @__PURE__ */ import_react11.default.createElement(
      Handle$1,
      {
        type: "target",
        position: Position.Top,
        isConnectable: true,
        style: {
          visibility: "hidden",
          border: "none",
          height: 0,
          left: "52px"
          // half node width + stroke
        }
      }
    ),
    /* @__PURE__ */ import_react11.default.createElement(
      "div",
      {
        className: ["h-full", "text-center", "items-center"].filter(Boolean).join(" ")
      },
      /* @__PURE__ */ import_react11.default.createElement(
        "div",
        {
          className: [
            "flex",
            "flex-row",
            "justify-center",
            "h-full",
            "text-center"
          ].filter(Boolean).join(" ")
        },
        /* @__PURE__ */ import_react11.default.createElement(
          XMarkIcon_default,
          {
            className: validationResult.isValid ? `${iconNormalStyle}` : `${iconErrorStyle}`,
            title: "Cancel creation of this job",
            onClick: handleCancel
          }
        ),
        /* @__PURE__ */ import_react11.default.createElement(
          "input",
          {
            type: "text",
            ref: textRef,
            autoFocus: true,
            "data-placeholder": id2,
            className: [
              "line-clamp-2",
              "align-middle",
              "focus:outline-none",
              "focus:ring-0",
              "border-none",
              "bg-transparent",
              "text-center",
              "text-xs"
            ].join(" "),
            onKeyDown: handleKeyDown,
            onChange: handleChange
          }
        ),
        validationResult.isValid ? /* @__PURE__ */ import_react11.default.createElement(
          CheckCircleIcon_default,
          {
            className: iconNormalStyle,
            title: "Create this job",
            onClick: handleCommit
          }
        ) : /* @__PURE__ */ import_react11.default.createElement(
          InformationCircleIcon_default,
          {
            className: iconErrorStyle,
            title: validationResult.message
          }
        )
      )
    )
  );
};
PlaceholderJobNode.displayName = "PlaceholderJobNode";
var PlaceholderJob_default = (0, import_react11.memo)(PlaceholderJobNode);

// js/workflow-diagram/nodes/index.ts
var nodes_default2 = {
  job: Job_default,
  trigger: Trigger_default,
  placeholder: PlaceholderJob_default
};

// js/workflow-diagram/edges/Edge.tsx
var import_react12 = __toESM(require_react());
var CustomEdge = (props) => {
  const { sourceX, sourceY, targetX, targetY, selected } = props;
  const { label, ...stepEdgeProps } = props;
  const labelX = (sourceX + targetX) / 2;
  const labelY = (sourceY + targetY) / 2;
  return /* @__PURE__ */ import_react12.default.createElement(import_react12.default.Fragment, null, /* @__PURE__ */ import_react12.default.createElement(SmoothStepEdge, { ...stepEdgeProps }), label && /* @__PURE__ */ import_react12.default.createElement(EdgeLabelRenderer, null, /* @__PURE__ */ import_react12.default.createElement(
    "div",
    {
      style: {
        position: "absolute",
        transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
        background: "white",
        pointerEvents: "all",
        ...labelStyles(selected, stepEdgeProps.data)
      },
      className: "nodrag nopan cursor-pointer"
    },
    label
  )));
};
var Edge_default = CustomEdge;

// js/workflow-diagram/edges/index.ts
var edges_default = {
  step: Edge_default
};

// js/workflow-diagram/usePlaceholders.ts
var import_react13 = __toESM(require_react());

// js/workflow-diagram/util/to-workflow.ts
var model = (model2) => {
  const workflow = {
    // What about the id? Do we need it? Did we lose it?
    triggers: [],
    jobs: [],
    edges: []
  };
  model2.nodes.forEach((node) => {
    const wfNode = {
      id: node.id,
      name: node.data?.name,
      body: node.data?.body,
      adaptor: node.data?.adaptor
      // TODO workflow id?
    };
    if (node.type === "trigger") {
      workflow.triggers.push(wfNode);
    } else {
      workflow.jobs.push(wfNode);
    }
  });
  model2.edges.forEach((edge) => {
    const source = model2.nodes.find(({ id: id2 }) => id2 === edge.source);
    const wfEdge = {
      id: edge.id,
      target_job_id: edge.target
    };
    if (source && source.type === "trigger") {
      wfEdge.source_trigger_id = edge.source;
    } else {
      wfEdge.source_job_id = edge.source;
    }
    if (edge.data?.condition_type) {
      wfEdge.condition_type = edge.data.condition_type;
    }
    workflow.edges.push(wfEdge);
  });
  return workflow;
};
var to_workflow_default = model;

// js/workflow-diagram/usePlaceholders.ts
var create2 = (parentNode) => {
  const newModel = {
    nodes: [],
    edges: []
  };
  const targetId = crypto.randomUUID();
  newModel.nodes.push({
    id: targetId,
    type: "placeholder",
    position: {
      // Offset the position of the placeholder to be more pleasing during animation
      x: parentNode.position.x,
      y: parentNode.position.y + 100
    },
    data: {
      body: DEFAULT_TEXT,
      adaptor: "@openfn/language-common@latest"
    }
  });
  newModel.edges.push(
    styleEdge({
      id: crypto.randomUUID(),
      type: "step",
      source: parentNode.id,
      target: targetId,
      data: { condition_type: "on_job_success", placeholder: true }
    })
  );
  return newModel;
};
var usePlaceholders_default = (ref, store, requestSelectionChange) => {
  const [placeholders, setPlaceholders] = (0, import_react13.useState)({
    nodes: [],
    edges: []
  });
  const addToStore = useStore(store, (state) => state.add);
  const add = (0, import_react13.useCallback)((parentNode) => {
    const updated = create2(parentNode);
    setPlaceholders(updated);
    requestSelectionChange(updated.nodes[0].id);
  }, []);
  const commit = (0, import_react13.useCallback)(
    (evt) => {
      const { id: id2, name } = evt.detail;
      setPlaceholders({ nodes: [], edges: [] });
      placeholders.nodes[0].data.name = name;
      addToStore(to_workflow_default(placeholders));
      requestSelectionChange(id2);
    },
    [addToStore, placeholders]
  );
  const cancel = (0, import_react13.useCallback)((_evt) => {
    setPlaceholders({ nodes: [], edges: [] });
  }, []);
  (0, import_react13.useEffect)(() => {
    if (ref) {
      ref.addEventListener("commit-placeholder", commit);
      ref.addEventListener("cancel-placeholder", cancel);
      return () => {
        if (ref) {
          ref.removeEventListener("commit-placeholder", commit);
          ref.removeEventListener("cancel-placeholder", cancel);
        }
      };
    }
  }, [commit, cancel, ref]);
  return { placeholders, add, cancel };
};

// js/workflow-diagram/util/from-workflow.ts
function getEdgeLabel(edge) {
  let label = "( )";
  switch (edge.condition_type) {
    case "on_job_success":
      label = "\u2713";
      break;
    case "on_job_failure":
      label = "X";
      break;
    case "always":
      label = "\u221E";
      break;
    case "js_expression":
      const condition_label = edge.condition_label;
      if (condition_label) {
        if (condition_label.length > 16) {
          label = condition_label.slice(0, 16) + "...";
        } else {
          label = condition_label;
        }
      }
      break;
  }
  return label;
}
var fromWorkflow = (workflow, positions, placeholders = { nodes: [], edges: [] }, selectedId) => {
  const allowPlaceholder = placeholders.nodes.length === 0;
  const process2 = (items, collection, type) => {
    items.forEach((item) => {
      const model2 = {
        id: item.id,
        data: {
          ...item
        }
      };
      if (item.id === selectedId) {
        model2.selected = true;
      } else {
        model2.selected = false;
      }
      if (/(job|trigger)/.test(type)) {
        const node = item;
        model2.type = type;
        if (positions && positions[node.id]) {
          model2.position = positions[node.id];
        }
        model2.data.allowPlaceholder = allowPlaceholder;
        if (type === "trigger") {
          model2.data.trigger = {
            type: node.type,
            enabled: node.enabled
          };
        }
        styleNode(model2);
      } else {
        const edge = item;
        model2.source = edge.source_trigger_id || edge.source_job_id;
        model2.target = edge.target_job_id;
        model2.type = "step";
        model2.label = getEdgeLabel(edge);
        model2.markerEnd = {
          type: "arrowclosed",
          width: 32,
          height: 32
        };
        model2.data = { condition_type: edge.condition_type, enabled: edge.enabled };
        const source = nodes.find((x) => x.id == model2.source);
        if (source.type == "trigger") {
          model2.data.enabled = source?.data.enabled;
        }
        styleEdge(model2);
      }
      collection.push(model2);
    });
  };
  const nodes = [
    ...placeholders.nodes.map((n) => {
      if (selectedId == n.id) {
        n.selected = true;
      }
      return styleNode(n);
    })
  ];
  const edges = [...placeholders.edges.map((e) => styleEdge(e))];
  process2(workflow.jobs, nodes, "job");
  process2(workflow.triggers, nodes, "trigger");
  process2(workflow.edges, edges, "edge");
  const sortedEdges = edges.sort(sortOrderForSvg);
  return { nodes, edges: sortedEdges };
};
var from_workflow_default = fromWorkflow;

// js/workflow-diagram/util/throttle.ts
var throttle_default = (fn, duration = 100) => {
  let callAgain = false;
  let timeout2;
  const run = () => {
    if (timeout2) {
      callAgain = true;
    } else {
      callAgain = false;
      timeout2 = setTimeout(() => {
        timeout2 = void 0;
        if (callAgain) {
          run();
        }
      }, duration);
      fn();
    }
  };
  run.cancel = () => {
    clearTimeout(timeout2);
  };
  return run;
};

// js/workflow-diagram/util/update-selection.ts
var update_selection_default = (model2, newSelection) => {
  const updatedModel = {
    nodes: model2.nodes.map(updateItem),
    edges: model2.edges.map(updateItem)
  };
  function updateItem(item) {
    return styleItem({
      ...item,
      selected: item.id === newSelection
    });
    return item;
  }
  const sortedModel = {
    ...updatedModel,
    edges: updatedModel.edges.sort(sortOrderForSvg)
  };
  return sortedModel;
};

// js/workflow-diagram/util/should-layout.ts
var should_layout_default = (edges, lastHash) => {
  const id2 = edges.map((e) => `${e.source}-${e.target}`).sort().join("--");
  if (id2 !== lastHash) {
    return id2;
  }
};

// js/workflow-diagram/WorkflowDiagram.tsx
var WorkflowDiagram_default = import_react14.default.forwardRef(
  (props, ref) => {
    const { selection: selection2, onSelectionChange, store } = props;
    const [model2, setModel] = (0, import_react14.useState)({ nodes: [], edges: [] });
    const updateSelection = (0, import_react14.useCallback)(
      (id2) => {
        id2 = id2 || null;
        chartCache.current.lastSelection = id2;
        onSelectionChange(id2);
      },
      [onSelectionChange, selection2]
    );
    const {
      placeholders,
      add: addPlaceholder,
      cancel: cancelPlaceholder
    } = usePlaceholders_default(ref, store, updateSelection);
    const workflow = useStore(
      store,
      (state) => ({
        jobs: state.jobs,
        triggers: state.triggers,
        edges: state.edges
      }),
      shallow$1
    );
    const chartCache = (0, import_react14.useRef)({
      positions: {},
      // This will set the initial selection into the cache
      lastSelection: selection2,
      lastLayout: void 0
    });
    const [flow, setFlow] = (0, import_react14.useState)();
    (0, import_react14.useEffect)(() => {
      const { positions } = chartCache.current;
      const newModel = from_workflow_default(
        workflow,
        positions,
        placeholders,
        // Re-render the model based on whatever was last selected
        // This handles first load and new node safely
        chartCache.current.lastSelection
      );
      if (flow && newModel.nodes.length) {
        const layoutId = should_layout_default(
          newModel.edges,
          chartCache.current.lastLayout
        );
        if (layoutId) {
          chartCache.current.lastLayout = layoutId;
          layout_default(newModel, setModel, flow, 300).then((positions2) => {
            chartCache.current.positions = positions2;
          });
        } else {
          newModel.nodes.forEach((n) => {
            if (!n.position) {
              n.position = { x: 0, y: 0 };
            }
          });
          setModel(newModel);
        }
      } else {
        chartCache.current.positions = {};
      }
    }, [workflow, flow, placeholders]);
    (0, import_react14.useEffect)(() => {
      const updatedModel = update_selection_default(model2, selection2);
      setModel(updatedModel);
    }, [selection2]);
    const onNodesChange = (0, import_react14.useCallback)(
      (changes) => {
        const newNodes = applyNodeChanges(changes, model2.nodes);
        setModel({ nodes: newNodes, edges: model2.edges });
      },
      [setModel, model2]
    );
    const handleNodeClick2 = (0, import_react14.useCallback)(
      (event, node) => {
        if (event.target.closest("[name=add-node]")) {
          addPlaceholder(node);
        } else {
          if (node.type != "placeholder")
            cancelPlaceholder();
          updateSelection(node.id);
        }
      },
      [updateSelection]
    );
    const handleEdgeClick = (0, import_react14.useCallback)(
      (_event, edge) => {
        cancelPlaceholder();
        updateSelection(edge.id);
      },
      [updateSelection]
    );
    const handleBackgroundClick = (0, import_react14.useCallback)(
      (event) => {
        if (event.target.classList?.contains("react-flow__pane")) {
          cancelPlaceholder();
          updateSelection(null);
        }
      },
      [updateSelection]
    );
    (0, import_react14.useEffect)(() => {
      if (flow && ref) {
        let isFirstCallback = true;
        const throttledResize = throttle_default(() => {
          flow.fitView({ duration: FIT_DURATION, padding: FIT_PADDING });
        }, FIT_DURATION * 2);
        const resizeOb = new ResizeObserver(function(entries) {
          if (!isFirstCallback) {
            throttledResize();
          }
          isFirstCallback = false;
        });
        resizeOb.observe(ref);
        return () => {
          throttledResize.cancel();
          resizeOb.unobserve(ref);
        };
      }
    }, [flow, ref]);
    return /* @__PURE__ */ import_react14.default.createElement(ReactFlowProvider, null, /* @__PURE__ */ import_react14.default.createElement(
      ReactFlow,
      {
        proOptions: { account: "paid-pro", hideAttribution: true },
        nodes: model2.nodes,
        edges: model2.edges,
        onNodesChange,
        nodesDraggable: false,
        nodeTypes: nodes_default2,
        edgeTypes: edges_default,
        onClick: handleBackgroundClick,
        onNodeClick: handleNodeClick2,
        onEdgeClick: handleEdgeClick,
        onInit: setFlow,
        deleteKeyCode: null,
        fitView: true,
        fitViewOptions: { padding: FIT_PADDING }
      }
    ));
  }
);

// js/workflow-editor/component.tsx
function mount(el, workflowStore, onSelectionChange) {
  const componentRoot = (0, import_client.createRoot)(el);
  const initialSelection = new URL(window.location.href).searchParams.get("s");
  render(initialSelection);
  function render(selection2) {
    componentRoot.render(
      /* @__PURE__ */ import_react15.default.createElement(
        WorkflowDiagram_default,
        {
          ref: el,
          selection: selection2 || null,
          store: workflowStore,
          onSelectionChange
        }
      )
    );
  }
  function unmount() {
    return componentRoot.unmount();
  }
  return { unmount, render };
}
export {
  mount
};
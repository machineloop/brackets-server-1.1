define("main",["require","exports","module"],function(){function e(){var e=s.getCurrentDocument();if(e){var t=e.getText();return i.extractAllSelectors(t,e.getLanguage().getMode())}}function t(t,r){var n=r.selectorList;n||(n=e(),r.selectorList=n),t=t.slice(t.indexOf("@")+1,t.length);var c=$.map(n,function(e){var n=r.match(i.getCompleteSelectors(e),t);return n&&(n.selectorInfo=e),n});return l.basicMatchSort(c),c}function r(e){return 0===e.indexOf("@")?!0:void 0}function n(e){if(e){var t=e.selectorInfo,r={line:t.selectorStartLine,ch:t.selectorStartChar},n={line:t.selectorStartLine,ch:t.selectorEndChar};a.getCurrentFullEditor().setSelection(r,n,!0)}}function c(e){n(e)}var a=brackets.getModule("editor/EditorManager"),o=brackets.getModule("search/QuickOpen"),i=brackets.getModule("language/CSSUtils"),s=brackets.getModule("document/DocumentManager"),l=brackets.getModule("utils/StringMatch");o.addQuickOpenPlugin({name:"CSS Selectors",languageIds:["css","less","scss"],search:t,match:r,itemFocus:n,itemSelect:c})});
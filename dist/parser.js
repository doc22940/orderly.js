/* parser generated by jison 0.4.2 */
var grammar = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"file":3,"orderly_schema":4,"EOF":5,"unnamed_entry":6,";":7,"named_entries":8,"named_entry":9,"unnamed_entries":10,"definition_prefix":11,"property_name":12,"definition_suffix":13,"string_prefix":14,"string_suffix":15,"INTEGER":16,"optional_range":17,"NUMBER":18,"BOOLEAN":19,"NULL":20,"ANY":21,"ARRAY":22,"{":23,"}":24,"optional_additional_marker":25,"[":26,"]":27,"OBJECT":28,"UNION":29,"STRING":30,"optional_perl_regex":31,"optional_enum_values":32,"optional_default_value":33,"optional_dependencies":34,"optional_optional_marker":35,"optional_extra_properties":36,"csv_property_names":37,",":38,"`":39,"JSONObject":40,"<":41,">":42,"?":43,"*":44,"JSONArray":45,"=":46,"JSONValue":47,"JSONNumber":48,"JSONString":49,"PROPERTY":50,"REGEX":51,"STRING_LIT":52,"NUMBER_LIT":53,"JSONNullLiteral":54,"JSONBooleanLiteral":55,"TRUE":56,"FALSE":57,"JSONText":58,"JSONMemberList":59,"JSONMember":60,":":61,"JSONElementList":62,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",7:";",16:"INTEGER",18:"NUMBER",19:"BOOLEAN",20:"NULL",21:"ANY",22:"ARRAY",23:"{",24:"}",26:"[",27:"]",28:"OBJECT",29:"UNION",30:"STRING",38:",",39:"`",41:"<",42:">",43:"?",44:"*",46:"=",50:"PROPERTY",51:"REGEX",52:"STRING_LIT",53:"NUMBER_LIT",56:"TRUE",57:"FALSE",61:":"},
productions_: [0,[3,2],[4,2],[4,1],[8,3],[8,1],[8,0],[10,3],[10,1],[10,0],[9,3],[9,3],[6,2],[6,2],[11,2],[11,2],[11,1],[11,1],[11,1],[11,6],[11,6],[11,5],[11,4],[14,2],[15,2],[13,5],[37,3],[37,1],[36,3],[36,0],[34,3],[34,0],[35,1],[35,0],[25,1],[25,0],[32,1],[32,0],[33,2],[33,0],[17,5],[17,4],[17,4],[17,3],[17,0],[12,1],[12,1],[31,1],[31,0],[49,1],[48,1],[54,1],[55,1],[55,1],[58,1],[47,1],[47,1],[47,1],[47,1],[47,1],[47,1],[40,2],[40,3],[60,3],[59,1],[59,3],[45,2],[45,3],[62,1],[62,3]],
performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

var $0 = $$.length - 1;
switch (yystate) {
case 1:return $$[$0-1];
break;
case 4:this.$ = $$[$0]; this.$.unshift($$[$0-2]);
break;
case 5:this.$ = [$$[$0]];
break;
case 6:this.$ = [];
break;
case 7:this.$ = $$[$0]; $$[$0].unshift($$[$0-2]);
break;
case 8:this.$ = [$$[$0]];
break;
case 9:this.$ = [];
break;
case 10:this.$ = [$$[$0-1], $$[$0-2]]; yy.Type.addOptionals($$[$0-2], $$[$0]);
break;
case 11:this.$ = [$$[$0-1], $$[$0-2]]; yy.Type.addOptionals($$[$0-2], $$[$0]);
break;
case 12:this.$ = $$[$0-1]; yy.Type.addOptionals(this.$, $$[$0]);
break;
case 13:this.$ = $$[$0-1]; yy.Type.addOptionals(this.$, $$[$0]);
break;
case 14:this.$ = new yy.Type('integer', $$[$0]);
break;
case 15:this.$ = new yy.Type('number', $$[$0]);
break;
case 16:this.$ = new yy.Type('boolean');
break;
case 17:this.$ = new yy.Type('null');
break;
case 18:this.$ = new yy.Type('any');
break;
case 19:this.$ = new yy.Type('array', $$[$0], $$[$0-3], $$[$0-1]);
break;
case 20:this.$ = new yy.Type('array', $$[$0], $$[$0-3], $$[$0-1]);
break;
case 21:this.$ = new yy.Type('object', null, $$[$0-2], $$[$0]);
break;
case 22:this.$ = new yy.Type($$[$0-1]);
break;
case 23:this.$ = new yy.Type('string', $$[$0]);
break;
case 24:this.$ = $$[$0]; this.$.pattern = $$[$0-1];
break;
case 25:this.$ = {'enums': $$[$0-4], 'defaultv': $$[$0-3], 'dependencies': $$[$0-2], 'optional': $$[$0-1], 'extras': $$[$0]};
break;
case 26:this.$ = $$[$0-2]; this.$.push($$[$0]);
break;
case 27:this.$ = [$$[$0]];
break;
case 28:this.$ = $$[$0-1];
break;
case 29:this.$ = null;
break;
case 30:this.$ = $$[$0-1];
break;
case 31:this.$ = null;
break;
case 32:this.$ = true;
break;
case 33:this.$ = null;
break;
case 34:this.$ = true;
break;
case 35:this.$ = null;
break;
case 37:this.$ = null;
break;
case 38:this.$ = $$[$0];
break;
case 39:this.$ = yy.NOVALUE;
break;
case 40:this.$ = [$$[$0-3], $$[$0-1]];
break;
case 41:this.$ = [$$[$0-2], null];
break;
case 42:this.$ = [null, $$[$0-1]];
break;
case 43:this.$ = null;
break;
case 44:this.$ = null;
break;
case 46:this.$ = yytext;
break;
case 47:this.$ = yytext.substr(1, yytext.length-2);
break;
case 48:this.$ = null;
break;
case 49:this.$ = yytext;
break;
case 50:this.$ = Number(yytext);
break;
case 51:this.$ = null;
break;
case 52:this.$ = true;
break;
case 53:this.$ = false;
break;
case 61:this.$ = {};
break;
case 62:this.$ = $$[$0-1];
break;
case 63:this.$ = [$$[$0-2], $$[$0]];
break;
case 64:this.$ = {}; this.$[$$[$0][0]] = $$[$0][1];
break;
case 65:this.$ = $$[$0-2]; $$[$0-2][$$[$0][0]] = $$[$0][1];
break;
case 66:this.$ = [];
break;
case 67:this.$ = $$[$0-1];
break;
case 68:this.$ = [$$[$0]];
break;
case 69:this.$ = $$[$0-2]; $$[$0-2].push($$[$0]);
break;
}
},
table: [{3:1,4:2,6:3,11:4,14:5,16:[1,6],18:[1,7],19:[1,8],20:[1,9],21:[1,10],22:[1,11],28:[1,12],29:[1,13],30:[1,14]},{1:[3]},{5:[1,15]},{5:[2,3],7:[1,16]},{5:[2,37],7:[2,37],13:17,24:[2,37],26:[1,20],27:[2,37],32:18,39:[2,37],41:[2,37],43:[2,37],45:19,46:[2,37]},{5:[2,48],7:[2,48],15:21,24:[2,48],26:[2,48],27:[2,48],31:22,39:[2,48],41:[2,48],43:[2,48],46:[2,48],51:[1,23]},{5:[2,44],7:[2,44],17:24,23:[1,25],24:[2,44],26:[2,44],27:[2,44],39:[2,44],41:[2,44],43:[2,44],46:[2,44],50:[2,44],52:[2,44]},{5:[2,44],7:[2,44],17:26,23:[1,25],24:[2,44],26:[2,44],27:[2,44],39:[2,44],41:[2,44],43:[2,44],46:[2,44],50:[2,44],52:[2,44]},{5:[2,16],7:[2,16],24:[2,16],26:[2,16],27:[2,16],39:[2,16],41:[2,16],43:[2,16],46:[2,16],50:[2,16],52:[2,16]},{5:[2,17],7:[2,17],24:[2,17],26:[2,17],27:[2,17],39:[2,17],41:[2,17],43:[2,17],46:[2,17],50:[2,17],52:[2,17]},{5:[2,18],7:[2,18],24:[2,18],26:[2,18],27:[2,18],39:[2,18],41:[2,18],43:[2,18],46:[2,18],50:[2,18],52:[2,18]},{23:[1,27],26:[1,28]},{23:[1,29]},{23:[1,30]},{5:[2,44],7:[2,44],17:31,23:[1,25],24:[2,44],26:[2,44],27:[2,44],39:[2,44],41:[2,44],43:[2,44],46:[2,44],50:[2,44],51:[2,44],52:[2,44]},{1:[2,1]},{5:[2,2]},{5:[2,12],7:[2,12],24:[2,12],27:[2,12]},{5:[2,39],7:[2,39],24:[2,39],27:[2,39],33:32,39:[2,39],41:[2,39],43:[2,39],46:[1,33]},{5:[2,36],7:[2,36],24:[2,36],27:[2,36],39:[2,36],41:[2,36],43:[2,36],46:[2,36]},{20:[1,43],23:[1,48],26:[1,20],27:[1,34],40:41,45:42,47:36,48:40,49:39,52:[1,46],53:[1,47],54:37,55:38,56:[1,44],57:[1,45],62:35},{5:[2,13],7:[2,13],24:[2,13],27:[2,13]},{5:[2,37],7:[2,37],13:49,24:[2,37],26:[1,20],27:[2,37],32:18,39:[2,37],41:[2,37],43:[2,37],45:19,46:[2,37]},{5:[2,47],7:[2,47],24:[2,47],26:[2,47],27:[2,47],39:[2,47],41:[2,47],43:[2,47],46:[2,47]},{5:[2,14],7:[2,14],24:[2,14],26:[2,14],27:[2,14],39:[2,14],41:[2,14],43:[2,14],46:[2,14],50:[2,14],52:[2,14]},{38:[1,51],48:50,53:[1,47]},{5:[2,15],7:[2,15],24:[2,15],26:[2,15],27:[2,15],39:[2,15],41:[2,15],43:[2,15],46:[2,15],50:[2,15],52:[2,15]},{6:53,10:52,11:4,14:5,16:[1,6],18:[1,7],19:[1,8],20:[1,9],21:[1,10],22:[1,11],24:[2,9],28:[1,12],29:[1,13],30:[1,14]},{6:54,11:4,14:5,16:[1,6],18:[1,7],19:[1,8],20:[1,9],21:[1,10],22:[1,11],28:[1,12],29:[1,13],30:[1,14]},{8:55,9:56,11:57,14:58,16:[1,6],18:[1,7],19:[1,8],20:[1,9],21:[1,10],22:[1,11],24:[2,6],28:[1,12],29:[1,13],30:[1,14]},{6:53,10:59,11:4,14:5,16:[1,6],18:[1,7],19:[1,8],20:[1,9],21:[1,10],22:[1,11],24:[2,9],28:[1,12],29:[1,13],30:[1,14]},{5:[2,23],7:[2,23],24:[2,23],26:[2,23],27:[2,23],39:[2,23],41:[2,23],43:[2,23],46:[2,23],50:[2,23],51:[2,23],52:[2,23]},{5:[2,31],7:[2,31],24:[2,31],27:[2,31],34:60,39:[2,31],41:[1,61],43:[2,31]},{20:[1,43],23:[1,48],26:[1,20],40:41,45:42,47:62,48:40,49:39,52:[1,46],53:[1,47],54:37,55:38,56:[1,44],57:[1,45]},{5:[2,66],7:[2,66],24:[2,66],27:[2,66],38:[2,66],39:[2,66],41:[2,66],43:[2,66],46:[2,66]},{27:[1,63],38:[1,64]},{27:[2,68],38:[2,68]},{5:[2,55],7:[2,55],24:[2,55],27:[2,55],38:[2,55],39:[2,55],41:[2,55],43:[2,55]},{5:[2,56],7:[2,56],24:[2,56],27:[2,56],38:[2,56],39:[2,56],41:[2,56],43:[2,56]},{5:[2,57],7:[2,57],24:[2,57],27:[2,57],38:[2,57],39:[2,57],41:[2,57],43:[2,57]},{5:[2,58],7:[2,58],24:[2,58],27:[2,58],38:[2,58],39:[2,58],41:[2,58],43:[2,58]},{5:[2,59],7:[2,59],24:[2,59],27:[2,59],38:[2,59],39:[2,59],41:[2,59],43:[2,59]},{5:[2,60],7:[2,60],24:[2,60],27:[2,60],38:[2,60],39:[2,60],41:[2,60],43:[2,60]},{5:[2,51],7:[2,51],24:[2,51],27:[2,51],38:[2,51],39:[2,51],41:[2,51],43:[2,51]},{5:[2,52],7:[2,52],24:[2,52],27:[2,52],38:[2,52],39:[2,52],41:[2,52],43:[2,52]},{5:[2,53],7:[2,53],24:[2,53],27:[2,53],38:[2,53],39:[2,53],41:[2,53],43:[2,53]},{5:[2,49],7:[2,49],24:[2,49],26:[2,49],27:[2,49],38:[2,49],39:[2,49],41:[2,49],42:[2,49],43:[2,49],46:[2,49],51:[2,49],61:[2,49]},{5:[2,50],7:[2,50],24:[2,50],27:[2,50],38:[2,50],39:[2,50],41:[2,50],43:[2,50]},{24:[1,65],49:68,52:[1,46],59:66,60:67},{5:[2,24],7:[2,24],24:[2,24],27:[2,24]},{38:[1,69]},{24:[1,71],48:70,53:[1,47]},{24:[1,72]},{7:[1,73],24:[2,8]},{27:[1,74]},{24:[1,75]},{7:[1,76],24:[2,5]},{12:77,49:78,50:[1,79],52:[1,46]},{12:80,49:78,50:[1,79],52:[1,46]},{24:[1,81]},{5:[2,33],7:[2,33],24:[2,33],27:[2,33],35:82,39:[2,33],43:[1,83]},{12:85,37:84,49:78,50:[1,79],52:[1,46]},{5:[2,38],7:[2,38],24:[2,38],27:[2,38],39:[2,38],41:[2,38],43:[2,38]},{5:[2,67],7:[2,67],24:[2,67],27:[2,67],38:[2,67],39:[2,67],41:[2,67],43:[2,67],46:[2,67]},{20:[1,43],23:[1,48],26:[1,20],40:41,45:42,47:86,48:40,49:39,52:[1,46],53:[1,47],54:37,55:38,56:[1,44],57:[1,45]},{5:[2,61],7:[2,61],24:[2,61],27:[2,61],38:[2,61],39:[2,61],41:[2,61],43:[2,61]},{24:[1,87],38:[1,88]},{24:[2,64],38:[2,64]},{61:[1,89]},{24:[1,91],48:90,53:[1,47]},{24:[1,92]},{5:[2,43],7:[2,43],24:[2,43],26:[2,43],27:[2,43],39:[2,43],41:[2,43],43:[2,43],46:[2,43],50:[2,43],51:[2,43],52:[2,43]},{5:[2,35],7:[2,35],23:[2,35],24:[2,35],25:93,26:[2,35],27:[2,35],39:[2,35],41:[2,35],43:[2,35],44:[1,94],46:[2,35],50:[2,35],52:[2,35]},{6:53,10:95,11:4,14:5,16:[1,6],18:[1,7],19:[1,8],20:[1,9],21:[1,10],22:[1,11],24:[2,9],28:[1,12],29:[1,13],30:[1,14]},{5:[2,35],7:[2,35],23:[2,35],24:[2,35],25:96,26:[2,35],27:[2,35],39:[2,35],41:[2,35],43:[2,35],44:[1,94],46:[2,35],50:[2,35],52:[2,35]},{5:[2,35],7:[2,35],24:[2,35],25:97,26:[2,35],27:[2,35],39:[2,35],41:[2,35],43:[2,35],44:[1,94],46:[2,35],50:[2,35],52:[2,35]},{8:98,9:56,11:57,14:58,16:[1,6],18:[1,7],19:[1,8],20:[1,9],21:[1,10],22:[1,11],24:[2,6],28:[1,12],29:[1,13],30:[1,14]},{7:[2,37],13:99,24:[2,37],26:[1,20],32:18,39:[2,37],41:[2,37],43:[2,37],45:19,46:[2,37]},{7:[2,45],24:[2,45],26:[2,45],38:[2,45],39:[2,45],41:[2,45],42:[2,45],43:[2,45],46:[2,45],51:[2,45]},{7:[2,46],24:[2,46],26:[2,46],38:[2,46],39:[2,46],41:[2,46],42:[2,46],43:[2,46],46:[2,46],51:[2,46]},{7:[2,48],15:100,24:[2,48],26:[2,48],31:22,39:[2,48],41:[2,48],43:[2,48],46:[2,48],51:[1,23]},{5:[2,22],7:[2,22],24:[2,22],26:[2,22],27:[2,22],39:[2,22],41:[2,22],43:[2,22],46:[2,22],50:[2,22],52:[2,22]},{5:[2,29],7:[2,29],24:[2,29],27:[2,29],36:101,39:[1,102]},{5:[2,32],7:[2,32],24:[2,32],27:[2,32],39:[2,32]},{38:[1,104],42:[1,103]},{38:[2,27],42:[2,27]},{27:[2,69],38:[2,69]},{5:[2,62],7:[2,62],24:[2,62],27:[2,62],38:[2,62],39:[2,62],41:[2,62],43:[2,62]},{49:68,52:[1,46],60:105},{20:[1,43],23:[1,48],26:[1,20],40:41,45:42,47:106,48:40,49:39,52:[1,46],53:[1,47],54:37,55:38,56:[1,44],57:[1,45]},{24:[1,107]},{5:[2,41],7:[2,41],24:[2,41],26:[2,41],27:[2,41],39:[2,41],41:[2,41],43:[2,41],46:[2,41],50:[2,41],51:[2,41],52:[2,41]},{5:[2,42],7:[2,42],24:[2,42],26:[2,42],27:[2,42],39:[2,42],41:[2,42],43:[2,42],46:[2,42],50:[2,42],51:[2,42],52:[2,42]},{5:[2,44],7:[2,44],17:108,23:[1,25],24:[2,44],26:[2,44],27:[2,44],39:[2,44],41:[2,44],43:[2,44],46:[2,44],50:[2,44],52:[2,44]},{5:[2,34],7:[2,34],23:[2,34],24:[2,34],26:[2,34],27:[2,34],39:[2,34],41:[2,34],43:[2,34],46:[2,34],50:[2,34],52:[2,34]},{24:[2,7]},{5:[2,44],7:[2,44],17:109,23:[1,25],24:[2,44],26:[2,44],27:[2,44],39:[2,44],41:[2,44],43:[2,44],46:[2,44],50:[2,44],52:[2,44]},{5:[2,21],7:[2,21],24:[2,21],26:[2,21],27:[2,21],39:[2,21],41:[2,21],43:[2,21],46:[2,21],50:[2,21],52:[2,21]},{24:[2,4]},{7:[2,10],24:[2,10]},{7:[2,11],24:[2,11]},{5:[2,25],7:[2,25],24:[2,25],27:[2,25]},{23:[1,48],40:110},{5:[2,30],7:[2,30],24:[2,30],27:[2,30],39:[2,30],43:[2,30]},{12:111,49:78,50:[1,79],52:[1,46]},{24:[2,65],38:[2,65]},{24:[2,63],38:[2,63]},{5:[2,40],7:[2,40],24:[2,40],26:[2,40],27:[2,40],39:[2,40],41:[2,40],43:[2,40],46:[2,40],50:[2,40],51:[2,40],52:[2,40]},{5:[2,19],7:[2,19],24:[2,19],26:[2,19],27:[2,19],39:[2,19],41:[2,19],43:[2,19],46:[2,19],50:[2,19],52:[2,19]},{5:[2,20],7:[2,20],24:[2,20],26:[2,20],27:[2,20],39:[2,20],41:[2,20],43:[2,20],46:[2,20],50:[2,20],52:[2,20]},{39:[1,112]},{38:[2,26],42:[2,26]},{5:[2,28],7:[2,28],24:[2,28],27:[2,28]}],
defaultActions: {15:[2,1],16:[2,2],95:[2,7],98:[2,4]},
parseError: function parseError(str, hash) {
    throw new Error(str);
},
parse: function parse(input) {
    var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    this.yy.parser = this;
    if (typeof this.lexer.yylloc == "undefined")
        this.lexer.yylloc = {};
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);
    var ranges = this.lexer.options && this.lexer.options.ranges;
    if (typeof this.yy.parseError === "function")
        this.parseError = this.yy.parseError;
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    function lex() {
        var token;
        token = self.lexer.lex() || 1;
        if (typeof token !== "number") {
            token = self.symbols_[token] || token;
        }
        return token;
    }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == "undefined") {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
        if (typeof action === "undefined" || !action.length || !action[0]) {
            var errStr = "";
            if (!recovering) {
                expected = [];
                for (p in table[state])
                    if (this.terminals_[p] && p > 2) {
                        expected.push("'" + this.terminals_[p] + "'");
                    }
                if (this.lexer.showPosition) {
                    errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
                } else {
                    errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1?"end of input":"'" + (this.terminals_[symbol] || symbol) + "'");
                }
                this.parseError(errStr, {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected});
            }
        }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(this.lexer.yytext);
            lstack.push(this.lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                if (recovering > 0)
                    recovering--;
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {first_line: lstack[lstack.length - (len || 1)].first_line, last_line: lstack[lstack.length - 1].last_line, first_column: lstack[lstack.length - (len || 1)].first_column, last_column: lstack[lstack.length - 1].last_column};
            if (ranges) {
                yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
            }
            r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
            if (typeof r !== "undefined") {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}
};
/* generated by jison-lex 0.1.0 */
var lexer = (function(){
var lexer = {
EOF:1,
parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },
setInput:function (input) {
        this._input = input;
        this._more = this._less = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {first_line:1,first_column:0,last_line:1,last_column:0};
        if (this.options.ranges) this.yylloc.range = [0,0];
        this.offset = 0;
        return this;
    },
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) this.yylloc.range[1]++;

        this._input = this._input.slice(1);
        return ch;
    },
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length-len-1);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length-1);
        this.matched = this.matched.substr(0, this.matched.length-1);

        if (lines.length-1) this.yylineno -= lines.length-1;
        var r = this.yylloc.range;

        this.yylloc = {first_line: this.yylloc.first_line,
          last_line: this.yylineno+1,
          first_column: this.yylloc.first_column,
          last_column: lines ?
              (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length:
              this.yylloc.first_column - len
          };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        return this;
    },
more:function () {
        this._more = true;
        return this;
    },
less:function (n) {
        this.unput(this.match.slice(n));
    },
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20)+(next.length > 20 ? '...':'')).replace(/\n/g, "");
    },
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c+"^";
    },
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) this.done = true;

        var token,
            match,
            tempMatch,
            index,
            col,
            lines;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i=0;i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (!this.options.flex) break;
            }
        }
        if (match) {
            lines = match[0].match(/(?:\r\n?|\n).*/g);
            if (lines) this.yylineno += lines.length;
            this.yylloc = {first_line: this.yylloc.last_line,
                           last_line: this.yylineno+1,
                           first_column: this.yylloc.last_column,
                           last_column: lines ? lines[lines.length-1].length-lines[lines.length-1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length};
            this.yytext += match[0];
            this.match += match[0];
            this.matches = match;
            this.yyleng = this.yytext.length;
            if (this.options.ranges) {
                this.yylloc.range = [this.offset, this.offset += this.yyleng];
            }
            this._more = false;
            this._input = this._input.slice(match[0].length);
            this.matched += match[0];
            token = this.performAction.call(this, this.yy, this, rules[index],this.conditionStack[this.conditionStack.length-1]);
            if (this.done && this._input) this.done = false;
            if (token) return token;
            else return;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line '+(this.yylineno+1)+'. Unrecognized text.\n'+this.showPosition(),
                    {text: "", token: null, line: this.yylineno});
        }
    },
lex:function lex() {
        var r = this.next();
        if (typeof r !== 'undefined') {
            return r;
        } else {
            return this.lex();
        }
    },
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },
popState:function popState() {
        return this.conditionStack.pop();
    },
_currentRules:function _currentRules() {
        return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules;
    },
topState:function () {
        return this.conditionStack[this.conditionStack.length-2];
    },
pushState:function begin(condition) {
        this.begin(condition);
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip whitespace */
break;
case 1:/* skip comment */
break;
case 2:/* skip comment */
break;
case 3:return 7
break;
case 4:return 38
break;
case 5:return 23
break;
case 6:return 24
break;
case 7:return 26
break;
case 8:return 27
break;
case 9:return 39
break;
case 10:return 41
break;
case 11:return 42
break;
case 12:return 61
break;
case 13:return 28
break;
case 14:return 16
break;
case 15:return 18
break;
case 16:return 20
break;
case 17:return 19
break;
case 18:return 21
break;
case 19:return 22
break;
case 20:return 29
break;
case 21:return 30
break;
case 22:return 56
break;
case 23:return 57
break;
case 24:yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2); return 52;
break;
case 25:return 53;
break;
case 26:return 50;
break;
case 27:return 43
break;
case 28:return 44
break;
case 29:return 46
break;
case 30:return 51;
break;
case 31:return 5;
break;
}
},
rules: [/^(?:\s+)/,/^(?:\/\/[^\n]*)/,/^(?:#[^\n]*)/,/^(?:;)/,/^(?:,)/,/^(?:\{)/,/^(?:\})/,/^(?:\[)/,/^(?:\])/,/^(?:`)/,/^(?:<)/,/^(?:>)/,/^(?::)/,/^(?:object\b)/,/^(?:integer\b)/,/^(?:number\b)/,/^(?:null\b)/,/^(?:boolean\b)/,/^(?:any\b)/,/^(?:array\b)/,/^(?:union\b)/,/^(?:string\b)/,/^(?:true\b)/,/^(?:false\b)/,/^(?:"(?:(\\)["bfnrt/(\\)]|(\\)u[a-fA-F0-9]{4}|[^"(\\)])*")/,/^(?:(-?(?:[0-9]|[1-9][0-9]+))((?:\.[0-9]+))?((?:[eE][-+]?[0-9]+))?\b)/,/^(?:[A-Za-z_0-9-]+)/,/^(?:\?)/,/^(?:\*)/,/^(?:=)/,/^(?:\/(?:[^\/]|\\\/)*\/)/,/^(?:$)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],"inclusive":true}}
};
return lexer;
})();
parser.lexer = lexer;
function Parser () { this.yy = {}; }Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();
if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = grammar;
exports.Parser = grammar.Parser;
exports.parse = function () { return grammar.parse.apply(grammar, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}
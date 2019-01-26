define({ "api": [
  {
    "type": "get",
    "url": "/",
    "title": "错误码",
    "name": "ErrorCode",
    "group": "Constant",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "10000",
            "description": "<p>成功</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "10007",
            "description": "<p>未登录</p>"
          }
        ]
      }
    },
    "filename": "api/apidoc.py",
    "groupTitle": "Constant"
  },
  {
    "type": "post",
    "url": "/python/game/last_winner/rounds/{round_id:int}/keys",
    "title": "购买key",
    "name": "BuyKey",
    "group": "LastWinner",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "keys",
            "description": "<p>购买的key数量</p>"
          }
        ]
      }
    },
    "filename": "api/last_winner.py",
    "groupTitle": "LastWinner"
  },
  {
    "type": "get",
    "url": "/python/game/last_winner/rounds/{round_id:int}/keys",
    "title": "key购买记录",
    "name": "BuyKeyList",
    "group": "LastWinner",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "self",
            "defaultValue": "0",
            "description": "<p>是否仅显示当前用户,0否1是</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "pageNumber",
            "description": "<p>第几页,从1开始</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页数量</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"user_name\": \"用户昵称\",\n    \"eth\": 1.33,\n    \"buy_time\": \"2019-01-12 13:33:23\"\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "api/last_winner.py",
    "groupTitle": "LastWinner"
  },
  {
    "type": "get",
    "url": "/python/game/last_winner/rounds/{round_id:int}/key_price",
    "title": "key价格",
    "name": "KeyPrice",
    "group": "LastWinner",
    "version": "0.0.1",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "3.233",
          "type": "text"
        }
      ]
    },
    "filename": "api/last_winner.py",
    "groupTitle": "LastWinner"
  },
  {
    "type": "get",
    "url": "/python/game/last_winner/rounds/{round_id:int}/countdown",
    "title": "游戏倒计时",
    "name": "RoundCountdown",
    "group": "LastWinner",
    "version": "0.0.1",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"round_id\": 1,  // 游戏轮次,第X期\n    \"ended\": true,       # 是否已结束\n    \"countdown\": 3312312312\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/last_winner.py",
    "groupTitle": "LastWinner"
  },
  {
    "type": "get",
    "url": "/python/game/last_winner/rounds/{round_id:int}",
    "title": "游戏详情",
    "name": "RoundDetail",
    "group": "LastWinner",
    "version": "0.0.1",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"round_id\": 1,  // 游戏轮次,第X期\n    \"activate_pot\": 999,    // 游戏奖池\n    \"ended\": true,       # 是否已结束\n    \"key_price\": 0.33,\n    \"player\": {     // 当前玩家数据\n        \"keys\": 3333,   // key数量\n        \"pool\": 2.33    // 分红金额\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/last_winner.py",
    "groupTitle": "LastWinner"
  },
  {
    "type": "get",
    "url": "/python/game/last_winner/rounds",
    "title": "游戏列表",
    "name": "RoundList",
    "group": "LastWinner",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "allowedValues": [
              "1",
              "2",
              "3"
            ],
            "optional": true,
            "field": "status",
            "defaultValue": "2",
            "description": "<p>游戏状态过滤：1进行中，2已结束，3所有</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "pageNumber",
            "description": "<p>第几页,从1开始</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页数量</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"round_id\": 1,  // 游戏轮次,第X期\n    \"activate_pot\": 999,    // 游戏奖池\n    \"winner_name\": \"获胜玩家姓名\",\n    \"end\": \"2019-12-01 16:00:00\",\n    \"ended\": true       # 是否已结束\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "api/last_winner.py",
    "groupTitle": "LastWinner"
  },
  {
    "type": "get",
    "url": "/python/game/last_winner/rounds/{round_id:int}/pool_rank",
    "title": "分红排行榜",
    "name": "RoundPoolRank",
    "group": "LastWinner",
    "version": "0.0.1",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"rank_id\": 1,   // 名次\n    \"user_name\": \"用户昵称\",\n    \"pool\": 1.33   // 分红金额\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "api/last_winner.py",
    "groupTitle": "LastWinner",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "pageNumber",
            "description": "<p>第几页,从1开始</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页数量</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/",
    "title": "非分页返回的结构",
    "name": "NormalStructure",
    "group": "Structure",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"msg\": \"服务正常\",\n    \"status\": 10000,\n    \"result\": {}/[]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/apidoc.py",
    "groupTitle": "Structure"
  },
  {
    "type": "get",
    "url": "/",
    "title": "分页返回的结构",
    "name": "PageStructure",
    "group": "Structure",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"msg\": \"服务正常\",\n    \"status\": 10000,\n    \"result\": {\n        \"totalCount\": 0,\n        \"data\": []\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/apidoc.py",
    "groupTitle": "Structure"
  }
] });

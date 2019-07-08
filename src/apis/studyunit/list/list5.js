/*
 * @Author: zhanghongqiao
 * @Date: 2019-07-010:03:08
 * @Email: 991034150@qq.com
 * @Description: 我的课程（单元学习）
 * @Last Modified by: zhanghongqiao
 * @Last Modified time: 2019-07-08 21:33:06
 */

export default{
  url: '/studyunit5',
  mock: {
    erroCode: 2000,
    erroMsg: null,
    result: [
      {
        id: 1,
        topic: 'Travel',
        ch: '旅行',
        list: [
          {
            img: 'https://cns2.ef-cdn.com/Juno/12/22/52/v/122252/GE_5.1.1_talking_web.jpg',
            title: 'Talking about flight arrangements',
            chTitle: '谈论航班安排',
            id: 1,
            steps: [
              {
                title: '词汇',
                contain: 'Travel vocabulary',
                ch: '旅行词汇',
                isDetail: false,
              }, {
                title: '语法',
                contain: 'Present perfect',
                ch: '现在完成时'
              }, {
                title: '表达',
                contain: 'Asking for and giving flight information',
                ch: '询问和告知航班信息'
              }, {
                title: '最终任务',
                contain: 'Talking about flight arrangements',
                ch: '谈论飞行计划',
              }
            ],
          }, {
            img: 'https://cns.ef-cdn.com/Juno/12/22/53/v/122253/GE_5.1.2_checking_web.jpg',
            title: 'Checking in for a flight',
            chTitle: '办理登机',
            id: 2,
            steps: [
              {
                title: '表达',
                contain: 'Checking in at an airport',
                ch: '在机场办理登机',
                isDetail: false,
              }, {
                title: '阅读',
                contain: 'Reading a boarding pass',
                ch: '阅读登机牌',
                isDetail: false,
              }, {
                title: '最终任务',
                contain: 'Checking in for a flight',
                ch: '办理登机',
              },
            ],
          }, {
            img: 'https://cns.ef-cdn.com/Juno/51/09/11/v/510911/5.1.3.jpg',
            title: 'Getting to your hotel',
            chTitle: '前往您入住的酒店',
            id: 3,
            steps: [
              {
                title: '词汇',
                contain: 'Airport transportation',
                ch: '机场交通',
                isDetail: false,
              }, {
                title: '语法',
                contain: "'Have to' for necessity or obligation",
                ch: "'Have to' 表示必需或者义务'"
              }, {
                title: '发音',
                contain: "Reduced forms of 'have to'",
                ch: "Have to' 的省略形式"
              }, {
                title: '表达',
                contain: 'Presenting options',
                ch: '提出不同选择'
              }, {
                title: '最终任务',
                contain: 'Getting to your hotel',
                ch: '前往您入住的酒店',

              },
            ]
          }, {
            img: 'https://cns.ef-cdn.com/Juno/51/09/12/v/510912/5.1.4.jpg',
            title: "Letting someone know you've arrived",
            chTitle: '告知他人您已抵达',
            id: 4,
            steps: [
              {
                title: '语法',
                contain: 'More past participles',
                ch: '更多的过去分词',
                isDetail: false,
              }, {
                title: '表达',
                contain: 'Foreign travel',
                ch: '国外旅行'
              }, {
                title: '语法',
                contain: 'Adverbs for the present perfect',
                ch: '现在完成时使用的副词'
              }, {
                title: '阅读',
                contain: "A traveler's blog",
                ch: '旅行日志',
                isDetail: false,
              }, {
                title: '最终任务',
                contain: "Letting someone know you've arrived",
                ch: '告知他人您已抵达',
                isDetail: false,
              },
            ],
          },
        ]
      }, {
        id: 2,
        topic: 'Making decisions',
        ch: '做决定',
        list: [
          {
            img: 'https://cns.ef-cdn.com/Juno/12/22/56/v/122256/GE_5.2.1_talking_web_V2.jpg',
            title: 'Comparing options',
            chTitle: '比较选择',
            id: 1,
            steps: [
              {
                title: '语法',
                contain: "Using 'as ... as'",
                ch: "使用 'as ... as'"
              }, {
                title: '表达',
                contain: 'Introducing ideas',
                ch: '介绍观点'
              }, {
                title: '最终任务',
                contain: 'Deciding on a conference venue',
                ch: '决定一个会议地点',
                isDetail: false,
              },
            ],
          }, {
            img: 'https://cns1.ef-cdn.com/Juno/12/22/57/v/122257/GE_5.2.2_describing_web_V2.jpg',
            title: 'Making decisions',
            chTitle: '做决定',
            id: 2,
            steps: [
              {
                title: '语法',
                contain: 'The superlative',
                ch: '最高级'
              }, {
                title: '表达',
                contain: 'Disagreeing',
                ch: '表示异议'
              }, {
                title: '听力',
                contain: 'Understanding main ideas',
                ch: '理解主要思想'
              }, {
                title: '最终任务',
                contain: 'Deciding where to go for a conference',
                ch: '决定去哪里开会',
                isDetail: false,
              },
            ],
          }, {
            img: 'https://cns1.ef-cdn.com/Juno/12/22/58/v/122258/GE_5.2.3_recommending_web.jpg',
            title: 'Discussing the details',
            chTitle: '讨论细节',
            id: 3,
            steps: [
              {
                title: '词汇',
                contain: 'Conference language',
                ch: '会议语言',
                isDetail: false,
              }, {
                title: '表达',
                contain: 'Suggesting and recommending',
                ch: '建议和推荐'
              }, {
                title: '最终任务',
                contain: 'Advising the boss',
                ch: '向老板提出建议',
              },
            ],
          }, {
            img: 'https://cns1.ef-cdn.com/Juno/12/22/55/v/122255/GE_5.2.4_describing_web_V2.jpg',
            title: 'Summarizing decisions',
            chTitle: '总结决定',
            id: 4,
            steps: [
              {
                title: '阅读',
                contain: 'Reading for specific information',
                ch: '阅读具体信息'
              }, {
                title: '表达',
                contain: 'Reporting and referring to decisions',
                ch: '报告并指代决定'
              }, {
                title: '最终任务',
                contain: 'Summarizing decisions',
                ch: '总结决定',
                isDetail: false,
              },
            ],
          },
        ]
      }, {
        id: 3,
        topic: 'Telling stories',
        ch: '讲述故事',
        list: [
          {
            img: 'https://cns1.ef-cdn.com/Juno/12/22/60/v/122260/GE_5.3.1_explaining_web.jpg',
            title: 'Explaining how you met someone',
            chTitle: '解释你和某人的相识',
            id: 1,
            steps: [
              {
                title: '语法',
                contain: 'Past continuous',
                ch: '过去进行时'
              }, {
                title: '口语',
                contain: 'Telling a story',
                ch: '讲述故事'
              }, {
                title: '表达',
                contain: 'Sequencing events',
                ch: '按顺序排列事件'
              }, {
                title: '最终任务',
                contain: 'Explaining how you met someone',
                ch: '总结决定',
                isDetail: false,
              },
            ],
          }, {
            img: 'https://cns.ef-cdn.com/Juno/12/22/61/v/122261/GE_5.3.2_writing_web.jpg',
            title: 'Talking about a relationship',
            chTitle: '谈论关系',
            id: 2,
            steps: [
              {
                title: '词汇',
                contain: 'Relationships',
                ch: '关系'
              }, {
                title: '语法',
                contain: "'When' clauses with past continuous",
                ch: "搭配过去进行时的 'When' 从句"
              }, {
                title: '写作',
                contain: 'Giving details and examples',
                ch: '提供细节和例子'
              }, {
                title: '最终任务',
                contain: 'Talking about a relationship',
                ch: '谈论关系',
                isDetail: false,
              },
            ],
          }, {
            img: 'https://cns.ef-cdn.com/Juno/12/22/62/v/122262/GE_5.3.3_talking_web_v2.jpg',
            title: 'Talking about a good experience',
            chTitle: '谈论美好的经历',
            id: 3,
            steps: [
              {
                title: '词汇',
                contain: 'Adjectives and adverbs',
                ch: '形容词和副词'
              }, {
                title: '语法',
                contain: 'Stative verbs',
                ch: '状态动词'
              }, {
                title: '表达',
                contain: 'Expressing feelings',
                ch: '表达情感'
              }, {
                title: '口语',
                contain: 'The narrative present',
                ch: '叙述现在时'
              }, {
                title: '最终任务',
                contain: 'Talking about a good experience',
                ch: '谈论美好的经历',

              },
            ],
          }, {
            img: 'https://cns.ef-cdn.com/Juno/12/22/59/v/122259/GE_5.3.4_telling_web.jpg',
            title: 'Telling a story about a bad experience',
            chTitle: '讲述有关糟糕经历的故事',
            id: 4,
            steps: [
              {
                title: '词汇',
                contain: 'Disasters and emergencies',
                ch: '灾难和紧急事件',
                isDetail: false,
              }, {
                title: '语法',
                contain: "'While' clauses with past continuous",
                ch: "搭配过去进行时的 'While' 从句"
              }, {
                title: '口语',
                contain: 'Sentence stress',
                ch: '句中重读'
              }, {
                title: '表达',
                contain: 'Listener expressions for stories',
                ch: '听众听故事的反应'
              }, {
                title: '最终任务',
                contain: 'Telling a story about a bad experience',
                ch: '讲述有关糟糕经历的故事',

              },
            ],
          },
        ]
      }, {
        id: 4,
        topic: 'Going to a restaurant',
        ch: '去餐馆',
        list: [
          {
            img: 'https://cns2.ef-cdn.com/Juno/12/22/64/v/122264/GE_5.4.1_making_web.jpg',
            title: 'Making a restaurant reservation',
            chTitle: '预订餐位',
            id: 1,
            steps: [
              {
                title: '词汇',
                contain: 'Restaurants',
                ch: '餐馆',
              }, {
                title: '听力',
                contain: 'Learning about restaurants online',
                ch: '网上了解餐馆',
                isDetail: false,
              }, {
                title: '表达',
                contain: 'Making restaurant reservations',
                ch: '预订餐位'
              }, {
                title: '最终任务',
                contain: 'Making a restaurant reservation',
                ch: '预订餐位'
              }
            ],
          },
          {
            img: 'https://cns1.ef-cdn.com/Juno/12/22/65/v/122265/GE_5.4.2_talking_web.jpg',
            title: 'Arriving at a restaurant',
            chTitle: '抵达餐厅',
            id: 2,
            steps: [
              {
                title: '表达',
                contain: 'Getting seated',
                ch: '入座',
              }, {
                title: '词汇',
                contain: 'Parts of a meal',
                ch: '一顿饭的各部分'
              }, {
                title: '语法',
                contain: "'Some' and 'any'",
                ch: "'Some' 和 'any'"
              }, {
                title: '表达',
                contain: 'Talking with the waiter',
                ch: '和服务员交谈',
                isDetail: false,
              }, {
                title: '最终任务',
                contain: 'Arriving at a restaurant',
                ch: '到达餐馆'
              }
            ],
          }, {
            img: 'https://cns1.ef-cdn.com/Juno/12/22/66/v/122266/GE_5.4.3_ordering_web.jpg',
            title: 'Ordering food in a restaurant',
            chTitle: '在餐馆点菜',
            id: 3,
            steps: [
              {
                title: '词汇',
                contain: 'Restaurant food',
                ch: '餐馆食物',
                isDetail: false,
              }, {
                title: '阅读',
                contain: 'Reading a menu',
                ch: '看菜单'
              }, {
                title: '语法',
                contain: 'Quantifiers for ordering in a restaurant',
                ch: '餐馆点菜使用的量词'
              }, {
                title: '表达',
                contain: 'Ordering food',
                ch: '点菜',
                isDetail: false,
              }, {
                title: '最终任务',
                contain: 'Ordering food in a restaurant',
                ch: '在餐馆点菜'
              }
            ],
          }, {
            img: 'https://cns1.ef-cdn.com/Juno/12/22/63/v/122263/GE_5.4.4_asking_web.jpg',
            title: 'Asking for the check and paying the bill',
            chTitle: '询问账单和付账',
            id: 4,
            steps: [
              {
                title: '词汇',
                contain: 'Paying for a meal',
                ch: '付饭钱',
              }, {
                title: '阅读',
                contain: 'Reading a restaurant review',
                ch: '阅读餐馆评论',
                isDetail: false,
              }, {
                title: '表达',
                contain: 'Asking for the check and paying',
                ch: '询问账单和付账'
              }, {
                title: '最终任务',
                contain: 'Asking for the check and paying the bill',
                ch: '询问账单和付账'
              }
            ],
          }
        ]
      },
      {
        id: 5,
        topic: 'Movies',
        ch: '电影',
        list: [
          {
            img: 'https://cns1.ef-cdn.com/Juno/12/22/68/v/122268/GE_5.5.1_talking_web.jpg',
            title: 'Talking about a movie you recently saw',
            chTitle: '谈论你最近看过的电影',
            id: 1,
            steps: [
              {
                title: '词汇',
                contain: 'Movie genres',
                ch: '电影类型',
                isDetail: false,
              }, {
                title: '语法',
                contain: "'One' as a replacement noun",
                ch: "'One' 作为替换名词'",
              }, {
                title: '语法',
                contain: "Giving opinions with 'I think that'",
                ch: "用 'I think that' 表达意见",
              }, {
                title: '最终任务',
                contain: 'Talking about a movie you recently saw',
                ch: '谈论你最近看过的电影',
              }
            ],
          },
          {
            img: 'https://cns.ef-cdn.com/Juno/12/22/69/v/122269/GE_5.5.2_describing_web.jpg',
            title: 'Describing your favorite movie',
            chTitle: '描述你最爱的电影',
            id: 2,
            steps: [
              {
                title: '词汇',
                contain: 'Movie vocabulary',
                ch: '电影词汇',
              }, {
                title: '表达',
                contain: "'One of the' and 'some of the'",
                ch: "One of the' 和 'some of the'",
              }, {
                title: '表达',
                contain: 'Asking about and describing a movie',
                ch: '询问和描述电影',
              }, {
                title: '最终任务',
                contain: 'Describing your favorite movie',
                ch: '描述你最爱的电影',
                isDetail: false,
              }
            ],
          },
          {
            img: 'https://cns.ef-cdn.com/Juno/12/22/70/v/122270/GE_5.5.3_choosing_web.jpg',
            title: 'Choosing a movie to see',
            chTitle: '选择一部要看的电影',
            id: 3,
            steps: [
              {
                title: '词汇',
                contain: 'More movie vocabulary',
                ch: '更多电影词汇',
              }, {
                title: '语法',
                contain: 'Present passive',
                ch: '现在时被动语态',
              }, {
                title: '表达',
                contain: 'What do you want to see?',
                ch: '您想看什么呢？',
              }, {
                title: '最终任务',
                contain: 'Deciding on a movie to see',
                ch: '决定去看哪个电影',
                isDetail: false,
              }
            ]
          },
          {
            img: 'https://cns.ef-cdn.com/Juno/12/22/67/v/122267/GE_5.5.4_writing_web.jpg',
            title: 'Writing about a movie',
            chTitle: '写关于一个电影',
            id: 4,
            steps: [
              {
                title: '词汇',
                contain: 'Adjectives for movies',
                ch: '描述电影的形容词',
                isDetail: false,
              }, {
                title: '语法',
                contain: 'Past passive',
                ch: '过去时被动语态',
              }, {
                title: '表达',
                contain: 'Reading a movie review',
                ch: '阅读影评',
              }, {
                title: '最终任务',
                contain: 'Writing about a movie',
                ch: '描述一部电影',
                isDetail: false,
              }
            ]
          }
        ],
      },
      {
        id: 6,
        topic: 'Clothes and outfits',
        ch: '衣服与服装',
        list: [
          {
            img: 'https://cns2.ef-cdn.com/Juno/12/22/72/v/122272/GE_5.6.1_talking_web_v2.jpg',
            title: 'Shopping for an outfit',
            chTitle: '购买服装',
            id: 1,
            steps: [
              {
                title: '词汇',
                contain: 'Fashion adjectives',
                ch: '有关时尚的形容词'
              }, {
                title: '语法',
                contain: 'Multiword verbs',
                ch: '多词动词'
              }, {
                title: '表达',
                contain: 'Expressing preferences',
                ch: '表达偏爱'
              }, {
                title: '表达',
                contain: 'Decisions',
                ch: '决定'
              }, {
                title: '最终任务',
                contain: "Talking about people's outfits",
                ch: '谈论人的服装',
                isDetail: false,
              }
            ],
          }, {
            img: 'https://cns2.ef-cdn.com/Juno/51/09/13/v/510913/5.6.2.jpg',
            title: "Talking about people's outfits",
            chTitle: '谈论他人的服装',
            id: 2,
            steps: [
              {
                title: '词汇',
                contain: 'Clothing and accessories',
                ch: '衣服和配饰',
                isDetail: false,
              }, {
                title: '表达',
                contain: 'Talking about fashion trends',
                ch: '谈论时尚潮流',
                isDetail: false,
              }, {
                title: '语法',
                contain: 'Opinions about clothes',
                ch: '关于衣服的看法'
              }, {
                title: '最终任务',
                contain: 'Discussing outfits',
                ch: '讨论着装',

              }
            ],
          }, {
            img: 'https://cns2.ef-cdn.com/Juno/12/22/74/v/122274/GE_5.6.3_complimenting_web.jpg',
            title: 'Discussing dress requirements',
            chTitle: '讨论着装要求',
            id: 3,
            steps: [
              {
                title: '词汇',
                contain: 'Adjectives for clothes',
                ch: '修饰衣服的形容词'
              }, {
                title: '词汇',
                contain: 'Fabrics',
                ch: '面料',
                isDetail: false,
              }, {
                title: '语法',
                contain: 'Advice and obligation',
                ch: '建议与义务'
              }, {
                title: '最终任务',
                contain: 'What should I wear?',
                ch: '我该穿什么？ ',
                isDetail: false,
              }
            ],
          }, {
            img: 'https://cns2.ef-cdn.com/Juno/12/22/71/v/122271/GE_5.6.4_writing_web_v2.jpg',
            title: 'Complimenting people on their outfits',
            chTitle: '赞美他人的服装',
            id: 4,
            steps: [
              {
                title: '词汇',
                contain: 'Amazing adjectives',
                ch: '了不起的形容词'
              }, {
                title: '表达',
                contain: 'Compliments',
                ch: '赞美'
              }, {
                title: '语法',
                contain: 'Reassurances',
                ch: '保证'
              }, {
                title: '最终任务',
                contain: 'Complimenting a friend',
                ch: '称赞朋友',
                isDetail: false,
              }
            ],
          }
        ],
      },
    ]
  }
};


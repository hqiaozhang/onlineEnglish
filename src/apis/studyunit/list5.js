/*
 * @Author: zhanghongqiao
 * @Date: 2019-07-010:03:08
 * @Email: 991034150@qq.com
 * @Description: 我的课程（单元学习）
 * @Last Modified by: zhanghongqiao
 * @Last Modified time: 2019-07-04 17:52:40
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
        list: [
          {
            img: 'https://cns2.ef-cdn.com/Juno/12/22/52/v/122252/GE_5.1.1_talking_web.jpg',
            title: 'Talking about flight arrangements',
            id: 1
          }, {
            img: 'https://cns.ef-cdn.com/Juno/12/22/53/v/122253/GE_5.1.2_checking_web.jpg',
            title: 'Checking in for a flight',
            id: 2
          }, {
            img: 'https://cns.ef-cdn.com/Juno/51/09/11/v/510911/5.1.3.jpg',
            title: 'Getting to your hotel',
            id: 3
          }, {
            img: 'https://cns.ef-cdn.com/Juno/51/09/12/v/510912/5.1.4.jpg',
            title: "Letting someone know you've arrived",
            id: 4
          },
        ]
      }, {
        id: 2,
        topic: 'Making decisions',
        list: [
          {
            img: 'https://cns.ef-cdn.com/Juno/12/22/56/v/122256/GE_5.2.1_talking_web_V2.jpg',
            title: 'Comparing options',
            id: 1
          }, {
            img: 'https://cns1.ef-cdn.com/Juno/12/22/57/v/122257/GE_5.2.2_describing_web_V2.jpg',
            title: 'Making decisions',
            id: 2
          }, {
            img: 'https://cns1.ef-cdn.com/Juno/12/22/58/v/122258/GE_5.2.3_recommending_web.jpg',
            title: 'Discussing the details',
            id: 3
          }, {
            img: 'https://cns1.ef-cdn.com/Juno/12/22/55/v/122255/GE_5.2.4_describing_web_V2.jpg',
            title: 'Summarizing decisions',
            id: 4
          },
        ]
      }, {
        id: 3,
        topic: 'Telling stories',
        list: [
          {
            img: 'https://cns1.ef-cdn.com/Juno/12/22/60/v/122260/GE_5.3.1_explaining_web.jpg',
            title: 'Explaining how you met someone',
            id: 1
          }, {
            img: 'https://cns.ef-cdn.com/Juno/12/22/61/v/122261/GE_5.3.2_writing_web.jpg',
            title: 'Talking about a relationship',
            id: 2
          }, {
            img: 'https://cns.ef-cdn.com/Juno/12/22/62/v/122262/GE_5.3.3_talking_web_v2.jpg',
            title: 'Talking about a good experience',
            id: 3
          }, {
            img: 'https://cns.ef-cdn.com/Juno/12/22/59/v/122259/GE_5.3.4_telling_web.jpg',
            title: 'Telling a story about a bad experience',
            id: 4
          },
        ]
      }, {
        id: 4,
        topic: 'Going to a restaurant',
        list: [
          {
            img: 'https://cns2.ef-cdn.com/Juno/12/22/64/v/122264/GE_5.4.1_making_web.jpg',
            title: 'Making a restaurant reservation',
            id: 1
          },
          {
            img: 'https://cns1.ef-cdn.com/Juno/12/22/65/v/122265/GE_5.4.2_talking_web.jpg',
            title: 'Arriving at a restaurant',
            id: 2
          }, {
            img: 'https://cns1.ef-cdn.com/Juno/12/22/66/v/122266/GE_5.4.3_ordering_web.jpg',
            title: 'Ordering food in a restaurant',
            id: 3
          }, {
            img: 'https://cns1.ef-cdn.com/Juno/12/22/63/v/122263/GE_5.4.4_asking_web.jpg',
            title: 'Asking for the check and paying the bill',
            id: 4
          }
        ]
      },
      {
        id: 5,
        topic: 'Movies',

        list: [
          {
            img: 'https://cns1.ef-cdn.com/Juno/12/22/68/v/122268/GE_5.5.1_talking_web.jpg',
            title: 'Talking about a movie you recently saw',
            id: 1
          },
          {
            img: 'https://cns.ef-cdn.com/Juno/12/22/69/v/122269/GE_5.5.2_describing_web.jpg',
            title: 'Describing your favorite movie',
            id: 2
          },
          {
            img: 'https://cns.ef-cdn.com/Juno/12/22/70/v/122270/GE_5.5.3_choosing_web.jpg',
            title: 'Choosing a movie to see',
            id: 3,
          },
          {
            img: 'https://cns.ef-cdn.com/Juno/12/22/67/v/122267/GE_5.5.4_writing_web.jpg',
            title: 'Writing about a movie',
            id: 4
          }
        ],
      },
      {
        id: 6,
        topic: 'Clothes and outfits',
        list: [
          {
            img: 'https://cns2.ef-cdn.com/Juno/12/22/72/v/122272/GE_5.6.1_talking_web_v2.jpg',
            title: 'Shopping for an outfit',
            id: 1,
            steps: [
              {
                title: '语汇',
                contain: '有关时尚的形容词 Fashion adjectives',
              }, {
                title: '语法',
                contain: '多词动词 Multiword verbs',
              }, {
                title: '表达',
                contain: '表达偏爱 Expressing preferences',
              }, {
                title: '表达',
                contain: '决定 Decisions',
              }, {
                title: '最终任务',
                contain: "谈论人的服装 Talking about people's outfits",
                isDetail: false,
              }
            ],
          }, {
            img: 'https://cns2.ef-cdn.com/Juno/51/09/13/v/510913/5.6.2.jpg',
            title: "Talking about people's outfits",
            id: 2,
            steps: [
              {
                title: '词汇',
                contain: '衣服和配饰 Clothing and accessories',
                isDetail: false,
              }, {
                title: '表达',
                contain: '谈论时尚潮流 Talking about fashion trends',
                isDetail: false,
              }, {
                title: '语法',
                contain: '关于衣服的看法 Opinions about clothes',
              }, {
                title: '最终任务',
                contain: '讨论着装 Discussing outfits',
                isDetail: false,
              }
            ],
          }, {
            img: 'https://cns2.ef-cdn.com/Juno/12/22/74/v/122274/GE_5.6.3_complimenting_web.jpg',
            title: 'Discussing dress requirements',
            id: 3,
            steps: [
              {
                title: '词汇',
                contain: '修饰衣服的形容词 Adjectives for clothes',
              }, {
                title: '词汇',
                contain: '面料 Fabrics',
                isDetail: false,
              }, {
                title: '语法',
                contain: '建议与义务 Advice and obligation',
              }, {
                title: '最终任务',
                contain: '我该穿什么？ What should I wear?',
                isDetail: false,
              }
            ],
          }, {
            img: 'https://cns2.ef-cdn.com/Juno/12/22/71/v/122271/GE_5.6.4_writing_web_v2.jpg',
            title: 'Complimenting people on their outfits',
            id: 4,
            steps: [
              {
                title: '词汇',
                contain: '了不起的形容词 Amazing adjectives',
              }, {
                title: '表达',
                contain: '赞美 Compliments',
              }, {
                title: '语法',
                contain: '保证 Reassurances',
              }, {
                title: '最终任务',
                contain: '称赞朋友 Complimenting a friend',
                isDetail: false,
              }
            ],
          }
        ],
      },
    ]
  }
};


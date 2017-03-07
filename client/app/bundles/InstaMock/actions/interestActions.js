export function getMockInterests(){
  return {
    type: 'FETCH_MOCK_INTERESTS',
    payload:[
      { id: 0,
        interestURL: 'http://www.ricettapizzanapoletana.it/images/pizza-napoletana.jpg',
        clicks: 0
      },
      { id: 1,
        interestURL: 'http://www.inter-news.it/files/2016/07/Logo-Inter-maglia-2016-2017.jpg',
        clicks: 0
      },
      { id: 2,
        interestURL: 'http://dnest-inventors.eu/news/wp-content/uploads/2016/09/energia-marina.jpg',
        clicks: 0
      },
      { id: 3,
        interestURL: 'https://uploads.toptal.io/blog/category/logo/291/react.png',
        clicks: 0
      },
      { id: 4,
        interestURL: 'https://camo.githubusercontent.com/f28b5bc7822f1b7bb28a96d8d09e7d79169248fc/687474703a2f2f692e696d6775722e636f6d2f4a65567164514d2e706e67',
        clicks: 0
      },
      { id: 5,
        interestURL: 'http://static1.squarespace.com/static/569824005dc6def15849e064/t/56a192d5d82d5ee027b29693/1484696483894/',
        clicks: 0
      }
        ]
    }
  }

export function interestClickInc(interestID){
  return {
    type:'INTER_INC',
    payload:{
      interestID: interestID
    }
  }
}

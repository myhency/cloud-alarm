const stockItems = [
  {
    "id": 1,
    "itemName": "삼성전자",
    "itemCode": "005930",
    "theme": "3D 낸드(NAND), 4차산업 수혜주, 5G(5세대 이동통신), 가상현실(VR), 갤럭시 부품주, 고령화 사회(노인복지), 공기청정기, 마이크로 LED, 무선충전기술, 반도체 대표주(생산), 삼성페이, 스마트폰, 스마트홈(홈네트워크), 시스템반도체, 아이폰, 의료기기, 자율주행차, 제습기, 폴더블폰, 플렉서블 디스플레이, IT 대표주, LED, OLED(유기 발광 다이오드), RFID(NFC 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 2,
    "itemName": "SK하이닉스",
    "itemCode": "000660",
    "theme": "3D 낸드(NAND), 반도체 대표주(생산), 시스템반도체, 아이폰, 자율주행차, IT 대표주",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 3,
    "itemName": "LG화학",
    "itemCode": "051910",
    "theme": "2차전지, 2차전지(생산), 고령화 사회(노인복지), 바이오시밀러(복제 바이오의약품), 석유화학, 아이폰, 전기차, 전력저장장치(ESS), 탄소나노튜브(CNT), K-뉴딜지수, K-뉴딜지수(2차전지), OLED(유기 발광 다이오드)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 4,
    "itemName": "NAVER",
    "itemCode": "035420",
    "theme": "4차산업 수혜주, 가상화폐(비트코인 등), 게임, 메타버스(Metaverse), 모바일게임(스마트폰), 모바일콘텐츠(스마트폰/태블릿PC), 블록체인, 웹툰, 음성인식, 인터넷 대표주, 자율주행차, 핀테크(FinTech), K-뉴딜지수, K-뉴딜지수(인터넷), SNS(소셜네트워크서비스)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 5,
    "itemName": "현대차",
    "itemCode": "005380",
    "theme": "수소차(연료전지/부품/충전소 등), 자동차 대표주, 자율주행차, 전기차",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 6,
    "itemName": "삼성바이오로직스",
    "itemCode": "207940",
    "theme": "바이오시밀러(복제 바이오의약품), 제약업체, K-뉴딜지수, K-뉴딜지수(바이오)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 7,
    "itemName": "삼성SDI",
    "itemCode": "006400",
    "theme": "2차전지, 2차전지(생산), 스마트폰, 아이폰, 전기자전거, 전기차, 전력저장장치(ESS), IT 대표주, K-뉴딜지수, K-뉴딜지수(2차전지), LCD 부품/소재",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 8,
    "itemName": "카카오",
    "itemCode": "035720",
    "theme": "가상화폐(비트코인 등), 두나무 관련주, 모바일콘텐츠(스마트폰/태블릿PC), 블록체인, 엔터테인먼트, 웹툰, 음성인식, 음원/음반, 인터넷 대표주, 인터넷은행, 카카오뱅크 관련주, 핀테크(FinTech), K-뉴딜지수, K-뉴딜지수(인터넷), SNS(소셜네트워크서비스)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 9,
    "itemName": "셀트리온",
    "itemCode": "068270",
    "theme": "바이오시밀러(복제 바이오의약품), 코로나19(진단/치료제/백신 개발 등), 코로나19(치료제/백신 개발 등), K-뉴딜지수, K-뉴딜지수(바이오)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 10,
    "itemName": "현대모비스",
    "itemCode": "012330",
    "theme": "수소차(연료전지/부품/충전소 등), 스마트카(SMART CAR), 음성인식, 자동차 대표주, 자동차부품, 자율주행차, 전기차, 차량용블랙박스",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 11,
    "itemName": "POSCO",
    "itemCode": "005490",
    "theme": "2차전지, 2차전지(소재/부품), 철강 주요종목, 환율하락 수혜, 희귀금속(희토류 등), LNG(액화천연가스)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 12,
    "itemName": "LG전자",
    "itemCode": "066570",
    "theme": "4차산업 수혜주, 5G(5세대 이동통신), 가상현실(VR), 공기청정기, 마이크로 LED, 무선충전기술, 스마트홈(홈네트워크), 자율주행차, 전기차, 전력저장장치(ESS), 제습기, 지능형로봇/인공지능(AI), 태양광에너지, IT 대표주, LED, OLED(유기 발광 다이오드)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 13,
    "itemName": "LG생활건강",
    "itemCode": "051900",
    "theme": "건강기능식품, 여름, 음식료업종, 화장품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 14,
    "itemName": "삼성물산",
    "itemCode": "028260",
    "theme": "건설 대표주, 자원개발, 종합상사, 지주사, 패션/의류",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 15,
    "itemName": "KB금융",
    "itemCode": "105560",
    "theme": "은행, 인터넷은행, 지주사, 카카오뱅크 관련주",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 16,
    "itemName": "SK이노베이션",
    "itemCode": "096770",
    "theme": "2차전지, 2차전지(생산), 석유화학, 자원개발, 전기차, 전력저장장치(ESS), 정유, 폴더블폰, 플렉서블 디스플레이, K-뉴딜지수, K-뉴딜지수(2차전지), LPG(액화석유가스)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 17,
    "itemName": "삼성전자",
    "itemCode": "005930",
    "theme": "3D 낸드(NAND), 4차산업 수혜주, 5G(5세대 이동통신), 가상현실(VR), 갤럭시 부품주, 고령화 사회(노인복지), 공기청정기, 마이크로 LED, 무선충전기술, 반도체 대표주(생산), 삼성페이, 스마트폰, 스마트홈(홈네트워크), 시스템반도체, 아이폰, 의료기기, 자율주행차, 제습기, 폴더블폰, 플렉서블 디스플레이, IT 대표주, LED, OLED(유기 발광 다이오드), RFID(NFC 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 18,
    "itemName": "SK하이닉스",
    "itemCode": "000660",
    "theme": "3D 낸드(NAND), 반도체 대표주(생산), 시스템반도체, 아이폰, 자율주행차, IT 대표주",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 19,
    "itemName": "LG화학",
    "itemCode": "051910",
    "theme": "2차전지, 2차전지(생산), 고령화 사회(노인복지), 바이오시밀러(복제 바이오의약품), 석유화학, 아이폰, 전기차, 전력저장장치(ESS), 탄소나노튜브(CNT), K-뉴딜지수, K-뉴딜지수(2차전지), OLED(유기 발광 다이오드)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 20,
    "itemName": "NAVER",
    "itemCode": "035420",
    "theme": "4차산업 수혜주, 가상화폐(비트코인 등), 게임, 메타버스(Metaverse), 모바일게임(스마트폰), 모바일콘텐츠(스마트폰/태블릿PC), 블록체인, 웹툰, 음성인식, 인터넷 대표주, 자율주행차, 핀테크(FinTech), K-뉴딜지수, K-뉴딜지수(인터넷), SNS(소셜네트워크서비스)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 21,
    "itemName": "현대차",
    "itemCode": "005380",
    "theme": "수소차(연료전지/부품/충전소 등), 자동차 대표주, 자율주행차, 전기차",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 22,
    "itemName": "삼성바이오로직스",
    "itemCode": "207940",
    "theme": "바이오시밀러(복제 바이오의약품), 제약업체, K-뉴딜지수, K-뉴딜지수(바이오)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 23,
    "itemName": "삼성SDI",
    "itemCode": "006400",
    "theme": "2차전지, 2차전지(생산), 스마트폰, 아이폰, 전기자전거, 전기차, 전력저장장치(ESS), IT 대표주, K-뉴딜지수, K-뉴딜지수(2차전지), LCD 부품/소재",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 24,
    "itemName": "카카오",
    "itemCode": "035720",
    "theme": "가상화폐(비트코인 등), 두나무 관련주, 모바일콘텐츠(스마트폰/태블릿PC), 블록체인, 엔터테인먼트, 웹툰, 음성인식, 음원/음반, 인터넷 대표주, 인터넷은행, 카카오뱅크 관련주, 핀테크(FinTech), K-뉴딜지수, K-뉴딜지수(인터넷), SNS(소셜네트워크서비스)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 25,
    "itemName": "셀트리온",
    "itemCode": "068270",
    "theme": "바이오시밀러(복제 바이오의약품), 코로나19(진단/치료제/백신 개발 등), 코로나19(치료제/백신 개발 등), K-뉴딜지수, K-뉴딜지수(바이오)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 26,
    "itemName": "현대모비스",
    "itemCode": "012330",
    "theme": "수소차(연료전지/부품/충전소 등), 스마트카(SMART CAR), 음성인식, 자동차 대표주, 자동차부품, 자율주행차, 전기차, 차량용블랙박스",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 27,
    "itemName": "POSCO",
    "itemCode": "005490",
    "theme": "2차전지, 2차전지(소재/부품), 철강 주요종목, 환율하락 수혜, 희귀금속(희토류 등), LNG(액화천연가스)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 28,
    "itemName": "LG전자",
    "itemCode": "066570",
    "theme": "4차산업 수혜주, 5G(5세대 이동통신), 가상현실(VR), 공기청정기, 마이크로 LED, 무선충전기술, 스마트홈(홈네트워크), 자율주행차, 전기차, 전력저장장치(ESS), 제습기, 지능형로봇/인공지능(AI), 태양광에너지, IT 대표주, LED, OLED(유기 발광 다이오드)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 29,
    "itemName": "LG생활건강",
    "itemCode": "051900",
    "theme": "건강기능식품, 여름, 음식료업종, 화장품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 30,
    "itemName": "삼성물산",
    "itemCode": "028260",
    "theme": "건설 대표주, 자원개발, 종합상사, 지주사, 패션/의류",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 31,
    "itemName": "KB금융",
    "itemCode": "105560",
    "theme": "은행, 인터넷은행, 지주사, 카카오뱅크 관련주",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 32,
    "itemName": "SK이노베이션",
    "itemCode": "096770",
    "theme": "2차전지, 2차전지(생산), 석유화학, 자원개발, 전기차, 전력저장장치(ESS), 정유, 폴더블폰, 플렉서블 디스플레이, K-뉴딜지수, K-뉴딜지수(2차전지), LPG(액화석유가스)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 33,
    "itemName": "엔씨소프트",
    "itemCode": "036570",
    "theme": "게임, 모바일게임(스마트폰), 증강현실(AR), K-뉴딜지수, K-뉴딜지수(게임)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 34,
    "itemName": "SK텔레콤",
    "itemCode": "017670",
    "theme": "4차산업 수혜주, 5G(5세대 이동통신), 메타버스(Metaverse), 모바일콘텐츠(스마트폰/태블릿PC), 백신여권, 블록체인, 스마트홈(홈네트워크), 자율주행차, 클라우드 컴퓨팅, 통신, RFID(NFC 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 35,
    "itemName": "신한지주",
    "itemCode": "055550",
    "theme": "은행, 지주사",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 36,
    "itemName": "셀트리온헬스케어",
    "itemCode": "091990",
    "theme": "바이오시밀러(복제 바이오의약품), K-뉴딜지수, K-뉴딜지수(바이오)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 37,
    "itemName": "SK",
    "itemCode": "034730",
    "theme": "4차산업 수혜주, 블록체인, 수소차(연료전지/부품/충전소 등), 스마트팩토리(스마트공장), 조림사업, 지주사, 클라우드 컴퓨팅, 핀테크(FinTech), LNG(액화천연가스), RFID(NFC 등), SI(시스템통합)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 38,
    "itemName": "삼성생명",
    "itemCode": "032830",
    "theme": "생명보험",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 39,
    "itemName": "LG",
    "itemCode": "003550",
    "theme": "블록체인, 스마트팩토리(스마트공장), 지주사",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 40,
    "itemName": "한국전력",
    "itemCode": "015760",
    "theme": "남북경협, 셰일가스(Shale Gas), 원자력발전, 전력설비, 태양광에너지, 풍력에너지, 환율하락 수혜, LNG(액화천연가스)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 41,
    "itemName": "삼성에스디에스",
    "itemCode": "018260",
    "theme": "4차산업 수혜주, 블록체인, 사물인터넷, 스마트팩토리(스마트공장), 클라우드 컴퓨팅, IT 대표주, SI(시스템통합)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 42,
    "itemName": "삼성전기",
    "itemCode": "009150",
    "theme": "갤럭시 부품주, 무선충전기술, 아이폰, 자율주행차, 폴더블폰, MLCC(적층세라믹콘덴서), PCB(FPCB 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 43,
    "itemName": "아모레퍼시픽",
    "itemCode": "090430",
    "theme": "화장품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 44,
    "itemName": "하나금융지주",
    "itemCode": "086790",
    "theme": "은행, 지주사",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 45,
    "itemName": "포스코케미칼",
    "itemCode": "003670",
    "theme": "2차전지, 2차전지(소재/부품), 북한 광물자원개발, K-뉴딜지수, K-뉴딜지수(2차전지)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 46,
    "itemName": "KT&G",
    "itemCode": "033780",
    "theme": "건강기능식품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 47,
    "itemName": "롯데케미칼",
    "itemCode": "011170",
    "theme": "석유화학",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 48,
    "itemName": "넷마블",
    "itemCode": "251270",
    "theme": "가상현실(VR), 게임, 모바일게임(스마트폰), 증강현실(AR), 카카오뱅크 관련주, K-뉴딜지수, K-뉴딜지수(게임)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 49,
    "itemName": "S-Oil",
    "itemCode": "010950",
    "theme": "정유, 환율하락 수혜, LPG(액화석유가스)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 50,
    "itemName": "삼성화재",
    "itemCode": "000810",
    "theme": "손해보험",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 51,
    "itemName": "한온시스템",
    "itemCode": "018880",
    "theme": "수소차(연료전지/부품/충전소 등), 자동차 대표주, 자동차부품, 전기차",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 52,
    "itemName": "SK바이오팜",
    "itemCode": "326030",
    "theme": "2020 하반기 신규상장, 제약업체, K-뉴딜지수, K-뉴딜지수(바이오)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 53,
    "itemName": "한국조선해양",
    "itemCode": "009540",
    "theme": "방위산업/전쟁 및 테러, 선박평형수 처리장치, 조선, 지주사, 풍력에너지, LNG(액화천연가스)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 54,
    "itemName": "LG디스플레이",
    "itemCode": "034220",
    "theme": "스마트폰, 아이폰, 폴더블폰, 플렉서블 디스플레이, IT 대표주, OLED(유기 발광 다이오드)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 55,
    "itemName": "고려아연",
    "itemCode": "010130",
    "theme": "비철금속, 환율하락 수혜",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 56,
    "itemName": "우리금융지주",
    "itemCode": "316140",
    "theme": "은행, 지주사",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 57,
    "itemName": "현대글로비스",
    "itemCode": "086280",
    "theme": "종합 물류",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 58,
    "itemName": "KT",
    "itemCode": "030200",
    "theme": "4차산업 수혜주, 5G(5세대 이동통신), 드론(Drone), 모바일콘텐츠(스마트폰/태블릿PC), 백신여권, 블록체인, 스마트홈(홈네트워크), 인터넷은행, 자율주행차, 클라우드 컴퓨팅, 통신, 핀테크(FinTech), RFID(NFC 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 59,
    "itemName": "한화솔루션",
    "itemCode": "009830",
    "theme": "석유화학, 수소차(연료전지/부품/충전소 등), 日 수출 규제(국산화 등), 태양광에너지",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 60,
    "itemName": "기업은행",
    "itemCode": "024110",
    "theme": "은행",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 61,
    "itemName": "HMM",
    "itemCode": "011200",
    "theme": "해운",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 62,
    "itemName": "금호석유",
    "itemCode": "011780",
    "theme": "석유화학, 타이어, 탄소나노튜브(CNT)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 63,
    "itemName": "CJ제일제당",
    "itemCode": "097950",
    "theme": "사료, 음식료업종, 환율하락 수혜",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 64,
    "itemName": "현대제철",
    "itemCode": "004020",
    "theme": "수소차(연료전지/부품/충전소 등), 철강 주요종목, 철도, 환율하락 수혜",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 65,
    "itemName": "한국타이어앤테크놀로지",
    "itemCode": "161390",
    "theme": "타이어",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 66,
    "itemName": "강원랜드",
    "itemCode": "035250",
    "theme": "카지노",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 67,
    "itemName": "아모레G",
    "itemCode": "002790",
    "theme": "지주사",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 68,
    "itemName": "셀트리온제약",
    "itemCode": "068760",
    "theme": "바이오시밀러(복제 바이오의약품), 제약업체, K-뉴딜지수, K-뉴딜지수(바이오)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 69,
    "itemName": "LG유플러스",
    "itemCode": "032640",
    "theme": "4차산업 수혜주, 5G(5세대 이동통신), 사물인터넷, 스마트홈(홈네트워크), 통신",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 70,
    "itemName": "신풍제약",
    "itemCode": "019170",
    "theme": "구충제(펜벤다졸 등), 제약업체, 코로나19(진단/치료제/백신 개발 등), 코로나19(치료제/백신 개발 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 71,
    "itemName": "오리온",
    "itemCode": "271560",
    "theme": "음식료업종, 환율하락 수혜",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 72,
    "itemName": "코웨이",
    "itemCode": "021240",
    "theme": "공기청정기, 수자원(양적/질적 개선), 여름, 제습기, 화장품, 황사/미세먼지",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 73,
    "itemName": "이마트",
    "itemCode": "139480",
    "theme": "소매유통, 편의점",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 74,
    "itemName": "LG이노텍",
    "itemCode": "011070",
    "theme": "무선충전기술, 스마트카(SMART CAR), 스마트폰, 아이폰, 자동차부품, 자율주행차, 카메라모듈/부품, 휴대폰부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 75,
    "itemName": "대한항공",
    "itemCode": "003490",
    "theme": "드론(Drone), 방위산업/전쟁 및 테러, 우주항공산업, 항공/저가 항공사(LCC), 항공기부품, 환율하락 수혜",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 76,
    "itemName": "한국금융지주",
    "itemCode": "071050",
    "theme": "인터넷은행, 증권, 지주사, 카카오뱅크 관련주",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 77,
    "itemName": "현대건설",
    "itemCode": "000720",
    "theme": "건설 대표주, 남북경협, 원자력발전, 테마파크, GTX(수도권 광역급행철도)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 78,
    "itemName": "현대중공업지주",
    "itemCode": "267250",
    "theme": "지주사",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 79,
    "itemName": "SKC",
    "itemCode": "011790",
    "theme": "2차전지, 2차전지(소재/부품), 석유화학, 전기차, 태양광에너지, 폴더블폰, 플렉서블 디스플레이, K-뉴딜지수, K-뉴딜지수(2차전지), LCD 부품/소재",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 80,
    "itemName": "유한양행",
    "itemCode": "000100",
    "theme": "겨울, 면역항암제, 제약업체, 치매, 코로나19(덱사메타손), K-뉴딜지수, K-뉴딜지수(바이오)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 81,
    "itemName": "삼성중공업",
    "itemCode": "010140",
    "theme": "조선, GTX(수도권 광역급행철도), LNG(액화천연가스)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 82,
    "itemName": "에이치엘비",
    "itemCode": "028300",
    "theme": "줄기세포",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 83,
    "itemName": "두산중공업",
    "itemCode": "034020",
    "theme": "셰일가스(Shale Gas), 수자원(양적/질적 개선), 원자력발전, 원자력발전소 해체, 전력설비, 풍력에너지, 항공기부품, 핵융합에너지",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 84,
    "itemName": "한미사이언스",
    "itemCode": "008930",
    "theme": "지주사, K-뉴딜지수, K-뉴딜지수(바이오)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 85,
    "itemName": "녹십자",
    "itemCode": "006280",
    "theme": "겨울, 남북경협, 바이오시밀러(복제 바이오의약품), 유전자 치료제/분석, 제대혈, 제약업체, 코로나19(모더나), 코로나19(진단/치료제/백신 개발 등), 코로나19(치료제/백신 개발 등), 코로나19(혈장치료/혈장치료제)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 86,
    "itemName": "한진칼",
    "itemCode": "180640",
    "theme": "지주사, 항공/저가 항공사(LCC)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 87,
    "itemName": "삼성카드",
    "itemCode": "029780",
    "theme": "삼성페이",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 88,
    "itemName": "CJ대한통운",
    "itemCode": "000120",
    "theme": "드론(Drone), 종합 물류",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 89,
    "itemName": "펄어비스",
    "itemCode": "263750",
    "theme": "게임, 모바일게임(스마트폰), K-뉴딜지수, K-뉴딜지수(게임)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 90,
    "itemName": "롯데쇼핑",
    "itemCode": "023530",
    "theme": "백화점, 소매유통, 영화, 홈쇼핑",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 91,
    "itemName": "한미약품",
    "itemCode": "128940",
    "theme": "겨울, 바이오시밀러(복제 바이오의약품), 제약업체, K-뉴딜지수, K-뉴딜지수(바이오)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 92,
    "itemName": "카카오게임즈",
    "itemCode": "293490",
    "theme": "2020 하반기 신규상장, 게임, 모바일게임(스마트폰), 크래프톤 관련주",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 93,
    "itemName": "GS",
    "itemCode": "078930",
    "theme": "자원개발, 정유, 지주사, LNG(액화천연가스), LPG(액화석유가스)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 94,
    "itemName": "롯데지주",
    "itemCode": "004990",
    "theme": "지주사, 편의점",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 95,
    "itemName": "SK머티리얼즈",
    "itemCode": "036490",
    "theme": "3D 낸드(NAND), 반도체 재료/부품, 日 수출 규제(국산화 등), 태양광에너지, 플렉서블 디스플레이",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 96,
    "itemName": "씨젠",
    "itemCode": "096530",
    "theme": "슈퍼박테리아, 유전자 치료제/분석, 코로나19(진단/치료제/백신 개발 등), 코로나19(진단키트), K-뉴딜지수, K-뉴딜지수(바이오)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 97,
    "itemName": "SK케미칼",
    "itemCode": "285130",
    "theme": "석유화학, 치매, 코로나19(나파모스타트)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 98,
    "itemName": "두산밥캣",
    "itemCode": "241560",
    "theme": "건설기계, 지주사",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 99,
    "itemName": "삼성증권",
    "itemCode": "016360",
    "theme": "증권",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 100,
    "itemName": "호텔신라",
    "itemCode": "008770",
    "theme": "면세점, 소매유통",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 101,
    "itemName": "알테오젠",
    "itemCode": "196170",
    "theme": "바이오시밀러(복제 바이오의약품), K-뉴딜지수, K-뉴딜지수(바이오)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 102,
    "itemName": "GS건설",
    "itemCode": "006360",
    "theme": "건설 대표주, 수자원(양적/질적 개선), 원자력발전, GTX(수도권 광역급행철도)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 103,
    "itemName": "에코프로비엠",
    "itemCode": "247540",
    "theme": "2차전지, 2차전지(소재/부품), K-뉴딜지수, K-뉴딜지수(2차전지)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 104,
    "itemName": "한국항공우주",
    "itemCode": "047810",
    "theme": "드론(Drone), 방위산업/전쟁 및 테러, 우주항공산업, 항공기부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 105,
    "itemName": "에스원",
    "itemCode": "012750",
    "theme": "보안주(물리), 스마트홈(홈네트워크), MVNO(가상이동통신망사업자)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 106,
    "itemName": "DB손해보험",
    "itemCode": "005830",
    "theme": "손해보험",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 107,
    "itemName": "NH투자증권",
    "itemCode": "005940",
    "theme": "인터넷은행, 증권",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 108,
    "itemName": "더존비즈온",
    "itemCode": "012510",
    "theme": "스마트팩토리(스마트공장), 재택근무/스마트워크, 클라우드 컴퓨팅, K-뉴딜지수, K-뉴딜지수(인터넷)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 109,
    "itemName": "팬오션",
    "itemCode": "028670",
    "theme": "해운, LNG(액화천연가스)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 110,
    "itemName": "CJ ENM",
    "itemCode": "035760",
    "theme": "미디어(방송/신문), 소매유통, 엔터테인먼트, 영상콘텐츠, 영화, 음원/음반, 케이블TV SO/MSO, 홈쇼핑",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 111,
    "itemName": "키움증권",
    "itemCode": "039490",
    "theme": "증권",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 112,
    "itemName": "두산퓨얼셀",
    "itemCode": "336260",
    "theme": "수소차(연료전지/부품/충전소 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 113,
    "itemName": "한국가스공사",
    "itemCode": "036460",
    "theme": "겨울, 도시가스, 셰일가스(Shale Gas), 자원개발, 환율하락 수혜, LNG(액화천연가스)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 114,
    "itemName": "동서",
    "itemCode": "026960",
    "theme": "음식료업종",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 115,
    "itemName": "BGF리테일",
    "itemCode": "282330",
    "theme": "소매유통, 편의점",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 116,
    "itemName": "일진머티리얼즈",
    "itemCode": "020150",
    "theme": "2차전지, 2차전지(소재/부품), K-뉴딜지수, K-뉴딜지수(2차전지), PCB(FPCB 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 117,
    "itemName": "OCI",
    "itemCode": "010060",
    "theme": "태양광에너지",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 118,
    "itemName": "한화생명",
    "itemCode": "088350",
    "theme": "생명보험, 인터넷은행",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 119,
    "itemName": "신세계",
    "itemCode": "004170",
    "theme": "면세점, 백화점, 소매유통",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 120,
    "itemName": "GS리테일",
    "itemCode": "007070",
    "theme": "소매유통, 인터넷은행, 편의점",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 121,
    "itemName": "만도",
    "itemCode": "204320",
    "theme": "스마트카(SMART CAR), 자동차 대표주, 자동차부품, 자율주행차, 전기자전거, 전기차",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 122,
    "itemName": "대우조선해양",
    "itemCode": "042660",
    "theme": "방위산업/전쟁 및 테러, 조선",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 123,
    "itemName": "스튜디오드래곤",
    "itemCode": "253450",
    "theme": "엔터테인먼트, 영상콘텐츠",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 124,
    "itemName": "메리츠증권",
    "itemCode": "008560",
    "theme": "증권",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 125,
    "itemName": "포스코인터내셔널",
    "itemCode": "047050",
    "theme": "셰일가스(Shale Gas), 자원개발, 종합상사",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 126,
    "itemName": "삼성엔지니어링",
    "itemCode": "028050",
    "theme": "수자원(양적/질적 개선)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 127,
    "itemName": "CJ",
    "itemCode": "001040",
    "theme": "지주사",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 128,
    "itemName": "하이트진로",
    "itemCode": "000080",
    "theme": "여름, 음식료업종, 日제품 불매운동(수혜), 환율하락 수혜",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 129,
    "itemName": "씨에스윈드",
    "itemCode": "112610",
    "theme": "풍력에너지",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 130,
    "itemName": "휠라홀딩스",
    "itemCode": "081660",
    "theme": "패션/의류",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 131,
    "itemName": "한솔케미칼",
    "itemCode": "014680",
    "theme": "3D 낸드(NAND), OLED(유기 발광 다이오드)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 132,
    "itemName": "제넥신",
    "itemCode": "095700",
    "theme": "면역항암제, 유전자 치료제/분석, 코로나19(진단/치료제/백신 개발 등), 코로나19(치료제/백신 개발 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 133,
    "itemName": "한샘",
    "itemCode": "009240",
    "theme": "리모델링/인테리어",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 134,
    "itemName": "현대오토에버",
    "itemCode": "307950",
    "theme": "SI(시스템통합)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 135,
    "itemName": "케이엠더블유",
    "itemCode": "032500",
    "theme": "5G(5세대 이동통신), 통신장비, K-뉴딜지수, K-뉴딜지수(인터넷), LED",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 136,
    "itemName": "제일기획",
    "itemCode": "030000",
    "theme": "광고",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 137,
    "itemName": "원익IPS",
    "itemCode": "240810",
    "theme": "3D 낸드(NAND), 반도체 장비, 태양광에너지, LCD장비, OLED(유기 발광 다이오드)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 138,
    "itemName": "현대미포조선",
    "itemCode": "010620",
    "theme": "조선, LNG(액화천연가스)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 139,
    "itemName": "대우건설",
    "itemCode": "047040",
    "theme": "건설 대표주, 수자원(양적/질적 개선), 원자력발전, GTX(수도권 광역급행철도)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 140,
    "itemName": "DB하이텍",
    "itemCode": "000990",
    "theme": "반도체 대표주(생산), 스마트카(SMART CAR), 시스템반도체",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 141,
    "itemName": "솔브레인",
    "itemCode": "357780",
    "theme": "2차전지, 2차전지(소재/부품), 반도체 재료/부품, 日 수출 규제(국산화 등), LCD 부품/소재",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 142,
    "itemName": "리노공업",
    "itemCode": "058470",
    "theme": "반도체 장비, 시스템반도체",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 143,
    "itemName": "현대로템",
    "itemCode": "064350",
    "theme": "방위산업/전쟁 및 테러, 수소차(연료전지/부품/충전소 등), 우주항공산업, 철도, GTX(수도권 광역급행철도)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 144,
    "itemName": "DL이앤씨",
    "itemCode": "375500",
    "theme": "건설 대표주, 원자력발전, GTX(수도권 광역급행철도)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 145,
    "itemName": "메리츠화재",
    "itemCode": "000060",
    "theme": "손해보험",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 146,
    "itemName": "대한유화",
    "itemCode": "006650",
    "theme": "2차전지, 2차전지(소재/부품), 석유화학",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 147,
    "itemName": "현대위아",
    "itemCode": "011210",
    "theme": "공작기계, 방위산업/전쟁 및 테러, 자동차 대표주, 자동차부품, 전기차, 항공기부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 148,
    "itemName": "셀리버리",
    "itemCode": "268600",
    "theme": "코로나19(진단/치료제/백신 개발 등), 코로나19(치료제/백신 개발 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 149,
    "itemName": "BNK금융지주",
    "itemCode": "138930",
    "theme": "은행, 지주사",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 150,
    "itemName": "오뚜기",
    "itemCode": "007310",
    "theme": "음식료업종, 환율하락 수혜",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 151,
    "itemName": "한화",
    "itemCode": "000880",
    "theme": "방위산업/전쟁 및 테러, 우주항공산업, 지주사, 태양광에너지",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 152,
    "itemName": "현대해상",
    "itemCode": "001450",
    "theme": "손해보험",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 153,
    "itemName": "현대백화점",
    "itemCode": "069960",
    "theme": "면세점, 백화점, 소매유통",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 154,
    "itemName": "휴젤",
    "itemCode": "145020",
    "theme": "보톡스(보툴리눔톡신)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 155,
    "itemName": "F&F",
    "itemCode": "007700",
    "theme": "패션/의류",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 156,
    "itemName": "LS",
    "itemCode": "006260",
    "theme": "무선충전기술, 전력설비, 전선, 지주사, 풍력에너지, 해저터널(지하화/지하도로 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 157,
    "itemName": "한화시스템",
    "itemCode": "272210",
    "theme": "드론(Drone), 방위산업/전쟁 및 테러, 우주항공산업, SI(시스템통합)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 158,
    "itemName": "대웅",
    "itemCode": "003090",
    "theme": "지주사, 코로나19(진단/치료제/백신 개발 등), 코로나19(치료제/백신 개발 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 159,
    "itemName": "효성티앤씨",
    "itemCode": "298020",
    "theme": "종합상사, 타이어, 화학섬유",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 160,
    "itemName": "티씨케이",
    "itemCode": "064760",
    "theme": "반도체 장비, 반도체 재료/부품, 태양광에너지, LED장비",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 161,
    "itemName": "한화에어로스페이스",
    "itemCode": "012450",
    "theme": "드론(Drone), 반도체 장비, 방위산업/전쟁 및 테러, 보안주(물리), 우주항공산업, 지능형로봇/인공지능(AI), 항공기부품, CCTV＆DVR",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 162,
    "itemName": "종근당",
    "itemCode": "185750",
    "theme": "바이오시밀러(복제 바이오의약품), 제약업체, 치매, 코로나19(나파모스타트), 코로나19(진단/치료제/백신 개발 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 163,
    "itemName": "엘앤에프",
    "itemCode": "066970",
    "theme": "2차전지, 2차전지(소재/부품), 전기차",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 164,
    "itemName": "메리츠금융지주",
    "itemCode": "138040",
    "theme": "지주사",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 165,
    "itemName": "HDC현대산업개발",
    "itemCode": "294870",
    "theme": "건설 대표주, GTX(수도권 광역급행철도)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 166,
    "itemName": "KCC",
    "itemCode": "002380",
    "theme": "리모델링/인테리어, 태양광에너지, 페인트",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 167,
    "itemName": "현대엘리베이",
    "itemCode": "017800",
    "theme": "남북경협, 정치/인맥(김무성)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 168,
    "itemName": "영원무역",
    "itemCode": "111770",
    "theme": "겨울, 패션/의류",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 169,
    "itemName": "LS ELECTRIC",
    "itemCode": "010120",
    "theme": "수소차(연료전지/부품/충전소 등), 스마트그리드(지능형전력망), 스마트팩토리(스마트공장), 원자력발전, 전기차, 전력설비, 전력저장장치(ESS), 태양광에너지",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 170,
    "itemName": "현대바이오",
    "itemCode": "048410",
    "theme": "코로나19(진단/치료제/백신 개발 등), 코로나19(치료제/백신 개발 등), 화장품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 171,
    "itemName": "컴투스",
    "itemCode": "078340",
    "theme": "게임, 모바일게임(스마트폰), 모바일콘텐츠(스마트폰/태블릿PC), K-뉴딜지수, K-뉴딜지수(게임)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 172,
    "itemName": "농심",
    "itemCode": "004370",
    "theme": "음식료업종, 환율하락 수혜",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 173,
    "itemName": "두산인프라코어",
    "itemCode": "042670",
    "theme": "건설기계, LNG(액화천연가스)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 174,
    "itemName": "효성",
    "itemCode": "004800",
    "theme": "삼성페이, 지주사, 풍력에너지",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 175,
    "itemName": "아이에스동서",
    "itemCode": "010780",
    "theme": "건설 중소형",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 176,
    "itemName": "파라다이스",
    "itemCode": "034230",
    "theme": "카지노",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 177,
    "itemName": "메드팩토",
    "itemCode": "235980",
    "theme": "면역항암제",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 178,
    "itemName": "녹십자홀딩스",
    "itemCode": "005250",
    "theme": "고령화 사회(노인복지), 지주사, U-Healthcare(원격진료)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 179,
    "itemName": "한국앤컴퍼니",
    "itemCode": "000240",
    "theme": "전기차, 지주사, 타이어",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 180,
    "itemName": "천보",
    "itemCode": "278280",
    "theme": "2차전지, 2차전지(소재/부품), 반도체 재료/부품, K-뉴딜지수, K-뉴딜지수(2차전지), LCD 부품/소재, OLED(유기 발광 다이오드)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 181,
    "itemName": "박셀바이오",
    "itemCode": "323990",
    "theme": "2020 하반기 신규상장, 면역항암제",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 182,
    "itemName": "고영",
    "itemCode": "098460",
    "theme": "반도체 장비, 스마트팩토리(스마트공장), 시스템반도체, 지능형로봇/인공지능(AI)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 183,
    "itemName": "에스에프에이",
    "itemCode": "056190",
    "theme": "반도체 장비, 우주항공산업, 태양광에너지, 플렉서블 디스플레이, 핵융합에너지, LCD장비, OLED(유기 발광 다이오드)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 184,
    "itemName": "동진쎄미켐",
    "itemCode": "005290",
    "theme": "반도체 재료/부품, 日 수출 규제(국산화 등), LCD 부품/소재",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 185,
    "itemName": "콜마비앤에이치",
    "itemCode": "200130",
    "theme": "건강기능식품, 화장품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 186,
    "itemName": "부광약품",
    "itemCode": "003000",
    "theme": "제약업체, 코로나19(덱사메타손), 코로나19(진단/치료제/백신 개발 등), 코로나19(치료제/백신 개발 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 187,
    "itemName": "신세계인터내셔날",
    "itemCode": "031430",
    "theme": "패션/의류, 화장품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 188,
    "itemName": "대웅제약",
    "itemCode": "069620",
    "theme": "바이오시밀러(복제 바이오의약품), 보톡스(보툴리눔톡신), 제약업체, 치매, 코로나19(진단/치료제/백신 개발 등), 코로나19(진단키트), 코로나19(치료제/백신 개발 등), 코로나19(카모스타트)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 189,
    "itemName": "코오롱인더",
    "itemCode": "120110",
    "theme": "두나무 관련주, 석유화학, 수소차(연료전지/부품/충전소 등), 타이어, 패션/의류, 폴더블폰, 플렉서블 디스플레이, 화학섬유, LCD 부품/소재",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 190,
    "itemName": "메지온",
    "itemCode": "140410",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 191,
    "itemName": "NICE평가정보",
    "itemCode": "030190",
    "theme": "인터넷은행",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 192,
    "itemName": "에코프로",
    "itemCode": "086520",
    "theme": "2차전지, 2차전지(소재/부품), 온실가스(탄소배출권)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 193,
    "itemName": "효성첨단소재",
    "itemCode": "298050",
    "theme": "수소차(연료전지/부품/충전소 등), 자동차부품, 타이어",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 194,
    "itemName": "SFA반도체",
    "itemCode": "036540",
    "theme": "반도체 장비, 시스템반도체",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 195,
    "itemName": "DGB금융지주",
    "itemCode": "139130",
    "theme": "은행, 지주사",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 196,
    "itemName": "NHN",
    "itemCode": "181710",
    "theme": "게임, 모바일게임(스마트폰), 웹툰, 재택근무/스마트워크, 전자결제(전자화폐), K-뉴딜지수, K-뉴딜지수(게임)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 197,
    "itemName": "롯데관광개발",
    "itemCode": "032350",
    "theme": "여행, 카지노",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 198,
    "itemName": "롯데정밀화학",
    "itemCode": "004000",
    "theme": "남북경협, 농업, 비료, 태풍 및 장마",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 199,
    "itemName": "에스티팜",
    "itemCode": "237690",
    "theme": "제약업체, 코로나19(렘데시비르), 코로나19(모더나)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 200,
    "itemName": "한국콜마",
    "itemCode": "161890",
    "theme": "화장품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 201,
    "itemName": "지누스",
    "itemCode": "013890",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 202,
    "itemName": "레고켐바이오",
    "itemCode": "141080",
    "theme": "슈퍼박테리아, 의료기기, 코로나19(진단/치료제/백신 개발 등), 코로나19(치료제/백신 개발 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 203,
    "itemName": "SK네트웍스",
    "itemCode": "001740",
    "theme": "마켓컬리 관련주, 자원개발, 종합상사",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 204,
    "itemName": "KG동부제철",
    "itemCode": "016380",
    "theme": "철강 주요종목",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 205,
    "itemName": "솔루스첨단소재",
    "itemCode": "336370",
    "theme": "2차전지, 2차전지(소재/부품), 전기차, K-뉴딜지수, K-뉴딜지수(2차전지), OLED(유기 발광 다이오드)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 206,
    "itemName": "동국제약",
    "itemCode": "086450",
    "theme": "마스크, 제약업체",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 207,
    "itemName": "한전KPS",
    "itemCode": "051600",
    "theme": "원자력발전, 원자력발전소 해체, 전력설비",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 208,
    "itemName": "이오테크닉스",
    "itemCode": "039030",
    "theme": "반도체 장비, LED장비",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 209,
    "itemName": "웹젠",
    "itemCode": "069080",
    "theme": "게임, 모바일게임(스마트폰), K-뉴딜지수, K-뉴딜지수(게임)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 210,
    "itemName": "JB금융지주",
    "itemCode": "175330",
    "theme": "은행, 지주사",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 211,
    "itemName": "JYP Ent.",
    "itemCode": "035900",
    "theme": "엔터테인먼트, 영상콘텐츠, 음원/음반",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 212,
    "itemName": "DL",
    "itemCode": "000210",
    "theme": "지주사",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 213,
    "itemName": "PI첨단소재",
    "itemCode": "178920",
    "theme": "2차전지, 2차전지(소재/부품), 5G(5세대 이동통신), 갤럭시 부품주, 日 수출 규제(국산화 등), 폴더블폰, 플렉서블 디스플레이, PCB(FPCB 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 214,
    "itemName": "메디톡스",
    "itemCode": "086900",
    "theme": "보톡스(보툴리눔톡신)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 215,
    "itemName": "이노션",
    "itemCode": "214320",
    "theme": "광고",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 216,
    "itemName": "삼천당제약",
    "itemCode": "000250",
    "theme": "제약업체",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 217,
    "itemName": "다우기술",
    "itemCode": "023590",
    "theme": "클라우드 컴퓨팅, SI(시스템통합)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 218,
    "itemName": "동원시스템즈",
    "itemCode": "014820",
    "theme": "2차전지, 2차전지(소재/부품)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 219,
    "itemName": "솔루엠",
    "itemCode": "248070",
    "theme": "2021 상반기 신규상장",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 220,
    "itemName": "한올바이오파마",
    "itemCode": "009420",
    "theme": "메르스 코로나 바이러스, 면역항암제, 바이오시밀러(복제 바이오의약품), 제약업체, 코로나19(덱사메타손)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 221,
    "itemName": "영풍",
    "itemCode": "000670",
    "theme": "비철금속, 아이폰",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 222,
    "itemName": "코스맥스",
    "itemCode": "192820",
    "theme": "화장품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 223,
    "itemName": "금호타이어",
    "itemCode": "073240",
    "theme": "타이어",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 224,
    "itemName": "세방전지",
    "itemCode": "004490",
    "theme": "2차전지, 전력저장장치(ESS)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 225,
    "itemName": "아시아나항공",
    "itemCode": "020560",
    "theme": "항공/저가 항공사(LCC), 환율하락 수혜",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 226,
    "itemName": "오스템임플란트",
    "itemCode": "048260",
    "theme": "고령화 사회(노인복지), 의료기기, 치아 치료(임플란트 등), U-Healthcare(원격진료)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 227,
    "itemName": "롯데칠성",
    "itemCode": "005300",
    "theme": "여름, 음식료업종",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 228,
    "itemName": "영진약품",
    "itemCode": "003520",
    "theme": "면역항암제, 슈퍼박테리아, 제약업체",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 229,
    "itemName": "포스코 ICT",
    "itemCode": "022100",
    "theme": "4차산업 수혜주, 무선충전기술, 스마트그리드(지능형전력망), 스마트팩토리(스마트공장), 스마트홈(홈네트워크), 인터넷은행, 전기차, 전력저장장치(ESS), 클라우드 컴퓨팅, 황사/미세먼지, SI(시스템통합)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 230,
    "itemName": "SK디스커버리",
    "itemCode": "006120",
    "theme": "지주사",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 231,
    "itemName": "나노스",
    "itemCode": "151910",
    "theme": "카메라모듈/부품, 휴대폰부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 232,
    "itemName": "서울반도체",
    "itemCode": "046890",
    "theme": "마이크로 LED, 휴대폰부품, LED",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 233,
    "itemName": "에스엘",
    "itemCode": "005850",
    "theme": "자동차부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 234,
    "itemName": "한미반도체",
    "itemCode": "042700",
    "theme": "반도체 장비, 시스템반도체, 전자파, 태양광에너지, LED장비",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 235,
    "itemName": "명신산업",
    "itemCode": "009900",
    "theme": "2020 하반기 신규상장, 자동차부품, 전기차",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 236,
    "itemName": "GKL",
    "itemCode": "114090",
    "theme": "카지노",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 237,
    "itemName": "에이치엘비생명과학",
    "itemCode": "067630",
    "theme": "줄기세포",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 238,
    "itemName": "보령제약",
    "itemCode": "003850",
    "theme": "제약업체, 치매, 코로나19(스푸트니크V), 황사/미세먼지",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 239,
    "itemName": "LG상사",
    "itemCode": "001120",
    "theme": "자원개발, 종합상사",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 240,
    "itemName": "NHN한국사이버결제",
    "itemCode": "060250",
    "theme": "삼성페이, 전자결제(전자화폐), 핀테크(FinTech), K-뉴딜지수, K-뉴딜지수(인터넷)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 241,
    "itemName": "차바이오텍",
    "itemCode": "085660",
    "theme": "고령화 사회(노인복지), 면역항암제, 제대혈, 줄기세포, U-Healthcare(원격진료)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 242,
    "itemName": "코리안리",
    "itemCode": "003690",
    "theme": "생명보험, 손해보험",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 243,
    "itemName": "아이티엠반도체",
    "itemCode": "084850",
    "theme": "2차전지, 2차전지(소재/부품), 아이폰",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 244,
    "itemName": "실리콘웍스",
    "itemCode": "108320",
    "theme": "시스템반도체, 아이폰, LCD 부품/소재, OLED(유기 발광 다이오드)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 245,
    "itemName": "화승엔터프라이즈",
    "itemCode": "241590",
    "theme": "지주사, 패션/의류",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 246,
    "itemName": "더블유게임즈",
    "itemCode": "192080",
    "theme": "게임, 모바일게임(스마트폰), K-뉴딜지수, K-뉴딜지수(게임)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 247,
    "itemName": "태광산업",
    "itemCode": "003240",
    "theme": "석유화학, 케이블TV SO/MSO, 홈쇼핑, 화학섬유",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 248,
    "itemName": "에이비엘바이오",
    "itemCode": "298380",
    "theme": "면역항암제, 치매",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 249,
    "itemName": "CJ CGV",
    "itemCode": "079160",
    "theme": "영화",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 250,
    "itemName": "풍산",
    "itemCode": "103140",
    "theme": "방위산업/전쟁 및 테러, 비철금속, 화폐/금융자동화기기(디지털화폐 등), 환율하락 수혜",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 251,
    "itemName": "티와이홀딩스",
    "itemCode": "363280",
    "theme": "수자원(양적/질적 개선), 지주사",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 252,
    "itemName": "덕산네오룩스",
    "itemCode": "213420",
    "theme": "갤럭시 부품주, 스마트폰, 아이폰, 플렉서블 디스플레이, OLED(유기 발광 다이오드)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 253,
    "itemName": "현대그린푸드",
    "itemCode": "005440",
    "theme": "음식료업종",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 254,
    "itemName": "녹십자랩셀",
    "itemCode": "144510",
    "theme": "면역항암제, 제대혈, 줄기세포, 콜드체인(저온 유통)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 255,
    "itemName": "오스코텍",
    "itemCode": "039200",
    "theme": "고령화 사회(노인복지), 면역항암제, 치아 치료(임플란트 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 256,
    "itemName": "동국제강",
    "itemCode": "001230",
    "theme": "철강 주요종목, 환율하락 수혜",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 257,
    "itemName": "파미셀",
    "itemCode": "005690",
    "theme": "줄기세포, 코로나19(렘데시비르), 코로나19(모더나), 코로나19(진단/치료제/백신 개발 등), 코로나19(진단키트), 화장품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 258,
    "itemName": "한섬",
    "itemCode": "020000",
    "theme": "패션/의류",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 259,
    "itemName": "진에어",
    "itemCode": "272450",
    "theme": "항공/저가 항공사(LCC)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 260,
    "itemName": "현대홈쇼핑",
    "itemCode": "057050",
    "theme": "소매유통, 홈쇼핑",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 261,
    "itemName": "안랩",
    "itemCode": "053800",
    "theme": "보안주(정보), 정치/인맥(안철수), 클라우드 컴퓨팅, K-뉴딜지수, K-뉴딜지수(인터넷)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 262,
    "itemName": "동원산업",
    "itemCode": "006040",
    "theme": "구제역/광우병 수혜, 수산",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 263,
    "itemName": "젬백스",
    "itemCode": "082270",
    "theme": "치매",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 264,
    "itemName": "엠씨넥스",
    "itemCode": "097520",
    "theme": "갤럭시 부품주, 드론(Drone), 바이오인식(생체인식), 스마트카(SMART CAR), 자율주행차, 차량용블랙박스, 카메라모듈/부품, 휴대폰부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 265,
    "itemName": "하나투어",
    "itemCode": "039130",
    "theme": "여행, 환율하락 수혜",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 266,
    "itemName": "제주항공",
    "itemCode": "089590",
    "theme": "항공/저가 항공사(LCC)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 267,
    "itemName": "동화기업",
    "itemCode": "025900",
    "theme": "2차전지, 2차전지(소재/부품), 리모델링/인테리어",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 268,
    "itemName": "휴켐스",
    "itemCode": "069260",
    "theme": "온실가스(탄소배출권)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 269,
    "itemName": "와이지엔터테인먼트",
    "itemCode": "122870",
    "theme": "엔터테인먼트, 음원/음반",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 270,
    "itemName": "솔브레인홀딩스",
    "itemCode": "036830",
    "theme": "지주사",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 271,
    "itemName": "쿠쿠홈시스",
    "itemCode": "284740",
    "theme": "공기청정기, 여름, 제습기",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 272,
    "itemName": "유진테크",
    "itemCode": "084370",
    "theme": "3D 낸드(NAND), 반도체 장비",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 273,
    "itemName": "후성",
    "itemCode": "093370",
    "theme": "2차전지, 2차전지(소재/부품), 3D 낸드(NAND), 반도체 재료/부품, 여름, 온실가스(탄소배출권), 日 수출 규제(국산화 등), K-뉴딜지수, K-뉴딜지수(2차전지)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 274,
    "itemName": "롯데하이마트",
    "itemCode": "071840",
    "theme": "소매유통, 여름, 황사/미세먼지",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 275,
    "itemName": "아프리카TV",
    "itemCode": "067160",
    "theme": "가상현실(VR), K-뉴딜지수, K-뉴딜지수(인터넷), SNS(소셜네트워크서비스)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 276,
    "itemName": "오리온홀딩스",
    "itemCode": "001800",
    "theme": "지주사",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 277,
    "itemName": "인트론바이오",
    "itemCode": "048530",
    "theme": "슈퍼박테리아, 코로나19(진단/치료제/백신 개발 등), 코로나19(진단키트)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 278,
    "itemName": "대상",
    "itemCode": "001680",
    "theme": "음식료업종, 환율하락 수혜",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 279,
    "itemName": "대한해운",
    "itemCode": "005880",
    "theme": "해운, 환율하락 수혜, LNG(액화천연가스)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 280,
    "itemName": "RFHIC",
    "itemCode": "218410",
    "theme": "5G(5세대 이동통신), 통신장비",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 281,
    "itemName": "한세실업",
    "itemCode": "105630",
    "theme": "패션/의류",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 282,
    "itemName": "네패스",
    "itemCode": "033640",
    "theme": "반도체 재료/부품, 시스템반도체, 지능형로봇/인공지능(AI), LCD 부품/소재",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 283,
    "itemName": "SK가스",
    "itemCode": "018670",
    "theme": "셰일가스(Shale Gas), LPG(액화석유가스)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 284,
    "itemName": "에코마케팅",
    "itemCode": "230360",
    "theme": "광고",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 285,
    "itemName": "엔지켐생명과학",
    "itemCode": "183490",
    "theme": "고령화 사회(노인복지), 제약업체, 코로나19(나파모스타트), 코로나19(진단/치료제/백신 개발 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 286,
    "itemName": "헬릭스미스",
    "itemCode": "084990",
    "theme": "건강기능식품, 면역항암제, 유전자 치료제/분석",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 287,
    "itemName": "미원상사",
    "itemCode": "002840",
    "theme": "화장품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 288,
    "itemName": "하림지주",
    "itemCode": "003380",
    "theme": "지주사",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 289,
    "itemName": "클래시스",
    "itemCode": "214150",
    "theme": "의료기기, 화장품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 290,
    "itemName": "유나이티드제약",
    "itemCode": "033270",
    "theme": "제약업체, 코로나19(진단/치료제/백신 개발 등), 코로나19(치료제/백신 개발 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 291,
    "itemName": "씨아이에스",
    "itemCode": "222080",
    "theme": "2차전지, 2차전지(장비), 전기차, 전력저장장치(ESS)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 292,
    "itemName": "롯데제과",
    "itemCode": "280360",
    "theme": "여름, 음식료업종",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 293,
    "itemName": "넵튠",
    "itemCode": "217270",
    "theme": "게임, 모바일게임(스마트폰), 크래프톤 관련주",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 294,
    "itemName": "두산",
    "itemCode": "000150",
    "theme": "지주사",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 295,
    "itemName": "파크시스템스",
    "itemCode": "140860",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 296,
    "itemName": "LIG넥스원",
    "itemCode": "079550",
    "theme": "방위산업/전쟁 및 테러, 우주항공산업, 항공기부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 297,
    "itemName": "제이콘텐트리",
    "itemCode": "036420",
    "theme": "미디어(방송/신문), 엔터테인먼트, 영상콘텐츠, 영화, 지주사",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 298,
    "itemName": "현대건설기계",
    "itemCode": "267270",
    "theme": "건설기계",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 299,
    "itemName": "락앤락",
    "itemCode": "115390",
    "theme": "마스크, 엔젤산업, 출산장려정책, 황사/미세먼지",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 300,
    "itemName": "삼양홀딩스",
    "itemCode": "000070",
    "theme": "지주사, 환율하락 수혜",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 301,
    "itemName": "에이스테크",
    "itemCode": "088800",
    "theme": "4차산업 수혜주, 5G(5세대 이동통신), 방위산업/전쟁 및 테러, 스마트폰, 자율주행차, 통신장비, RFID(NFC 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 302,
    "itemName": "넥센타이어",
    "itemCode": "002350",
    "theme": "타이어",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 303,
    "itemName": "한국단자",
    "itemCode": "025540",
    "theme": "자동차부품, 자율주행차, 전기차, LED",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 304,
    "itemName": "한전기술",
    "itemCode": "052690",
    "theme": "원자력발전, 원자력발전소 해체, 풍력에너지",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 305,
    "itemName": "동원F&B",
    "itemCode": "049770",
    "theme": "음식료업종, 환율하락 수혜",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 306,
    "itemName": "지놈앤컴퍼니",
    "itemCode": "314130",
    "theme": "2020 하반기 신규상장, 유전자 치료제/분석",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 307,
    "itemName": "서진시스템",
    "itemCode": "178320",
    "theme": "5G(5세대 이동통신), 반도체 장비, 스마트폰, 전력저장장치(ESS), 통신장비, 휴대폰부품, K-뉴딜지수, K-뉴딜지수(인터넷)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 308,
    "itemName": "키네마스터",
    "itemCode": "139670",
    "theme": "모바일솔루션(스마트폰)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 309,
    "itemName": "대신증권",
    "itemCode": "003540",
    "theme": "증권",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 310,
    "itemName": "미래에셋생명",
    "itemCode": "085620",
    "theme": "생명보험",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 311,
    "itemName": "에스엠",
    "itemCode": "041510",
    "theme": "엔터테인먼트, 음원/음반",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 312,
    "itemName": "데브시스터즈",
    "itemCode": "194480",
    "theme": "모바일게임(스마트폰), 캐릭터상품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 313,
    "itemName": "대덕전자",
    "itemCode": "353200",
    "theme": "5G(5세대 이동통신), 갤럭시 부품주, 스마트폰, PCB(FPCB 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 314,
    "itemName": "위메이드",
    "itemCode": "112040",
    "theme": "게임, 모바일게임(스마트폰), K-뉴딜지수, K-뉴딜지수(게임)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 315,
    "itemName": "현대일렉트릭",
    "itemCode": "267260",
    "theme": "전력설비",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 316,
    "itemName": "심텍",
    "itemCode": "222800",
    "theme": "3D 낸드(NAND), PCB(FPCB 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 317,
    "itemName": "효성화학",
    "itemCode": "298000",
    "theme": "석유화학, 수소차(연료전지/부품/충전소 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 318,
    "itemName": "동아에스티",
    "itemCode": "170900",
    "theme": "면역항암제, 바이오시밀러(복제 바이오의약품), 슈퍼박테리아, 제약업체, 치매",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 319,
    "itemName": "이오플로우",
    "itemCode": "294090",
    "theme": "2020 하반기 신규상장, 의료기기",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 320,
    "itemName": "동양생명",
    "itemCode": "082640",
    "theme": "생명보험",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 321,
    "itemName": "SK디앤디",
    "itemCode": "210980",
    "theme": "전력저장장치(ESS), 태양광에너지, 풍력에너지",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 322,
    "itemName": "케이씨씨글라스",
    "itemCode": "344820",
    "theme": "리모델링/인테리어",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 323,
    "itemName": "덴티움",
    "itemCode": "145720",
    "theme": "의료기기, 치아 치료(임플란트 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 324,
    "itemName": "에스앤에스텍",
    "itemCode": "101490",
    "theme": "반도체 재료/부품, 시스템반도체, 日 수출 규제(국산화 등), LCD 부품/소재",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 325,
    "itemName": "상아프론테크",
    "itemCode": "089980",
    "theme": "2차전지, 2차전지(소재/부품), 전기차, 전력저장장치(ESS), 황사/미세먼지, LCD장비, OLED(유기 발광 다이오드), PCB(FPCB 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 326,
    "itemName": "경동나비엔",
    "itemCode": "009450",
    "theme": "겨울, 스마트홈(홈네트워크)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 327,
    "itemName": "코미팜",
    "itemCode": "041960",
    "theme": "아프리카 돼지열병(ASF), 코로나19(진단/치료제/백신 개발 등), 코로나19(치료제/백신 개발 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 328,
    "itemName": "NICE",
    "itemCode": "034310",
    "theme": "지주사",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 329,
    "itemName": "유틸렉스",
    "itemCode": "263050",
    "theme": "면역항암제, 코로나19(진단/치료제/백신 개발 등), 코로나19(치료제/백신 개발 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 330,
    "itemName": "삼화콘덴서",
    "itemCode": "001820",
    "theme": "스마트그리드(지능형전력망), 전기차, 전력저장장치(ESS), 핵융합에너지, MLCC(적층세라믹콘덴서)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 331,
    "itemName": "엘앤씨바이오",
    "itemCode": "290650",
    "theme": "의료기기, 화장품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 332,
    "itemName": "애경산업",
    "itemCode": "018250",
    "theme": "마스크, 화장품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 333,
    "itemName": "삼양식품",
    "itemCode": "003230",
    "theme": "음식료업종",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 334,
    "itemName": "메가스터디교육",
    "itemCode": "215200",
    "theme": "교육/온라인 교육",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 335,
    "itemName": "넥스틴",
    "itemCode": "348210",
    "theme": "2020 하반기 신규상장, 반도체 장비",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 336,
    "itemName": "HDC",
    "itemCode": "012630",
    "theme": "면세점, 지주사",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 337,
    "itemName": "크리스탈지노믹스",
    "itemCode": "083790",
    "theme": "면역항암제, 슈퍼박테리아, 코로나19(진단/치료제/백신 개발 등), 코로나19(치료제/백신 개발 등), 코로나19(카모스타트)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 338,
    "itemName": "LG하우시스",
    "itemCode": "108670",
    "theme": "리모델링/인테리어, 자동차부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 339,
    "itemName": "테스나",
    "itemCode": "131970",
    "theme": "사물인터넷, 시스템반도체",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 340,
    "itemName": "풀무원",
    "itemCode": "017810",
    "theme": "음식료업종, 지주사",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 341,
    "itemName": "국일제지",
    "itemCode": "078130",
    "theme": "그래핀, 수소차(연료전지/부품/충전소 등), 제지",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 342,
    "itemName": "엔케이맥스",
    "itemCode": "182400",
    "theme": "건강기능식품, 면역항암제",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 343,
    "itemName": "부산가스",
    "itemCode": "015350",
    "theme": "겨울, 도시가스",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 344,
    "itemName": "효성중공업",
    "itemCode": "298040",
    "theme": "수소차(연료전지/부품/충전소 등), 원자력발전, 전력설비, 전력저장장치(ESS), 풍력에너지",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 345,
    "itemName": "하나머티리얼즈",
    "itemCode": "166090",
    "theme": "반도체 재료/부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 346,
    "itemName": "한일현대시멘트",
    "itemCode": "006390",
    "theme": "시멘트/레미콘",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 347,
    "itemName": "JW중외제약",
    "itemCode": "001060",
    "theme": "고령화 사회(노인복지), 마스크, 제약업체, 코로나19(나파모스타트), 코로나19(덱사메타손), 코로나19(진단/치료제/백신 개발 등), 코로나19(치료제/백신 개발 등), 황사/미세먼지, U-Healthcare(원격진료)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 348,
    "itemName": "테스",
    "itemCode": "095610",
    "theme": "3D 낸드(NAND), 반도체 장비",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 349,
    "itemName": "일양약품",
    "itemCode": "007570",
    "theme": "제약업체, 코로나19(진단/치료제/백신 개발 등), 코로나19(치료제/백신 개발 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 350,
    "itemName": "동아쏘시오홀딩스",
    "itemCode": "000640",
    "theme": "제약업체, 지주사, 콜드체인(저온 유통)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 351,
    "itemName": "한진",
    "itemCode": "002320",
    "theme": "종합 물류",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 352,
    "itemName": "비덴트",
    "itemCode": "121800",
    "theme": "가상화폐(비트코인 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 353,
    "itemName": "아난티",
    "itemCode": "025980",
    "theme": "남북경협",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 354,
    "itemName": "에프에스티",
    "itemCode": "036810",
    "theme": "바이오인식(생체인식), 반도체 장비, 반도체 재료/부품, LCD 부품/소재",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 355,
    "itemName": "유바이오로직스",
    "itemCode": "206650",
    "theme": "코로나19(진단/치료제/백신 개발 등), 코로나19(치료제/백신 개발 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 356,
    "itemName": "SPC삼립",
    "itemCode": "005610",
    "theme": "겨울, 음식료업종",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 357,
    "itemName": "유안타증권",
    "itemCode": "003470",
    "theme": "증권",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 358,
    "itemName": "코리아센터",
    "itemCode": "290510",
    "theme": "모바일솔루션(스마트폰), 전자결제(전자화폐), 쿠팡 관련주",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 359,
    "itemName": "잇츠한불",
    "itemCode": "226320",
    "theme": "화장품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 360,
    "itemName": "코나아이",
    "itemCode": "052400",
    "theme": "삼성페이, 인터넷은행, 핀테크(FinTech), RFID(NFC 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 361,
    "itemName": "비에이치",
    "itemCode": "090460",
    "theme": "갤럭시 부품주, 아이폰, 폴더블폰, PCB(FPCB 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 362,
    "itemName": "신성이엔지",
    "itemCode": "011930",
    "theme": "두나무 관련주, 반도체 장비, 전력저장장치(ESS), 코로나19(음압병실/음압구급차), 태양광에너지, LCD장비",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 363,
    "itemName": "롯데정보통신",
    "itemCode": "286940",
    "theme": "4차산업 수혜주, 블록체인, SI(시스템통합)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 364,
    "itemName": "카페24",
    "itemCode": "042000",
    "theme": "모바일솔루션(스마트폰), 전자결제(전자화폐)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 365,
    "itemName": "세아베스틸",
    "itemCode": "001430",
    "theme": "철강 주요종목",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 366,
    "itemName": "우리금융캐피탈",
    "itemCode": "033660",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 367,
    "itemName": "CMG제약",
    "itemCode": "058820",
    "theme": "제약업체, 코로나19(나파모스타트)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 368,
    "itemName": "제일약품",
    "itemCode": "271980",
    "theme": "제약업체, 줄기세포, 코로나19(나파모스타트), 코로나19(진단/치료제/백신 개발 등), 코로나19(화이자)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 369,
    "itemName": "한진중공업",
    "itemCode": "097230",
    "theme": "방위산업/전쟁 및 테러, 조선, GTX(수도권 광역급행철도), LNG(액화천연가스)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 370,
    "itemName": "삼양사",
    "itemCode": "145990",
    "theme": "석유화학, 수소차(연료전지/부품/충전소 등), 음식료업종",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 371,
    "itemName": "인텔리안테크",
    "itemCode": "189300",
    "theme": "우주항공산업, 통신장비",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 372,
    "itemName": "일진다이아",
    "itemCode": "081000",
    "theme": "수소차(연료전지/부품/충전소 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 373,
    "itemName": "드림텍",
    "itemCode": "192650",
    "theme": "갤럭시 부품주, 바이오인식(생체인식), 스마트폰, 자율주행차, 코로나19(진단/치료제/백신 개발 등), 코로나19(진단키트), LED",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 374,
    "itemName": "파트론",
    "itemCode": "091700",
    "theme": "갤럭시 부품주, 바이오인식(생체인식), 삼성페이, 스마트폰, 음성인식, 카메라모듈/부품, RFID(NFC 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 375,
    "itemName": "빙그레",
    "itemCode": "005180",
    "theme": "여름, 음식료업종",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 376,
    "itemName": "서흥",
    "itemCode": "008490",
    "theme": "건강기능식품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 377,
    "itemName": "엘비세미콘",
    "itemCode": "061970",
    "theme": "시스템반도체, 정치/인맥(유시민)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 378,
    "itemName": "우리종금",
    "itemCode": "010050",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 379,
    "itemName": "디오",
    "itemCode": "039840",
    "theme": "의료기기, 정치/인맥(문재인), 치아 치료(임플란트 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 380,
    "itemName": "진원생명과학",
    "itemCode": "011000",
    "theme": "메르스 코로나 바이러스, 유전자 치료제/분석, 코로나19(진단/치료제/백신 개발 등), 코로나19(치료제/백신 개발 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 381,
    "itemName": "이엔에프테크놀로지",
    "itemCode": "102710",
    "theme": "반도체 재료/부품, LCD 부품/소재",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 382,
    "itemName": "압타바이오",
    "itemCode": "293780",
    "theme": "코로나19(진단/치료제/백신 개발 등), 코로나19(치료제/백신 개발 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 383,
    "itemName": "BGF",
    "itemCode": "027410",
    "theme": "지주사",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 384,
    "itemName": "제이앤티씨",
    "itemCode": "204270",
    "theme": "갤럭시 부품주, 스마트폰, 휴대폰부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 385,
    "itemName": "한화투자증권",
    "itemCode": "003530",
    "theme": "두나무 관련주, 증권",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 386,
    "itemName": "유니드",
    "itemCode": "014830",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 387,
    "itemName": "매일유업",
    "itemCode": "267980",
    "theme": "엔젤산업, 음식료업종, 출산장려정책",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 388,
    "itemName": "인선이엔티",
    "itemCode": "060150",
    "theme": "태풍 및 장마, 폐기물처리",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 389,
    "itemName": "서울바이오시스",
    "itemCode": "092190",
    "theme": "LED",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 390,
    "itemName": "와이아이케이",
    "itemCode": "232140",
    "theme": "반도체 장비",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 391,
    "itemName": "SGC에너지",
    "itemCode": "005090",
    "theme": "온실가스(탄소배출권)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 392,
    "itemName": "아미코젠",
    "itemCode": "092040",
    "theme": "건강기능식품, 유전자 치료제/분석",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 393,
    "itemName": "휴온스",
    "itemCode": "243070",
    "theme": "건강기능식품, 보톡스(보툴리눔톡신), 제약업체, 코로나19(덱사메타손), 코로나19(진단/치료제/백신 개발 등), 코로나19(진단키트)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 394,
    "itemName": "고바이오랩",
    "itemCode": "348150",
    "theme": "2020 하반기 신규상장, 유전자 치료제/분석",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 395,
    "itemName": "영원무역홀딩스",
    "itemCode": "009970",
    "theme": "지주사",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 396,
    "itemName": "바이넥스",
    "itemCode": "053030",
    "theme": "바이오시밀러(복제 바이오의약품), 코로나19(스푸트니크V)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 397,
    "itemName": "녹십자셀",
    "itemCode": "031390",
    "theme": "면역항암제, 제대혈, 줄기세포",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 398,
    "itemName": "대주전자재료",
    "itemCode": "078600",
    "theme": "2차전지, 2차전지(소재/부품), 태양광에너지, MLCC(적층세라믹콘덴서)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 399,
    "itemName": "네이처셀",
    "itemCode": "007390",
    "theme": "음식료업종, 줄기세포, 치매, 코로나19(진단/치료제/백신 개발 등), 코로나19(치료제/백신 개발 등), 화장품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 400,
    "itemName": "다날",
    "itemCode": "064260",
    "theme": "가상현실(VR), 가상화폐(비트코인 등), 게임, 모바일솔루션(스마트폰), 모바일콘텐츠(스마트폰/태블릿PC), 삼성페이, 음원/음반, 인터넷은행, 전자결제(전자화폐), 증강현실(AR), 쿠팡 관련주, 핀테크(FinTech)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 401,
    "itemName": "피엔티",
    "itemCode": "137400",
    "theme": "2차전지, 2차전지(장비), 전력저장장치(ESS), LCD장비",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 402,
    "itemName": "메디포스트",
    "itemCode": "078160",
    "theme": "고령화 사회(노인복지), 제대혈, 줄기세포, 치매, U-Healthcare(원격진료)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 403,
    "itemName": "코미코",
    "itemCode": "183300",
    "theme": "반도체 장비, 태양광에너지",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 404,
    "itemName": "롯데손해보험",
    "itemCode": "000400",
    "theme": "손해보험",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 405,
    "itemName": "현대퓨처넷",
    "itemCode": "126560",
    "theme": "케이블TV SO/MSO",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 406,
    "itemName": "티에스이",
    "itemCode": "131290",
    "theme": "반도체 장비, LED장비, OLED(유기 발광 다이오드)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 407,
    "itemName": "삼부토건",
    "itemCode": "001470",
    "theme": "건설 중소형, 남북경협, 정치/인맥(이낙연)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 408,
    "itemName": "해성디에스",
    "itemCode": "195870",
    "theme": "반도체 재료/부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 409,
    "itemName": "율촌화학",
    "itemCode": "008730",
    "theme": "골판지 제조, 日 수출 규제(국산화 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 410,
    "itemName": "지트리비앤티",
    "itemCode": "115450",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 411,
    "itemName": "코웰패션",
    "itemCode": "033290",
    "theme": "수소차(연료전지/부품/충전소 등), 패션/의류",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 412,
    "itemName": "네오위즈",
    "itemCode": "095660",
    "theme": "게임, 모바일게임(스마트폰), K-뉴딜지수, K-뉴딜지수(게임)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 413,
    "itemName": "SK렌터카",
    "itemCode": "068400",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 414,
    "itemName": "코스모신소재",
    "itemCode": "005070",
    "theme": "2차전지, 2차전지(소재/부품), 전기차, MLCC(적층세라믹콘덴서)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 415,
    "itemName": "인탑스",
    "itemCode": "049070",
    "theme": "갤럭시 부품주, 스마트폰, 자동차부품, 휴대폰부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 416,
    "itemName": "아주IB투자",
    "itemCode": "027360",
    "theme": "창투사, 코로나19(스푸트니크V), 크래프톤 관련주",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 417,
    "itemName": "삼강엠앤티",
    "itemCode": "100090",
    "theme": "강관업체(Steel pipe), 남-북-러 가스관사업, 조선기자재, 풍력에너지, LNG(액화천연가스)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 418,
    "itemName": "KG이니시스",
    "itemCode": "035600",
    "theme": "삼성페이, 인터넷은행, 전자결제(전자화폐), 핀테크(FinTech), K-뉴딜지수, K-뉴딜지수(인터넷)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 419,
    "itemName": "한국토지신탁",
    "itemCode": "034830",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 420,
    "itemName": "삼표시멘트",
    "itemCode": "038500",
    "theme": "시멘트/레미콘",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 421,
    "itemName": "종근당홀딩스",
    "itemCode": "001630",
    "theme": "건강기능식품, 지주사, 코로나19(나파모스타트)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 422,
    "itemName": "올릭스",
    "itemCode": "226950",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 423,
    "itemName": "다원시스",
    "itemCode": "068240",
    "theme": "철도, 태양광에너지, 핵융합에너지, GTX(수도권 광역급행철도)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 424,
    "itemName": "케이씨텍",
    "itemCode": "281820",
    "theme": "3D 낸드(NAND), 반도체 장비, 반도체 재료/부품, LCD장비",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 425,
    "itemName": "피에스케이",
    "itemCode": "319660",
    "theme": "3D 낸드(NAND), 반도체 장비, 시스템반도체",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 426,
    "itemName": "한국콜마홀딩스",
    "itemCode": "024720",
    "theme": "지주사, 화장품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 427,
    "itemName": "KH바텍",
    "itemCode": "060720",
    "theme": "갤럭시 부품주, 스마트폰, 폴더블폰, 휴대폰부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 428,
    "itemName": "한국카본",
    "itemCode": "017960",
    "theme": "셰일가스(Shale Gas), 조선기자재, LNG(액화천연가스)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 429,
    "itemName": "원익QnC",
    "itemCode": "074600",
    "theme": "3D 낸드(NAND), 반도체 재료/부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 430,
    "itemName": "성우하이텍",
    "itemCode": "015750",
    "theme": "자동차부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 431,
    "itemName": "한국자산신탁",
    "itemCode": "123890",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 432,
    "itemName": "알체라",
    "itemCode": "347860",
    "theme": "2020 하반기 신규상장, 메타버스(Metaverse), 바이오인식(생체인식), 지능형로봇/인공지능(AI)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 433,
    "itemName": "오로스테크놀로지",
    "itemCode": "322310",
    "theme": "2021 상반기 신규상장, 반도체 장비",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 434,
    "itemName": "한국파마",
    "itemCode": "032300",
    "theme": "2020 하반기 신규상장, 제약업체, 치매, 코로나19(덱사메타손)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 435,
    "itemName": "엘앤케이바이오",
    "itemCode": "156100",
    "theme": "의료기기",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 436,
    "itemName": "다우데이타",
    "itemCode": "032190",
    "theme": "보안주(정보), 핀테크(FinTech)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 437,
    "itemName": "남선알미늄",
    "itemCode": "008350",
    "theme": "비철금속, 자동차부품, 정치/인맥(이낙연)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 438,
    "itemName": "코오롱글로벌",
    "itemCode": "003070",
    "theme": "건설 중소형, 수자원(양적/질적 개선), 코로나19(음압병실/음압구급차), 태양광에너지, 풍력에너지",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 439,
    "itemName": "교보증권",
    "itemCode": "030610",
    "theme": "증권",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 440,
    "itemName": "한화손해보험",
    "itemCode": "000370",
    "theme": "손해보험",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 441,
    "itemName": "주성엔지니어링",
    "itemCode": "036930",
    "theme": "반도체 장비, 태양광에너지, 플렉서블 디스플레이, LCD장비, LED장비, OLED(유기 발광 다이오드)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 442,
    "itemName": "에이피티씨",
    "itemCode": "089970",
    "theme": "반도체 장비",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 443,
    "itemName": "LF",
    "itemCode": "093050",
    "theme": "패션/의류",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 444,
    "itemName": "오이솔루션",
    "itemCode": "138080",
    "theme": "5G(5세대 이동통신), 통신장비",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 445,
    "itemName": "서울가스",
    "itemCode": "017390",
    "theme": "겨울, 도시가스, 자원개발",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 446,
    "itemName": "넥슨지티",
    "itemCode": "041140",
    "theme": "게임, 모바일게임(스마트폰)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 447,
    "itemName": "원익홀딩스",
    "itemCode": "030530",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 448,
    "itemName": "톱텍",
    "itemCode": "108230",
    "theme": "마스크, 스마트팩토리(스마트공장), LCD장비, OLED(유기 발광 다이오드)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 449,
    "itemName": "디피씨",
    "itemCode": "026890",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 450,
    "itemName": "동원개발",
    "itemCode": "013120",
    "theme": "건설 중소형",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 451,
    "itemName": "안트로젠",
    "itemCode": "065660",
    "theme": "줄기세포",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 452,
    "itemName": "앱클론",
    "itemCode": "174900",
    "theme": "고령화 사회(노인복지), 면역항암제, 코로나19(진단/치료제/백신 개발 등), 코로나19(치료제/백신 개발 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 453,
    "itemName": "서부T&D",
    "itemCode": "006730",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 454,
    "itemName": "태영건설",
    "itemCode": "009410",
    "theme": "건설 중소형, 수자원(양적/질적 개선), 폐기물처리, GTX(수도권 광역급행철도)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 455,
    "itemName": "유니테스트",
    "itemCode": "086390",
    "theme": "3D 낸드(NAND), 반도체 장비, 태양광에너지",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 456,
    "itemName": "오킨스전자",
    "itemCode": "080580",
    "theme": "반도체 재료/부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 457,
    "itemName": "웹케시",
    "itemCode": "053580",
    "theme": "핀테크(FinTech)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 458,
    "itemName": "쎄트렉아이",
    "itemCode": "099320",
    "theme": "드론(Drone), 우주항공산업",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 459,
    "itemName": "화승인더",
    "itemCode": "006060",
    "theme": "패션/의류",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 460,
    "itemName": "하나기술",
    "itemCode": "299030",
    "theme": "2020 하반기 신규상장, 2차전지, 2차전지(장비)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 461,
    "itemName": "교촌에프앤비",
    "itemCode": "339770",
    "theme": "2020 하반기 신규상장, 육계, 음식료업종",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 462,
    "itemName": "코엔텍",
    "itemCode": "029960",
    "theme": "4대강 복원, 태풍 및 장마, 폐기물처리",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 463,
    "itemName": "텔콘RF제약",
    "itemCode": "200230",
    "theme": "제약업체, 통신장비",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 464,
    "itemName": "위닉스",
    "itemCode": "044340",
    "theme": "공기청정기, 스마트홈(홈네트워크), 여름, 제습기, 황사/미세먼지",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 465,
    "itemName": "광동제약",
    "itemCode": "009290",
    "theme": "겨울, 제약업체",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 466,
    "itemName": "네패스아크",
    "itemCode": "330860",
    "theme": "2020 하반기 신규상장, 반도체 장비, 시스템반도체",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 467,
    "itemName": "모두투어",
    "itemCode": "080160",
    "theme": "여행, 환율하락 수혜",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 468,
    "itemName": "세종텔레콤",
    "itemCode": "036630",
    "theme": "재택근무/스마트워크, 제4이동통신, MVNO(가상이동통신망사업자)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 469,
    "itemName": "알서포트",
    "itemCode": "131370",
    "theme": "4차산업 수혜주, 인터넷은행, 재택근무/스마트워크",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 470,
    "itemName": "미코",
    "itemCode": "059090",
    "theme": "반도체 재료/부품, 수소차(연료전지/부품/충전소 등), 코로나19(진단/치료제/백신 개발 등), 코로나19(진단키트)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 471,
    "itemName": "모토닉",
    "itemCode": "009680",
    "theme": "수소차(연료전지/부품/충전소 등), 자동차부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 472,
    "itemName": "원익머트리얼즈",
    "itemCode": "104830",
    "theme": "3D 낸드(NAND), 반도체 재료/부품, 수소차(연료전지/부품/충전소 등), LCD 부품/소재, OLED(유기 발광 다이오드)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 473,
    "itemName": "삼성제약",
    "itemCode": "001360",
    "theme": "제약업체",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 474,
    "itemName": "유니슨",
    "itemCode": "018000",
    "theme": "풍력에너지",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 475,
    "itemName": "지역난방공사",
    "itemCode": "071320",
    "theme": "겨울, LNG(액화천연가스)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 476,
    "itemName": "롯데푸드",
    "itemCode": "002270",
    "theme": "여름, 음식료업종",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 477,
    "itemName": "이녹스첨단소재",
    "itemCode": "272290",
    "theme": "갤럭시 부품주, 반도체 재료/부품, 아이폰, 日 수출 규제(국산화 등), 폴더블폰, OLED(유기 발광 다이오드), PCB(FPCB 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 478,
    "itemName": "남해화학",
    "itemCode": "025860",
    "theme": "남북경협, 농업, 비료, 여름, 태풍 및 장마",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 479,
    "itemName": "우리기술투자",
    "itemCode": "041190",
    "theme": "4차산업 수혜주, 가상화폐(비트코인 등), 두나무 관련주, 창투사",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 480,
    "itemName": "다나와",
    "itemCode": "119860",
    "theme": "소매유통",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 481,
    "itemName": "레인보우로보틱스",
    "itemCode": "277810",
    "theme": "2021 상반기 신규상장, 지능형로봇/인공지능(AI)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 482,
    "itemName": "디앤씨미디어",
    "itemCode": "263720",
    "theme": "모바일콘텐츠(스마트폰/태블릿PC), 웹툰",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 483,
    "itemName": "대성홀딩스",
    "itemCode": "016710",
    "theme": "겨울, 교육/온라인 교육, 도시가스, MVNO(가상이동통신망사업자)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 484,
    "itemName": "AP시스템",
    "itemCode": "265520",
    "theme": "반도체 장비, 플렉서블 디스플레이, LCD장비, OLED(유기 발광 다이오드)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 485,
    "itemName": "바이오니아",
    "itemCode": "064550",
    "theme": "메르스 코로나 바이러스, 유전자 치료제/분석, 코로나19(진단/치료제/백신 개발 등), 코로나19(진단키트)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 486,
    "itemName": "쏠리드",
    "itemCode": "050890",
    "theme": "5G(5세대 이동통신), 정치/인맥(이재명), 제4이동통신, 통신장비",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 487,
    "itemName": "한글과컴퓨터",
    "itemCode": "030520",
    "theme": "모바일콘텐츠(스마트폰/태블릿PC), 클라우드 컴퓨팅",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 488,
    "itemName": "에이프로젠제약",
    "itemCode": "003060",
    "theme": "메르스 코로나 바이러스, 바이오시밀러(복제 바이오의약품), 제약업체, 치매",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 489,
    "itemName": "더네이쳐홀딩스",
    "itemCode": "298540",
    "theme": "2020 하반기 신규상장, 패션/의류",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 490,
    "itemName": "동화약품",
    "itemCode": "000020",
    "theme": "겨울, 제약업체",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 491,
    "itemName": "유비쿼스홀딩스",
    "itemCode": "078070",
    "theme": "지주사, K-뉴딜지수, K-뉴딜지수(인터넷)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 492,
    "itemName": "카이노스메드",
    "itemCode": "284620",
    "theme": "코로나19(진단/치료제/백신 개발 등), 코로나19(치료제/백신 개발 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 493,
    "itemName": "동방",
    "itemCode": "004140",
    "theme": "종합 물류, 쿠팡 관련주",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 494,
    "itemName": "송원산업",
    "itemCode": "004430",
    "theme": "日 수출 규제(국산화 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 495,
    "itemName": "이트론",
    "itemCode": "096040",
    "theme": "코로나19(스푸트니크V)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 496,
    "itemName": "골프존",
    "itemCode": "215000",
    "theme": "겨울, K-뉴딜지수, K-뉴딜지수(게임)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 497,
    "itemName": "인크로스",
    "itemCode": "216050",
    "theme": "광고",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 498,
    "itemName": "SBS",
    "itemCode": "034120",
    "theme": "미디어(방송/신문), 영상콘텐츠",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 499,
    "itemName": "한라홀딩스",
    "itemCode": "060980",
    "theme": "자율주행차, 지주사",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 500,
    "itemName": "넷게임즈",
    "itemCode": "225570",
    "theme": "모바일게임(스마트폰), 크래프톤 관련주",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 501,
    "itemName": "알루코",
    "itemCode": "001780",
    "theme": "2차전지, 2차전지(소재/부품), 비철금속, 정치/인맥(문재인), 정치/인맥(정세균), 철도",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 502,
    "itemName": "SK증권",
    "itemCode": "001510",
    "theme": "증권",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 503,
    "itemName": "포스코엠텍",
    "itemCode": "009520",
    "theme": "북한 광물자원개발, 비철금속",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 504,
    "itemName": "KTH",
    "itemCode": "036030",
    "theme": "모바일콘텐츠(스마트폰/태블릿PC), 영상콘텐츠, 쿠팡 관련주",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 505,
    "itemName": "케이피엠테크",
    "itemCode": "042040",
    "theme": "가상화폐(비트코인 등), 마스크, 메르스 코로나 바이러스, 日 수출 규제(국산화 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 506,
    "itemName": "바디텍메드",
    "itemCode": "206640",
    "theme": "의료기기, 코로나19(진단/치료제/백신 개발 등), 코로나19(진단키트)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 507,
    "itemName": "바텍",
    "itemCode": "043150",
    "theme": "고령화 사회(노인복지), 의료기기, 치아 치료(임플란트 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 508,
    "itemName": "EDGC",
    "itemCode": "245620",
    "theme": "유전자 치료제/분석, 코로나19(진단/치료제/백신 개발 등), 코로나19(진단키트)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 509,
    "itemName": "스카이라이프",
    "itemCode": "053210",
    "theme": "미디어(방송/신문), MVNO(가상이동통신망사업자)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 510,
    "itemName": "AK홀딩스",
    "itemCode": "006840",
    "theme": "지주사, 페인트, 항공/저가 항공사(LCC)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 511,
    "itemName": "유비케어",
    "itemCode": "032620",
    "theme": "고령화 사회(노인복지), 의료기기, U-Healthcare(원격진료)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 512,
    "itemName": "아이에이",
    "itemCode": "038880",
    "theme": "수소차(연료전지/부품/충전소 등), 스마트카(SMART CAR), 시스템반도체, 자율주행차, 전기차",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 513,
    "itemName": "일동제약",
    "itemCode": "249420",
    "theme": "마스크, 제약업체, 치매",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 514,
    "itemName": "한국철강",
    "itemCode": "104700",
    "theme": "철강 주요종목",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 515,
    "itemName": "YG PLUS",
    "itemCode": "037270",
    "theme": "광고, 화장품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 516,
    "itemName": "인터파크",
    "itemCode": "035080",
    "theme": "소매유통, 여행",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 517,
    "itemName": "이월드",
    "itemCode": "084680",
    "theme": "정치/인맥(이낙연), 테마파크",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 518,
    "itemName": "켐트로닉스",
    "itemCode": "089010",
    "theme": "갤럭시 부품주, 무선충전기술, 스마트폰, 자율주행차, 전자파, 폴더블폰, LCD 부품/소재",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 519,
    "itemName": "이베스트투자증권",
    "itemCode": "078020",
    "theme": "증권",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 520,
    "itemName": "테크윙",
    "itemCode": "089030",
    "theme": "3D 낸드(NAND), 반도체 장비, 반도체 재료/부품, 시스템반도체, LCD장비",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 521,
    "itemName": "와이팜",
    "itemCode": "332570",
    "theme": "2020 하반기 신규상장, 5G(5세대 이동통신), 갤럭시 부품주, 스마트폰, 휴대폰부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 522,
    "itemName": "고려제강",
    "itemCode": "002240",
    "theme": "철강 주요종목, 핵융합에너지",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 523,
    "itemName": "슈피겐코리아",
    "itemCode": "192440",
    "theme": "스마트폰, 아이폰, 화장품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 524,
    "itemName": "선진",
    "itemCode": "136490",
    "theme": "사료, 아프리카 돼지열병(ASF)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 525,
    "itemName": "삼성출판사",
    "itemCode": "068290",
    "theme": "교육/온라인 교육, 모바일콘텐츠(스마트폰/태블릿PC), 엔젤산업, 출산장려정책",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 526,
    "itemName": "한국비엔씨",
    "itemCode": "256840",
    "theme": "마리화나(대마), 보톡스(보툴리눔톡신), 의료기기, 코로나19(진단/치료제/백신 개발 등), 코로나19(치료제/백신 개발 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 527,
    "itemName": "유니셈",
    "itemCode": "036200",
    "theme": "반도체 장비, 핀테크(FinTech)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 528,
    "itemName": "에스맥",
    "itemCode": "097780",
    "theme": "스마트폰, 아이폰, 코로나19(혈장치료/혈장치료제), 터치패널(스마트폰/태블릿PC), 희귀금속(희토류 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 529,
    "itemName": "티움바이오",
    "itemCode": "321550",
    "theme": "면역항암제, 유전자 치료제/분석",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 530,
    "itemName": "진흥기업",
    "itemCode": "002780",
    "theme": "건설 중소형, 정치/인맥(오세훈)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 531,
    "itemName": "KG모빌리언스",
    "itemCode": "046440",
    "theme": "가상화폐(비트코인 등), 모바일콘텐츠(스마트폰/태블릿PC), 삼성페이, 인터넷은행, 전자결제(전자화폐), 핀테크(FinTech)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 532,
    "itemName": "현대차증권",
    "itemCode": "001500",
    "theme": "증권",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 533,
    "itemName": "하나제약",
    "itemCode": "293480",
    "theme": "제약업체",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 534,
    "itemName": "에스씨엠생명과학",
    "itemCode": "298060",
    "theme": "줄기세포, 화장품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 535,
    "itemName": "아세아제지",
    "itemCode": "002310",
    "theme": "골판지 제조, 제지",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 536,
    "itemName": "조이시티",
    "itemCode": "067000",
    "theme": "게임, 모바일게임(스마트폰)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 537,
    "itemName": "하이트진로홀딩스",
    "itemCode": "000140",
    "theme": "음식료업종, 日제품 불매운동(수혜), 지주사",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 538,
    "itemName": "조광피혁",
    "itemCode": "004700",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 539,
    "itemName": "유진투자증권",
    "itemCode": "001200",
    "theme": "증권",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 540,
    "itemName": "DI동일",
    "itemCode": "001530",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 541,
    "itemName": "유진기업",
    "itemCode": "023410",
    "theme": "시멘트/레미콘, 아스콘(아스팔트 콘크리트), GTX(수도권 광역급행철도)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 542,
    "itemName": "노바렉스",
    "itemCode": "194700",
    "theme": "건강기능식품, 음식료업종",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 543,
    "itemName": "한독",
    "itemCode": "002390",
    "theme": "의료기기, 제약업체",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 544,
    "itemName": "사람인에이치알",
    "itemCode": "143240",
    "theme": "일자리(취업)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 545,
    "itemName": "월덱스",
    "itemCode": "101160",
    "theme": "반도체 재료/부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 546,
    "itemName": "대아티아이",
    "itemCode": "045390",
    "theme": "철도, GTX(수도권 광역급행철도)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 547,
    "itemName": "마크로젠",
    "itemCode": "038290",
    "theme": "고령화 사회(노인복지), 유전자 치료제/분석, 정치/인맥(안철수), 줄기세포, 코로나19(진단/치료제/백신 개발 등), U-Healthcare(원격진료)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 548,
    "itemName": "케이씨",
    "itemCode": "029460",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 549,
    "itemName": "상상인",
    "itemCode": "038540",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 550,
    "itemName": "피씨엘",
    "itemCode": "241820",
    "theme": "의료기기, 치매, 코로나19(진단/치료제/백신 개발 등), 코로나19(진단키트)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 551,
    "itemName": "경방",
    "itemCode": "000050",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 552,
    "itemName": "지니뮤직",
    "itemCode": "043610",
    "theme": "가상현실(VR), 메타버스(Metaverse), 모바일콘텐츠(스마트폰/태블릿PC), 엔터테인먼트, 음원/음반",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 553,
    "itemName": "한국정보통신",
    "itemCode": "025770",
    "theme": "삼성페이, 전자결제(전자화폐), 핀테크(FinTech), MVNO(가상이동통신망사업자)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 554,
    "itemName": "와이솔",
    "itemCode": "122990",
    "theme": "5G(5세대 이동통신), 휴대폰부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 555,
    "itemName": "케이아이엔엑스",
    "itemCode": "093320",
    "theme": "클라우드 컴퓨팅",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 556,
    "itemName": "엔에스쇼핑",
    "itemCode": "138250",
    "theme": "소매유통, 홈쇼핑",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 557,
    "itemName": "KG케미칼",
    "itemCode": "001390",
    "theme": "2차전지, 2차전지(소재/부품), 농업, 비료, 수자원(양적/질적 개선)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 558,
    "itemName": "에이스토리",
    "itemCode": "241840",
    "theme": "영상콘텐츠",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 559,
    "itemName": "현대바이오랜드",
    "itemCode": "052260",
    "theme": "고령화 사회(노인복지), 치아 치료(임플란트 등), 화장품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 560,
    "itemName": "셀리드",
    "itemCode": "299660",
    "theme": "면역항암제, 코로나19(진단/치료제/백신 개발 등), 코로나19(치료제/백신 개발 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 561,
    "itemName": "종근당바이오",
    "itemCode": "063160",
    "theme": "건강기능식품, 슈퍼박테리아, 코로나19(나파모스타트), 코로나19(스푸트니크V)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 562,
    "itemName": "노바텍",
    "itemCode": "285490",
    "theme": "스마트폰, 희귀금속(희토류 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 563,
    "itemName": "에스티큐브",
    "itemCode": "052020",
    "theme": "면역항암제",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 564,
    "itemName": "서희건설",
    "itemCode": "035890",
    "theme": "건설 중소형, 정치/인맥(문재인), DMZ 평화공원",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 565,
    "itemName": "LG헬로비전",
    "itemCode": "037560",
    "theme": "케이블TV SO/MSO, MVNO(가상이동통신망사업자)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 566,
    "itemName": "아이큐어",
    "itemCode": "175250",
    "theme": "제약업체, 치매, 콜드체인(저온 유통), 화장품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 567,
    "itemName": "화일약품",
    "itemCode": "061250",
    "theme": "구충제(펜벤다졸 등), 제약업체, 치매, 코로나19(덱사메타손)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 568,
    "itemName": "현대에너지솔루션",
    "itemCode": "322000",
    "theme": "전력저장장치(ESS), 태양광에너지",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 569,
    "itemName": "대교",
    "itemCode": "019680",
    "theme": "교육/온라인 교육, 엔젤산업, 출산장려정책",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 570,
    "itemName": "레이",
    "itemCode": "228670",
    "theme": "치아 치료(임플란트 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 571,
    "itemName": "대상홀딩스",
    "itemCode": "084690",
    "theme": "건강기능식품, 지주사",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 572,
    "itemName": "웅진씽크빅",
    "itemCode": "095720",
    "theme": "교육/온라인 교육, 엔젤산업, 정치/인맥(윤석열), 출산장려정책",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 573,
    "itemName": "대한제강",
    "itemCode": "084010",
    "theme": "정치/인맥(문재인), 철강 주요종목",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 574,
    "itemName": "JW홀딩스",
    "itemCode": "096760",
    "theme": "지주사",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 575,
    "itemName": "에이프로젠 KIC",
    "itemCode": "007460",
    "theme": "원자력발전",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 576,
    "itemName": "뷰웍스",
    "itemCode": "100120",
    "theme": "고령화 사회(노인복지), 의료기기, U-Healthcare(원격진료)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 577,
    "itemName": "삼천리",
    "itemCode": "004690",
    "theme": "겨울, 도시가스, LNG(액화천연가스)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 578,
    "itemName": "환인제약",
    "itemCode": "016580",
    "theme": "제약업체, 치매, 코로나19(덱사메타손)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 579,
    "itemName": "애경유화",
    "itemCode": "161000",
    "theme": "2차전지, 2차전지(소재/부품), 석유화학",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 580,
    "itemName": "태림포장",
    "itemCode": "011280",
    "theme": "골판지 제조",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 581,
    "itemName": "현대리바트",
    "itemCode": "079430",
    "theme": "리모델링/인테리어, 스마트홈(홈네트워크)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 582,
    "itemName": "국도화학",
    "itemCode": "007690",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 583,
    "itemName": "삼양패키징",
    "itemCode": "272550",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 584,
    "itemName": "에이치엘비제약",
    "itemCode": "047920",
    "theme": "고령화 사회(노인복지), 제약업체, 치매",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 585,
    "itemName": "동신건설",
    "itemCode": "025950",
    "theme": "건설 중소형, 정치/인맥(이재명), 조림사업",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 586,
    "itemName": "비츠로셀",
    "itemCode": "082920",
    "theme": "스마트그리드(지능형전력망), 전력저장장치(ESS)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 587,
    "itemName": "하나마이크론",
    "itemCode": "067310",
    "theme": "반도체 장비, 반도체 재료/부품, 시스템반도체",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 588,
    "itemName": "아모텍",
    "itemCode": "052710",
    "theme": "갤럭시 부품주, 삼성페이, 스마트폰, 전자파, 핀테크(FinTech), 휴대폰부품, MLCC(적층세라믹콘덴서), RFID(NFC 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 589,
    "itemName": "삼진제약",
    "itemCode": "005500",
    "theme": "메르스 코로나 바이러스, 제약업체, 치매",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 590,
    "itemName": "아세아시멘트",
    "itemCode": "183190",
    "theme": "시멘트/레미콘",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 591,
    "itemName": "NEW",
    "itemCode": "160550",
    "theme": "엔터테인먼트, 영상콘텐츠, 영화, 쿠팡 관련주",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 592,
    "itemName": "에이디테크놀로지",
    "itemCode": "200710",
    "theme": "사물인터넷, 시스템반도체",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 593,
    "itemName": "다산네트웍스",
    "itemCode": "039560",
    "theme": "모바일솔루션(스마트폰), 사물인터넷, 통신장비",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 594,
    "itemName": "한솔테크닉스",
    "itemCode": "004710",
    "theme": "갤럭시 부품주, 무선충전기술, 삼성페이, 태양광에너지, 휴대폰부품, LCD 부품/소재, LCD BLU제조, LED",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 595,
    "itemName": "코아시아",
    "itemCode": "045970",
    "theme": "시스템반도체, 음성인식, 지주사",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 596,
    "itemName": "무림P&P",
    "itemCode": "009580",
    "theme": "제지, 조림사업",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 597,
    "itemName": "덕산테코피아",
    "itemCode": "317330",
    "theme": "반도체 재료/부품, OLED(유기 발광 다이오드)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 598,
    "itemName": "싸이토젠",
    "itemCode": "217330",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 599,
    "itemName": "한국쉘석유",
    "itemCode": "002960",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 600,
    "itemName": "동국S&C",
    "itemCode": "100130",
    "theme": "풍력에너지",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 601,
    "itemName": "동성화인텍",
    "itemCode": "033500",
    "theme": "셰일가스(Shale Gas), 조선기자재, LNG(액화천연가스)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 602,
    "itemName": "이수앱지스",
    "itemCode": "086890",
    "theme": "면역항암제, 바이오시밀러(복제 바이오의약품), 코로나19(스푸트니크V)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 603,
    "itemName": "나이벡",
    "itemCode": "138610",
    "theme": "치아 치료(임플란트 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 604,
    "itemName": "JW생명과학",
    "itemCode": "234080",
    "theme": "제약업체",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 605,
    "itemName": "나스미디어",
    "itemCode": "089600",
    "theme": "광고",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 606,
    "itemName": "아이센스",
    "itemCode": "099190",
    "theme": "고령화 사회(노인복지), 의료기기",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 607,
    "itemName": "클리오",
    "itemCode": "237880",
    "theme": "화장품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 608,
    "itemName": "대원제약",
    "itemCode": "003220",
    "theme": "고령화 사회(노인복지), 의료기기, 제약업체, 코로나19(덱사메타손)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 609,
    "itemName": "한솔제지",
    "itemCode": "213500",
    "theme": "제지",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 610,
    "itemName": "레몬",
    "itemCode": "294140",
    "theme": "갤럭시 부품주, 마스크, 스마트폰, 전자파, 코로나19(혈장치료/혈장치료제), 휴대폰부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 611,
    "itemName": "파워로직스",
    "itemCode": "047310",
    "theme": "2차전지, 2차전지(소재/부품), 갤럭시 부품주, 바이오인식(생체인식), 스마트폰, 전기자전거, 전기차, 전력저장장치(ESS), 카메라모듈/부품, 휴대폰부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 612,
    "itemName": "휴온스글로벌",
    "itemCode": "084110",
    "theme": "보톡스(보툴리눔톡신), 지주사, 코로나19(스푸트니크V)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 613,
    "itemName": "티웨이항공",
    "itemCode": "091810",
    "theme": "항공/저가 항공사(LCC)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 614,
    "itemName": "연우",
    "itemCode": "115960",
    "theme": "화장품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 615,
    "itemName": "드림어스컴퍼니",
    "itemCode": "060570",
    "theme": "4차산업 수혜주, 사물인터넷, 여름, 음원/음반",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 616,
    "itemName": "동성제약",
    "itemCode": "002210",
    "theme": "제약업체, 코로나19(덱사메타손), 화장품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 617,
    "itemName": "한일홀딩스",
    "itemCode": "003300",
    "theme": "지주사",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 618,
    "itemName": "이노와이어리스",
    "itemCode": "073490",
    "theme": "5G(5세대 이동통신), 통신장비",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 619,
    "itemName": "프로텍",
    "itemCode": "053610",
    "theme": "3D 프린터, 반도체 장비, 아이폰, 전자파, LED장비",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 620,
    "itemName": "하림",
    "itemCode": "136480",
    "theme": "구제역/광우병 수혜, 아프리카 돼지열병(ASF), 여름, 육계",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 621,
    "itemName": "신흥에스이씨",
    "itemCode": "243840",
    "theme": "2차전지, 2차전지(소재/부품), 전기차",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 622,
    "itemName": "세진중공업",
    "itemCode": "075580",
    "theme": "조선기자재, 풍력에너지",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 623,
    "itemName": "파세코",
    "itemCode": "037070",
    "theme": "겨울, 리모델링/인테리어, 여름, 제습기, 황사/미세먼지",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 624,
    "itemName": "쇼박스",
    "itemCode": "086980",
    "theme": "영상콘텐츠, 영화, 쿠팡 관련주",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 625,
    "itemName": "제테마",
    "itemCode": "216080",
    "theme": "보톡스(보툴리눔톡신), 의료기기",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 626,
    "itemName": "한세예스24홀딩스",
    "itemCode": "016450",
    "theme": "지주사, 카카오뱅크 관련주",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 627,
    "itemName": "신도리코",
    "itemCode": "029530",
    "theme": "3D 프린터",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 628,
    "itemName": "대한그린파워",
    "itemCode": "060900",
    "theme": "태양광에너지, 풍력에너지",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 629,
    "itemName": "ISC",
    "itemCode": "095340",
    "theme": "반도체 재료/부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 630,
    "itemName": "에어부산",
    "itemCode": "298690",
    "theme": "항공/저가 항공사(LCC)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 631,
    "itemName": "미래에셋벤처투자",
    "itemCode": "100790",
    "theme": "마켓컬리 관련주, 창투사",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 632,
    "itemName": "이수화학",
    "itemCode": "005950",
    "theme": "석유화학, 코로나19(화이자)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 633,
    "itemName": "이연제약",
    "itemCode": "102460",
    "theme": "슈퍼박테리아, 제약업체, 치매",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 634,
    "itemName": "이엔드디",
    "itemCode": "101360",
    "theme": "2020 하반기 신규상장, 2차전지, 2차전지(소재/부품)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 635,
    "itemName": "코리아써키트",
    "itemCode": "007810",
    "theme": "갤럭시 부품주, PCB(FPCB 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 636,
    "itemName": "세틀뱅크",
    "itemCode": "234340",
    "theme": "전자결제(전자화폐), 쿠팡 관련주, 핀테크(FinTech)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 637,
    "itemName": "경동제약",
    "itemCode": "011040",
    "theme": "제약업체, 코로나19(덱사메타손)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 638,
    "itemName": "한양이엔지",
    "itemCode": "045100",
    "theme": "3D 낸드(NAND), 반도체 장비, 우주항공산업, 원자력발전, LCD장비",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 639,
    "itemName": "크리스에프앤씨",
    "itemCode": "110790",
    "theme": "패션/의류",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 640,
    "itemName": "경농",
    "itemCode": "002100",
    "theme": "남북경협, 농업, 태풍 및 장마",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 641,
    "itemName": "아이씨디",
    "itemCode": "040910",
    "theme": "LCD장비, OLED(유기 발광 다이오드)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 642,
    "itemName": "동양",
    "itemCode": "001520",
    "theme": "마스크, 시멘트/레미콘",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 643,
    "itemName": "디티알오토모티브",
    "itemCode": "007340",
    "theme": "자동차부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 644,
    "itemName": "게임빌",
    "itemCode": "063080",
    "theme": "모바일게임(스마트폰), 모바일콘텐츠(스마트폰/태블릿PC)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 645,
    "itemName": "유니퀘스트",
    "itemCode": "077500",
    "theme": "4차산업 수혜주, 바이오인식(생체인식), 자율주행차",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 646,
    "itemName": "엠투엔",
    "itemCode": "033310",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 647,
    "itemName": "제주은행",
    "itemCode": "006220",
    "theme": "은행",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 648,
    "itemName": "위지윅스튜디오",
    "itemCode": "299900",
    "theme": "가상현실(VR), 메타버스(Metaverse), 영상콘텐츠, 증강현실(AR)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 649,
    "itemName": "펩트론",
    "itemCode": "087010",
    "theme": "치매, 코로나19(나파모스타트), 코로나19(진단/치료제/백신 개발 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 650,
    "itemName": "한국알콜",
    "itemCode": "017890",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 651,
    "itemName": "아이마켓코리아",
    "itemCode": "122900",
    "theme": "소모성자재구매대행(MRO)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 652,
    "itemName": "미래컴퍼니",
    "itemCode": "049950",
    "theme": "의료기기, 지능형로봇/인공지능(AI), LCD장비, LED장비, OLED(유기 발광 다이오드)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 653,
    "itemName": "삼화페인트",
    "itemCode": "000390",
    "theme": "페인트",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 654,
    "itemName": "나이스정보통신",
    "itemCode": "036800",
    "theme": "삼성페이",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 655,
    "itemName": "신대양제지",
    "itemCode": "016590",
    "theme": "골판지 제조",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 656,
    "itemName": "큐리언트",
    "itemCode": "115180",
    "theme": "면역항암제",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 657,
    "itemName": "자이에스앤디",
    "itemCode": "317400",
    "theme": "스마트홈(홈네트워크)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 658,
    "itemName": "유티아이",
    "itemCode": "179900",
    "theme": "스마트폰, 폴더블폰, 플렉서블 디스플레이",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 659,
    "itemName": "에스티아이",
    "itemCode": "039440",
    "theme": "3D 프린터, 반도체 장비, LCD장비",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 660,
    "itemName": "현대비앤지스틸",
    "itemCode": "004560",
    "theme": "비철금속, 철강 중소형",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 661,
    "itemName": "E1",
    "itemCode": "017940",
    "theme": "셰일가스(Shale Gas), LPG(액화석유가스)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 662,
    "itemName": "와이엔텍",
    "itemCode": "067900",
    "theme": "폐기물처리",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 663,
    "itemName": "제우스",
    "itemCode": "079370",
    "theme": "3D 낸드(NAND), 태양광에너지, LCD장비",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 664,
    "itemName": "KISCO홀딩스",
    "itemCode": "001940",
    "theme": "지주사",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 665,
    "itemName": "와이엠티",
    "itemCode": "251370",
    "theme": "아이폰, PCB(FPCB 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 666,
    "itemName": "골프존뉴딘홀딩스",
    "itemCode": "121440",
    "theme": "지주사",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 667,
    "itemName": "금호에이치티",
    "itemCode": "214330",
    "theme": "자동차부품, LED",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 668,
    "itemName": "아이디스",
    "itemCode": "143160",
    "theme": "보안주(물리), CCTV＆DVR",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 669,
    "itemName": "테라젠이텍스",
    "itemCode": "066700",
    "theme": "고령화 사회(노인복지), 유전자 치료제/분석, 제약업체, U-Healthcare(원격진료)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 670,
    "itemName": "브이티지엠피",
    "itemCode": "018290",
    "theme": "화장품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 671,
    "itemName": "IHQ",
    "itemCode": "003560",
    "theme": "미디어(방송/신문), 엔터테인먼트, 영상콘텐츠, 영화, 음원/음반",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 672,
    "itemName": "키이스트",
    "itemCode": "054780",
    "theme": "엔터테인먼트, 영상콘텐츠",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 673,
    "itemName": "티케이케미칼",
    "itemCode": "104480",
    "theme": "정치/인맥(이낙연), 화학섬유",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 674,
    "itemName": "시노펙스",
    "itemCode": "025320",
    "theme": "갤럭시 부품주, 수소차(연료전지/부품/충전소 등), 수자원(양적/질적 개선), 스마트폰, 자동차부품, 코로나19(혈장치료/혈장치료제), PCB(FPCB 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 675,
    "itemName": "덕산하이메탈",
    "itemCode": "077360",
    "theme": "그래핀, 반도체 재료/부품, 지주사",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 676,
    "itemName": "인스코비",
    "itemCode": "006490",
    "theme": "스마트그리드(지능형전력망), MVNO(가상이동통신망사업자)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 677,
    "itemName": "휴비스",
    "itemCode": "079980",
    "theme": "그래핀, 마스크, 원자력발전소 해체, 화학섬유",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 678,
    "itemName": "SBS미디어홀딩스",
    "itemCode": "101060",
    "theme": "미디어(방송/신문), 영상콘텐츠, 지주사",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 679,
    "itemName": "코스모화학",
    "itemCode": "005420",
    "theme": "2차전지, 2차전지(소재/부품)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 680,
    "itemName": "엘오티베큠",
    "itemCode": "083310",
    "theme": "반도체 장비, 태양광에너지, LCD장비, OLED(유기 발광 다이오드)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 681,
    "itemName": "아나패스",
    "itemCode": "123860",
    "theme": "시스템반도체, LCD 부품/소재",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 682,
    "itemName": "라온피플",
    "itemCode": "300120",
    "theme": "카메라모듈/부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 683,
    "itemName": "에이텍",
    "itemCode": "045660",
    "theme": "사물인터넷, 정치/인맥(이재명)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 684,
    "itemName": "경인양행",
    "itemCode": "012610",
    "theme": "그래핀, 日 수출 규제(국산화 등), 플렉서블 디스플레이",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 685,
    "itemName": "도화엔지니어링",
    "itemCode": "002150",
    "theme": "남북경협, 수자원(양적/질적 개선), 철도, 태양광에너지, GTX(수도권 광역급행철도)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 686,
    "itemName": "인텍플러스",
    "itemCode": "064290",
    "theme": "반도체 장비",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 687,
    "itemName": "네오위즈홀딩스",
    "itemCode": "042420",
    "theme": "게임, 모바일게임(스마트폰), 모바일콘텐츠(스마트폰/태블릿PC), 지주사",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 688,
    "itemName": "그린케미칼",
    "itemCode": "083420",
    "theme": "석유화학, 온실가스(탄소배출권)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 689,
    "itemName": "KMH",
    "itemCode": "122450",
    "theme": "영상콘텐츠, 케이블TV SO/MSO",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 690,
    "itemName": "팜스코",
    "itemCode": "036580",
    "theme": "마켓컬리 관련주, 사료, 아프리카 돼지열병(ASF)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 691,
    "itemName": "이엠텍",
    "itemCode": "091120",
    "theme": "스마트폰, 휴대폰부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 692,
    "itemName": "코오롱",
    "itemCode": "002020",
    "theme": "두나무 관련주, 지주사",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 693,
    "itemName": "경보제약",
    "itemCode": "214390",
    "theme": "제약업체, 코로나19(나파모스타트)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 694,
    "itemName": "CJ프레시웨이",
    "itemCode": "051500",
    "theme": "음식료업종",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 695,
    "itemName": "동부건설",
    "itemCode": "005960",
    "theme": "건설 중소형",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 696,
    "itemName": "진성티이씨",
    "itemCode": "036890",
    "theme": "건설기계, 수소차(연료전지/부품/충전소 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 697,
    "itemName": "나노신소재",
    "itemCode": "121600",
    "theme": "2차전지, 2차전지(소재/부품), 태양광에너지, LED, OLED(유기 발광 다이오드)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 698,
    "itemName": "KEC",
    "itemCode": "092220",
    "theme": "반도체 재료/부품, 전기차",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 699,
    "itemName": "디와이피엔에프",
    "itemCode": "104460",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 700,
    "itemName": "삼영무역",
    "itemCode": "002810",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 701,
    "itemName": "신세계푸드",
    "itemCode": "031440",
    "theme": "음식료업종",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 702,
    "itemName": "이지홀딩스",
    "itemCode": "035810",
    "theme": "구제역/광우병 수혜, 사료, 아프리카 돼지열병(ASF), 여름, 육계, 지주사",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 703,
    "itemName": "비보존 헬스케어",
    "itemCode": "082800",
    "theme": "LED",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 704,
    "itemName": "포인트모바일",
    "itemCode": "318020",
    "theme": "2020 하반기 신규상장",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 705,
    "itemName": "오성첨단소재",
    "itemCode": "052420",
    "theme": "마리화나(대마), LCD 부품/소재",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 706,
    "itemName": "유일에너테크",
    "itemCode": "340930",
    "theme": "2021 상반기 신규상장, 2차전지, 2차전지(장비), 수소차(연료전지/부품/충전소 등), 전기차, 전력저장장치(ESS)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 707,
    "itemName": "KCTC",
    "itemCode": "009070",
    "theme": "종합 물류, 쿠팡 관련주",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 708,
    "itemName": "세방",
    "itemCode": "004360",
    "theme": "종합 물류",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 709,
    "itemName": "모다이노칩",
    "itemCode": "080420",
    "theme": "스마트폰, 휴대폰부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 710,
    "itemName": "자화전자",
    "itemCode": "033240",
    "theme": "갤럭시 부품주, 남북경협, 스마트폰, 카메라모듈/부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 711,
    "itemName": "대영포장",
    "itemCode": "014160",
    "theme": "골판지 제조, 정치/인맥(윤석열)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 712,
    "itemName": "씨에스베어링",
    "itemCode": "297090",
    "theme": "풍력에너지",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 713,
    "itemName": "아시아나IDT",
    "itemCode": "267850",
    "theme": "SI(시스템통합)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 714,
    "itemName": "인터플렉스",
    "itemCode": "051370",
    "theme": "갤럭시 부품주, 스마트폰, 아이폰, 폴더블폰, 플렉서블 디스플레이, 휴대폰부품, PCB(FPCB 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 715,
    "itemName": "네오팜",
    "itemCode": "092730",
    "theme": "건강기능식품, 엔젤산업, 출산장려정책, 화장품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 716,
    "itemName": "뷰노",
    "itemCode": "338220",
    "theme": "2021 상반기 신규상장, 의료기기, 지능형로봇/인공지능(AI)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 717,
    "itemName": "엠에스오토텍",
    "itemCode": "123040",
    "theme": "자동차부품, 전기차",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 718,
    "itemName": "AP위성",
    "itemCode": "211270",
    "theme": "우주항공산업, 통신장비",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 719,
    "itemName": "큐렉소",
    "itemCode": "060280",
    "theme": "4차산업 수혜주, 고령화 사회(노인복지), 의료기기, 지능형로봇/인공지능(AI)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 720,
    "itemName": "광주신세계",
    "itemCode": "037710",
    "theme": "백화점, 소매유통",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 721,
    "itemName": "에이프로",
    "itemCode": "262260",
    "theme": "2020 하반기 신규상장, 2차전지, 2차전지(장비)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 722,
    "itemName": "대보마그네틱",
    "itemCode": "290670",
    "theme": "2차전지, 2차전지(장비)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 723,
    "itemName": "지어소프트",
    "itemCode": "051160",
    "theme": "광고, 마켓컬리 관련주, 모바일솔루션(스마트폰), 소매유통",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 724,
    "itemName": "코아스템",
    "itemCode": "166480",
    "theme": "줄기세포",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 725,
    "itemName": "계룡건설",
    "itemCode": "013580",
    "theme": "건설 중소형",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 726,
    "itemName": "제넨바이오",
    "itemCode": "072520",
    "theme": "폐기물처리",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 727,
    "itemName": "뉴파워프라즈마",
    "itemCode": "144960",
    "theme": "반도체 재료/부품, LCD 부품/소재, OLED(유기 발광 다이오드)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 728,
    "itemName": "파멥신",
    "itemCode": "208340",
    "theme": "면역항암제, 바이오시밀러(복제 바이오의약품)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 729,
    "itemName": "브릿지바이오테라퓨틱스",
    "itemCode": "288330",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 730,
    "itemName": "올리패스",
    "itemCode": "244460",
    "theme": "유전자 치료제/분석, 화장품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 731,
    "itemName": "삼익THK",
    "itemCode": "004380",
    "theme": "4차산업 수혜주, 공작기계, 스마트팩토리(스마트공장)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 732,
    "itemName": "디바이스이엔지",
    "itemCode": "187870",
    "theme": "반도체 장비, OLED(유기 발광 다이오드)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 733,
    "itemName": "서연",
    "itemCode": "007860",
    "theme": "정치/인맥(윤석열), 지주사",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 734,
    "itemName": "인바디",
    "itemCode": "041830",
    "theme": "고령화 사회(노인복지), 의료기기, U-Healthcare(원격진료)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 735,
    "itemName": "세종공업",
    "itemCode": "033530",
    "theme": "수소차(연료전지/부품/충전소 등), 온실가스(탄소배출권), 자동차부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 736,
    "itemName": "대원강업",
    "itemCode": "000430",
    "theme": "수소차(연료전지/부품/충전소 등), 자동차부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 737,
    "itemName": "뉴트리",
    "itemCode": "270870",
    "theme": "건강기능식품, 음식료업종",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 738,
    "itemName": "앱코",
    "itemCode": "129890",
    "theme": "2020 하반기 신규상장",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 739,
    "itemName": "화승알앤에이",
    "itemCode": "378850",
    "theme": "자동차부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 740,
    "itemName": "현대약품",
    "itemCode": "004310",
    "theme": "제약업체, 치매",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 741,
    "itemName": "아바텍",
    "itemCode": "149950",
    "theme": "LCD 부품/소재",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 742,
    "itemName": "텔레칩스",
    "itemCode": "054450",
    "theme": "스마트폰, 시스템반도체, 자율주행차, 증강현실(AR), 휴대폰부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 743,
    "itemName": "흥국화재",
    "itemCode": "000540",
    "theme": "손해보험, 정치/인맥(황교안)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 744,
    "itemName": "에스에이엠티",
    "itemCode": "031330",
    "theme": "반도체 재료/부품, LCD 부품/소재",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 745,
    "itemName": "한농화성",
    "itemCode": "011500",
    "theme": "2차전지, 2차전지(소재/부품)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 746,
    "itemName": "센트랄모텍",
    "itemCode": "308170",
    "theme": "자동차부품, 전기차",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 747,
    "itemName": "국전약품",
    "itemCode": "307750",
    "theme": "제약업체, 치매, 코로나19(나파모스타트), 코로나19(진단/치료제/백신 개발 등), 코로나19(치료제/백신 개발 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 748,
    "itemName": "넥센",
    "itemCode": "005720",
    "theme": "지주사, 타이어",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 749,
    "itemName": "SBI인베스트먼트",
    "itemCode": "019550",
    "theme": "4차산업 수혜주, 가상화폐(비트코인 등), 창투사",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 750,
    "itemName": "필옵틱스",
    "itemCode": "161580",
    "theme": "2차전지, 2차전지(장비), 플렉서블 디스플레이, OLED(유기 발광 다이오드), PCB(FPCB 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 751,
    "itemName": "일신바이오",
    "itemCode": "068330",
    "theme": "코로나19(혈장치료/혈장치료제), 콜드체인(저온 유통)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 752,
    "itemName": "DB금융투자",
    "itemCode": "016610",
    "theme": "증권",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 753,
    "itemName": "인터로조",
    "itemCode": "119610",
    "theme": "고령화 사회(노인복지), 의료기기",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 754,
    "itemName": "KTB투자증권",
    "itemCode": "030210",
    "theme": "증권",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 755,
    "itemName": "KSS해운",
    "itemCode": "044450",
    "theme": "해운",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 756,
    "itemName": "일진홀딩스",
    "itemCode": "015860",
    "theme": "스마트그리드(지능형전력망), 지주사, 치매",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 757,
    "itemName": "미스터블루",
    "itemCode": "207760",
    "theme": "모바일게임(스마트폰), 모바일콘텐츠(스마트폰/태블릿PC), 웹툰",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 758,
    "itemName": "인지컨트롤스",
    "itemCode": "023800",
    "theme": "남북경협, 수소차(연료전지/부품/충전소 등), 자동차부품, 전기차",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 759,
    "itemName": "에치에프알",
    "itemCode": "230240",
    "theme": "5G(5세대 이동통신), 통신장비",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 760,
    "itemName": "HSD엔진",
    "itemCode": "082740",
    "theme": "조선기자재, LNG(액화천연가스)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 761,
    "itemName": "풍산홀딩스",
    "itemCode": "005810",
    "theme": "방위산업/전쟁 및 테러, 비철금속, 지주사",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 762,
    "itemName": "풍국주정",
    "itemCode": "023900",
    "theme": "수소차(연료전지/부품/충전소 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 763,
    "itemName": "한컴위드",
    "itemCode": "054920",
    "theme": "모바일콘텐츠(스마트폰/태블릿PC), 보안주(정보), 블록체인, 인터넷은행, 핀테크(FinTech)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 764,
    "itemName": "용평리조트",
    "itemCode": "070960",
    "theme": "DMZ 평화공원",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 765,
    "itemName": "해태제과식품",
    "itemCode": "101530",
    "theme": "음식료업종, 日제품 불매운동(수혜)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 766,
    "itemName": "세경하이테크",
    "itemCode": "148150",
    "theme": "갤럭시 부품주, 스마트폰, 폴더블폰, 휴대폰부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 767,
    "itemName": "우주일렉트로",
    "itemCode": "065680",
    "theme": "휴대폰부품, LCD 부품/소재",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 768,
    "itemName": "로보스타",
    "itemCode": "090360",
    "theme": "3D 프린터, 4차산업 수혜주, 반도체 장비, 지능형로봇/인공지능(AI), LCD장비, OLED(유기 발광 다이오드)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 769,
    "itemName": "아남전자",
    "itemCode": "008700",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 770,
    "itemName": "피플바이오",
    "itemCode": "304840",
    "theme": "2020 하반기 신규상장, 치매",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 771,
    "itemName": "비츠로테크",
    "itemCode": "042370",
    "theme": "방위산업/전쟁 및 테러, 우주항공산업, 원자력발전소 해체, 전력설비, 철도, 핵융합에너지",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 772,
    "itemName": "지노믹트리",
    "itemCode": "228760",
    "theme": "유전자 치료제/분석, 코로나19(진단/치료제/백신 개발 등), 코로나19(진단키트)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 773,
    "itemName": "세아제강",
    "itemCode": "306200",
    "theme": "강관업체(Steel pipe), 남-북-러 가스관사업, 철강 주요종목, 풍력에너지",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 774,
    "itemName": "세운메디칼",
    "itemCode": "100700",
    "theme": "고령화 사회(노인복지), 의료기기",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 775,
    "itemName": "LS전선아시아",
    "itemCode": "229640",
    "theme": "지주사",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 776,
    "itemName": "대한광통신",
    "itemCode": "010170",
    "theme": "5G(5세대 이동통신)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 777,
    "itemName": "서연이화",
    "itemCode": "200880",
    "theme": "자동차부품, 정치/인맥(윤석열)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 778,
    "itemName": "알에프텍",
    "itemCode": "061040",
    "theme": "5G(5세대 이동통신), 갤럭시 부품주, 무선충전기술, 보톡스(보툴리눔톡신), 삼성페이, 스마트폰, 휴대폰부품, LED",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 779,
    "itemName": "예스티",
    "itemCode": "122640",
    "theme": "반도체 장비, LCD장비, LED장비, OLED(유기 발광 다이오드)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 780,
    "itemName": "엠케이전자",
    "itemCode": "033160",
    "theme": "2차전지, 2차전지(소재/부품), 반도체 재료/부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 781,
    "itemName": "루트로닉",
    "itemCode": "085370",
    "theme": "의료기기",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 782,
    "itemName": "케이피에스",
    "itemCode": "256940",
    "theme": "OLED(유기 발광 다이오드)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 783,
    "itemName": "KNN",
    "itemCode": "058400",
    "theme": "미디어(방송/신문)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 784,
    "itemName": "우리산업",
    "itemCode": "215360",
    "theme": "수소차(연료전지/부품/충전소 등), 자동차부품, 전기차",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 785,
    "itemName": "퀀타매트릭스",
    "itemCode": "317690",
    "theme": "2020 하반기 신규상장, 의료기기, 코로나19(진단/치료제/백신 개발 등), 코로나19(진단키트)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 786,
    "itemName": "SV인베스트먼트",
    "itemCode": "289080",
    "theme": "창투사, 코로나19(진단/치료제/백신 개발 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 787,
    "itemName": "신성델타테크",
    "itemCode": "065350",
    "theme": "2차전지, 2차전지(소재/부품)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 788,
    "itemName": "대덕",
    "itemCode": "008060",
    "theme": "지주사",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 789,
    "itemName": "앤디포스",
    "itemCode": "238090",
    "theme": "갤럭시 부품주, 아이폰, 코로나19(진단/치료제/백신 개발 등), 코로나19(진단키트), 휴대폰부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 790,
    "itemName": "시너지이노베이션",
    "itemCode": "048870",
    "theme": "건강기능식품, 의료기기, 코로나19(진단/치료제/백신 개발 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 791,
    "itemName": "핑거",
    "itemCode": "163730",
    "theme": "2021 상반기 신규상장, 모바일솔루션(스마트폰), 핀테크(FinTech)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 792,
    "itemName": "제일전기공업",
    "itemCode": "199820",
    "theme": "2020 하반기 신규상장, 스마트홈(홈네트워크), 전력설비",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 793,
    "itemName": "제이브이엠",
    "itemCode": "054950",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 794,
    "itemName": "선데이토즈",
    "itemCode": "123420",
    "theme": "게임, 모바일게임(스마트폰)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 795,
    "itemName": "남화산업",
    "itemCode": "111710",
    "theme": "정치/인맥(이낙연)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 796,
    "itemName": "코렌텍",
    "itemCode": "104540",
    "theme": "3D 프린터, 의료기기",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 797,
    "itemName": "부국증권",
    "itemCode": "001270",
    "theme": "증권",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 798,
    "itemName": "예스24",
    "itemCode": "053280",
    "theme": "인터넷은행, 카카오뱅크 관련주",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 799,
    "itemName": "켐온",
    "itemCode": "217600",
    "theme": "치매",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 800,
    "itemName": "레이크머티리얼즈",
    "itemCode": "281740",
    "theme": "반도체 재료/부품, 태양광에너지, LED",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 801,
    "itemName": "디지털대성",
    "itemCode": "068930",
    "theme": "교육/온라인 교육",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 802,
    "itemName": "제로투세븐",
    "itemCode": "159580",
    "theme": "엔젤산업, 출산장려정책, 화장품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 803,
    "itemName": "휴메딕스",
    "itemCode": "200670",
    "theme": "코로나19(덱사메타손), 코로나19(스푸트니크V)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 804,
    "itemName": "에스퓨얼셀",
    "itemCode": "288620",
    "theme": "수소차(연료전지/부품/충전소 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 805,
    "itemName": "이지바이오",
    "itemCode": "353810",
    "theme": "사료, 아프리카 돼지열병(ASF)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 806,
    "itemName": "SIMPAC",
    "itemCode": "009160",
    "theme": "공작기계",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 807,
    "itemName": "우수AMS",
    "itemCode": "066590",
    "theme": "수소차(연료전지/부품/충전소 등), 자동차부품, 전기차",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 808,
    "itemName": "바이오솔루션",
    "itemCode": "086820",
    "theme": "줄기세포",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 809,
    "itemName": "수젠텍",
    "itemCode": "253840",
    "theme": "의료기기, 치매, 코로나19(진단/치료제/백신 개발 등), 코로나19(진단키트)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 810,
    "itemName": "아모그린텍",
    "itemCode": "125210",
    "theme": "갤럭시 부품주, 스마트그리드(지능형전력망), 스마트폰, 전기차, PCB(FPCB 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 811,
    "itemName": "대화제약",
    "itemCode": "067080",
    "theme": "제약업체, 치매",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 812,
    "itemName": "에이비프로바이오",
    "itemCode": "195990",
    "theme": "공작기계, 원자력발전소 해체, 코로나19(모더나)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 813,
    "itemName": "효성ITX",
    "itemCode": "094280",
    "theme": "사물인터넷, 삼성페이, 스마트팩토리(스마트공장), 재택근무/스마트워크, 클라우드 컴퓨팅",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 814,
    "itemName": "HB테크놀러지",
    "itemCode": "078150",
    "theme": "반도체 장비, LCD장비, OLED(유기 발광 다이오드)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 815,
    "itemName": "파인테크닉스",
    "itemCode": "106240",
    "theme": "폴더블폰, 휴대폰부품, LED",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 816,
    "itemName": "미투온",
    "itemCode": "201490",
    "theme": "가상현실(VR), 게임, 모바일게임(스마트폰)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 817,
    "itemName": "녹십자웰빙",
    "itemCode": "234690",
    "theme": "제약업체",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 818,
    "itemName": "드림시큐리티",
    "itemCode": "203650",
    "theme": "4차산업 수혜주, 바이오인식(생체인식), 보안주(정보), 블록체인, 삼성페이, 인터넷은행, 카카오뱅크 관련주",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 819,
    "itemName": "퓨쳐켐",
    "itemCode": "220100",
    "theme": "고령화 사회(노인복지), 치매",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 820,
    "itemName": "한국전자금융",
    "itemCode": "063570",
    "theme": "키오스크(KIOSK), 화폐/금융자동화기기(디지털화폐 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 821,
    "itemName": "코오롱머티리얼",
    "itemCode": "144620",
    "theme": "수소차(연료전지/부품/충전소 등), 화학섬유",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 822,
    "itemName": "신성통상",
    "itemCode": "005390",
    "theme": "日제품 불매운동(수혜), 정치/인맥(문재인), 패션/의류",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 823,
    "itemName": "어보브반도체",
    "itemCode": "102120",
    "theme": "4차산업 수혜주, 밥솥, 시스템반도체",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 824,
    "itemName": "디엔에프",
    "itemCode": "092070",
    "theme": "3D 낸드(NAND), 반도체 재료/부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 825,
    "itemName": "키다리스튜디오",
    "itemCode": "020120",
    "theme": "모바일콘텐츠(스마트폰/태블릿PC), 웹툰",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 826,
    "itemName": "오리엔트바이오",
    "itemCode": "002630",
    "theme": "정치/인맥(이재명)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 827,
    "itemName": "위드텍",
    "itemCode": "348350",
    "theme": "2020 하반기 신규상장, 반도체 장비",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 828,
    "itemName": "엔비티",
    "itemCode": "236810",
    "theme": "2021 상반기 신규상장, 광고, 웹툰, 쿠팡 관련주",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 829,
    "itemName": "모트렉스",
    "itemCode": "118990",
    "theme": "스마트카(SMART CAR), 자동차부품, 자율주행차",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 830,
    "itemName": "해성산업",
    "itemCode": "034810",
    "theme": "제지",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 831,
    "itemName": "KG ETS",
    "itemCode": "151860",
    "theme": "폐기물처리",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 832,
    "itemName": "녹십자엠에스",
    "itemCode": "142280",
    "theme": "마스크, 코로나19(진단/치료제/백신 개발 등), 코로나19(진단키트)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 833,
    "itemName": "에스제이그룹",
    "itemCode": "306040",
    "theme": "패션/의류",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 834,
    "itemName": "디아이",
    "itemCode": "003160",
    "theme": "반도체 장비, 시스템반도체",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 835,
    "itemName": "브랜드엑스코퍼레이션",
    "itemCode": "337930",
    "theme": "2020 하반기 신규상장, 패션/의류",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 836,
    "itemName": "씨앤투스성진",
    "itemCode": "352700",
    "theme": "2021 상반기 신규상장, 마스크",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 837,
    "itemName": "에이블씨엔씨",
    "itemCode": "078520",
    "theme": "화장품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 838,
    "itemName": "펌텍코리아",
    "itemCode": "251970",
    "theme": "화장품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 839,
    "itemName": "아미노로직스",
    "itemCode": "074430",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 840,
    "itemName": "라파스",
    "itemCode": "214260",
    "theme": "화장품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 841,
    "itemName": "코오롱생명과학",
    "itemCode": "102940",
    "theme": "수자원(양적/질적 개선), 유전자 치료제/분석, 제약업체",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 842,
    "itemName": "이엠코리아",
    "itemCode": "095190",
    "theme": "공작기계, 남-북-러 가스관사업, 방위산업/전쟁 및 테러, 선박평형수 처리장치, 수소차(연료전지/부품/충전소 등), 원자력발전, 철도, 항공기부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 843,
    "itemName": "민앤지",
    "itemCode": "214180",
    "theme": "모바일콘텐츠(스마트폰/태블릿PC), 보안주(정보), 인터넷은행, 핀테크(FinTech)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 844,
    "itemName": "한국정보인증",
    "itemCode": "053300",
    "theme": "보안주(정보), 삼성페이, 인터넷은행, 핀테크(FinTech)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 845,
    "itemName": "썸에이지",
    "itemCode": "208640",
    "theme": "모바일게임(스마트폰)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 846,
    "itemName": "유비쿼스",
    "itemCode": "264450",
    "theme": "5G(5세대 이동통신), 사물인터넷, 통신장비",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 847,
    "itemName": "코윈테크",
    "itemCode": "282880",
    "theme": "2차전지, 2차전지(장비), 스마트팩토리(스마트공장)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 848,
    "itemName": "삼지전자",
    "itemCode": "037460",
    "theme": "5G(5세대 이동통신), 통신장비",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 849,
    "itemName": "코오롱플라스틱",
    "itemCode": "138490",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 850,
    "itemName": "성광벤드",
    "itemCode": "014620",
    "theme": "원자력발전, 조선기자재",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 851,
    "itemName": "티엘비",
    "itemCode": "356860",
    "theme": "2020 하반기 신규상장, PCB(FPCB 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 852,
    "itemName": "하이비젼시스템",
    "itemCode": "126700",
    "theme": "3D 프린터, 가상현실(VR), 스마트폰, 아이폰, 자율주행차, 카메라모듈/부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 853,
    "itemName": "테고사이언스",
    "itemCode": "191420",
    "theme": "줄기세포",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 854,
    "itemName": "태광",
    "itemCode": "023160",
    "theme": "원자력발전, 조선기자재",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 855,
    "itemName": "진매트릭스",
    "itemCode": "109820",
    "theme": "메르스 코로나 바이러스, 코로나19(진단/치료제/백신 개발 등), 코로나19(진단키트), 코로나19(치료제/백신 개발 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 856,
    "itemName": "LS네트웍스",
    "itemCode": "000680",
    "theme": "패션/의류",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 857,
    "itemName": "하이록코리아",
    "itemCode": "013030",
    "theme": "원자력발전, 조선기자재, 철도",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 858,
    "itemName": "한신공영",
    "itemCode": "004960",
    "theme": "건설 중소형",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 859,
    "itemName": "동아화성",
    "itemCode": "041930",
    "theme": "수소차(연료전지/부품/충전소 등), 자동차부품, 전기차",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 860,
    "itemName": "JW신약",
    "itemCode": "067290",
    "theme": "제약업체",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 861,
    "itemName": "사조산업",
    "itemCode": "007160",
    "theme": "구제역/광우병 수혜, 수산",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 862,
    "itemName": "싸이맥스",
    "itemCode": "160980",
    "theme": "반도체 장비",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 863,
    "itemName": "원방테크",
    "itemCode": "053080",
    "theme": "2020 하반기 신규상장, 2차전지, 반도체 장비, 코로나19(음압병실/음압구급차)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 864,
    "itemName": "삼영전자",
    "itemCode": "005680",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 865,
    "itemName": "옵트론텍",
    "itemCode": "082210",
    "theme": "갤럭시 부품주, 자율주행차, 카메라모듈/부품, 휴대폰부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 866,
    "itemName": "대한약품",
    "itemCode": "023910",
    "theme": "정치/인맥(정세균), 제약업체, 코로나19(화이자)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 867,
    "itemName": "빅텍",
    "itemCode": "065450",
    "theme": "방위산업/전쟁 및 테러, 자전거, RFID(NFC 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 868,
    "itemName": "솔본",
    "itemCode": "035610",
    "theme": "지주사",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 869,
    "itemName": "노터스",
    "itemCode": "278650",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 870,
    "itemName": "엔젠바이오",
    "itemCode": "354200",
    "theme": "2020 하반기 신규상장, 유전자 치료제/분석",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 871,
    "itemName": "금양",
    "itemCode": "001570",
    "theme": "2차전지, 2차전지(소재/부품), 정치/인맥(오세훈)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 872,
    "itemName": "모비릭스",
    "itemCode": "348030",
    "theme": "2021 상반기 신규상장, 게임, 모바일게임(스마트폰)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 873,
    "itemName": "DMS",
    "itemCode": "068790",
    "theme": "방위산업/전쟁 및 테러, 풍력에너지, 플렉서블 디스플레이, LCD장비, OLED(유기 발광 다이오드)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 874,
    "itemName": "양지사",
    "itemCode": "030960",
    "theme": "남북경협",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 875,
    "itemName": "비즈니스온",
    "itemCode": "138580",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 876,
    "itemName": "비나텍",
    "itemCode": "126340",
    "theme": "2020 하반기 신규상장, 수소차(연료전지/부품/충전소 등), 전력저장장치(ESS)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 877,
    "itemName": "와이지-원",
    "itemCode": "019210",
    "theme": "공작기계",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 878,
    "itemName": "오텍",
    "itemCode": "067170",
    "theme": "고령화 사회(노인복지), 공기청정기, 여름, 재난/안전(지진 등), 코로나19(음압병실/음압구급차), 쿠팡 관련주",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 879,
    "itemName": "케어랩스",
    "itemCode": "263700",
    "theme": "광고, 백신여권, U-Healthcare(원격진료)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 880,
    "itemName": "대한제당",
    "itemCode": "001790",
    "theme": "사료, 음식료업종, 정치/인맥(윤석열), 환율하락 수혜",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 881,
    "itemName": "덱스터",
    "itemCode": "206560",
    "theme": "가상현실(VR), 영화",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 882,
    "itemName": "랩지노믹스",
    "itemCode": "084650",
    "theme": "유전자 치료제/분석, 의료기기, 코로나19(진단/치료제/백신 개발 등), 코로나19(진단키트)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 883,
    "itemName": "신테카바이오",
    "itemCode": "226330",
    "theme": "유전자 치료제/분석, 지능형로봇/인공지능(AI)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 884,
    "itemName": "이엔플러스",
    "itemCode": "074610",
    "theme": "그래핀, 재난/안전(지진 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 885,
    "itemName": "서울옥션",
    "itemCode": "063170",
    "theme": "정치/인맥(홍정욱)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 886,
    "itemName": "한국화장품",
    "itemCode": "123690",
    "theme": "화장품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 887,
    "itemName": "세원",
    "itemCode": "234100",
    "theme": "수소차(연료전지/부품/충전소 등), 자동차부품, 전기차",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 888,
    "itemName": "무학",
    "itemCode": "033920",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 889,
    "itemName": "레이언스",
    "itemCode": "228850",
    "theme": "의료기기",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 890,
    "itemName": "이랜텍",
    "itemCode": "054210",
    "theme": "2차전지, 2차전지(소재/부품), 가상현실(VR), 갤럭시 부품주, 메타버스(Metaverse), 무선충전기술, 증강현실(AR), 휴대폰부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 891,
    "itemName": "삼보판지",
    "itemCode": "023600",
    "theme": "골판지 제조",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 892,
    "itemName": "삼화네트웍스",
    "itemCode": "046390",
    "theme": "엔터테인먼트, 영상콘텐츠",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 893,
    "itemName": "가비아",
    "itemCode": "079940",
    "theme": "보안주(정보), 클라우드 컴퓨팅, 핀테크(FinTech), SNS(소셜네트워크서비스)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 894,
    "itemName": "농우바이오",
    "itemCode": "054050",
    "theme": "농업",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 895,
    "itemName": "우리바이오",
    "itemCode": "082850",
    "theme": "마리화나(대마), 코로나19(화이자), LED, PCB(FPCB 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 896,
    "itemName": "한국주철관",
    "itemCode": "000970",
    "theme": "강관업체(Steel pipe), 수자원(양적/질적 개선), 철강 중소형, 화장품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 897,
    "itemName": "HDC현대EP",
    "itemCode": "089470",
    "theme": "자동차부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 898,
    "itemName": "팜스토리",
    "itemCode": "027710",
    "theme": "구제역/광우병 수혜, 사료, 아프리카 돼지열병(ASF), 여름, 육계",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 899,
    "itemName": "제주반도체",
    "itemCode": "080220",
    "theme": "코로나19(화이자), 휴대폰부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 900,
    "itemName": "아바코",
    "itemCode": "083930",
    "theme": "태양광에너지, LCD장비, OLED(유기 발광 다이오드)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 901,
    "itemName": "도이치모터스",
    "itemCode": "067990",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 902,
    "itemName": "윈스",
    "itemCode": "136540",
    "theme": "보안주(정보), 키오스크(KIOSK)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 903,
    "itemName": "노루페인트",
    "itemCode": "090350",
    "theme": "페인트",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 904,
    "itemName": "코리아나",
    "itemCode": "027050",
    "theme": "화장품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 905,
    "itemName": "한국캐피탈",
    "itemCode": "023760",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 906,
    "itemName": "백광산업",
    "itemCode": "001340",
    "theme": "메르스 코로나 바이러스",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 907,
    "itemName": "미코바이오메드",
    "itemCode": "214610",
    "theme": "2020 하반기 신규상장, 의료기기, 코로나19(진단/치료제/백신 개발 등), 코로나19(진단키트)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 908,
    "itemName": "휴마시스",
    "itemCode": "205470",
    "theme": "의료기기, 코로나19(진단/치료제/백신 개발 등), 코로나19(진단키트)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 909,
    "itemName": "백산",
    "itemCode": "035150",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 910,
    "itemName": "압타머사이언스",
    "itemCode": "291650",
    "theme": "2020 하반기 신규상장, 제약업체",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 911,
    "itemName": "성신양회",
    "itemCode": "004980",
    "theme": "시멘트/레미콘",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 912,
    "itemName": "테이팩스",
    "itemCode": "055490",
    "theme": "2차전지, 2차전지(소재/부품), 스마트폰, 폴더블폰",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 913,
    "itemName": "THE E&M",
    "itemCode": "089230",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 914,
    "itemName": "AJ네트웍스",
    "itemCode": "095570",
    "theme": "지주사",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 915,
    "itemName": "보광산업",
    "itemCode": "225530",
    "theme": "시멘트/레미콘, 아스콘(아스팔트 콘크리트)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 916,
    "itemName": "이화전기",
    "itemCode": "024810",
    "theme": "전력설비, 코로나19(스푸트니크V)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 917,
    "itemName": "YTN",
    "itemCode": "040300",
    "theme": "모바일콘텐츠(스마트폰/태블릿PC), 미디어(방송/신문), 방위산업/전쟁 및 테러",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 918,
    "itemName": "슈프리마",
    "itemCode": "236200",
    "theme": "바이오인식(생체인식), 보안주(물리)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 919,
    "itemName": "에스피지",
    "itemCode": "058610",
    "theme": "가상현실(VR), 공기청정기, 전기자전거, 제습기, 철도",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 920,
    "itemName": "수산중공업",
    "itemCode": "017550",
    "theme": "건설기계, 북한 광물자원개발, 정치/인맥(김무성), 정치/인맥(정세균)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 921,
    "itemName": "푸른저축은행",
    "itemCode": "007330",
    "theme": "정치/인맥(윤석열)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 922,
    "itemName": "에이에프더블류",
    "itemCode": "312610",
    "theme": "2차전지, 2차전지(소재/부품)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 923,
    "itemName": "리드코프",
    "itemCode": "012700",
    "theme": "日제품 불매운동(수혜)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 924,
    "itemName": "GS글로벌",
    "itemCode": "001250",
    "theme": "셰일가스(Shale Gas), 자원개발, 종합상사",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 925,
    "itemName": "팬엔터테인먼트",
    "itemCode": "068050",
    "theme": "엔터테인먼트, 영상콘텐츠",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 926,
    "itemName": "동아지질",
    "itemCode": "028100",
    "theme": "재난/안전(지진 등), 철도, 해저터널(지하화/지하도로 등), GTX(수도권 광역급행철도)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 927,
    "itemName": "나노엔텍",
    "itemCode": "039860",
    "theme": "고령화 사회(노인복지), 의료기기, 코로나19(진단/치료제/백신 개발 등), 코로나19(진단키트), U-Healthcare(원격진료)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 928,
    "itemName": "에스와이",
    "itemCode": "109610",
    "theme": "코로나19(음압병실/음압구급차), 태양광에너지",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 929,
    "itemName": "위지트",
    "itemCode": "036090",
    "theme": "가상화폐(비트코인 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 930,
    "itemName": "브이원텍",
    "itemCode": "251630",
    "theme": "2차전지, 2차전지(장비), 플렉서블 디스플레이, LCD장비, OLED(유기 발광 다이오드)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 931,
    "itemName": "제이엔케이히터",
    "itemCode": "126880",
    "theme": "수소차(연료전지/부품/충전소 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 932,
    "itemName": "센코",
    "itemCode": "347000",
    "theme": "2020 하반기 신규상장",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 933,
    "itemName": "갤럭시아머니트리",
    "itemCode": "094480",
    "theme": "가상화폐(비트코인 등), 모바일솔루션(스마트폰), 삼성페이, 전자결제(전자화폐), 쿠팡 관련주, 핀테크(FinTech), SNS(소셜네트워크서비스)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 934,
    "itemName": "한라",
    "itemCode": "014790",
    "theme": "건설 중소형, GTX(수도권 광역급행철도)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 935,
    "itemName": "대정화금",
    "itemCode": "120240",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 936,
    "itemName": "레드캡투어",
    "itemCode": "038390",
    "theme": "여행",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 937,
    "itemName": "가온미디어",
    "itemCode": "078890",
    "theme": "사물인터넷, 음성인식, 지능형로봇/인공지능(AI)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 938,
    "itemName": "캠시스",
    "itemCode": "050110",
    "theme": "갤럭시 부품주, 스마트폰, 자율주행차, 전기차, 정치/인맥(이재명), 카메라모듈/부품, 휴대폰부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 939,
    "itemName": "디와이파워",
    "itemCode": "210540",
    "theme": "건설기계",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 940,
    "itemName": "로보티즈",
    "itemCode": "108490",
    "theme": "지능형로봇/인공지능(AI)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 941,
    "itemName": "오션브릿지",
    "itemCode": "241790",
    "theme": "반도체 장비, 반도체 재료/부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 942,
    "itemName": "이노메트리",
    "itemCode": "302430",
    "theme": "2차전지, 2차전지(장비)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 943,
    "itemName": "디아이티",
    "itemCode": "110990",
    "theme": "2차전지, 2차전지(장비), 수소차(연료전지/부품/충전소 등), LCD장비, OLED(유기 발광 다이오드)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 944,
    "itemName": "명문제약",
    "itemCode": "017180",
    "theme": "구충제(펜벤다졸 등), 제약업체, 치매, 코로나19(나파모스타트), 코로나19(카모스타트)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 945,
    "itemName": "엔브이에이치코리아",
    "itemCode": "067570",
    "theme": "자동차부품, 코로나19(음압병실/음압구급차)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 946,
    "itemName": "덕성",
    "itemCode": "004830",
    "theme": "정치/인맥(윤석열)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 947,
    "itemName": "KCC건설",
    "itemCode": "021320",
    "theme": "건설 중소형",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 948,
    "itemName": "금화피에스시",
    "itemCode": "036190",
    "theme": "원자력발전, 전력설비",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 949,
    "itemName": "대창",
    "itemCode": "012800",
    "theme": "그래핀, 비철금속",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 950,
    "itemName": "포인트엔지니어링",
    "itemCode": "256630",
    "theme": "반도체 장비, LCD장비, LED, OLED(유기 발광 다이오드)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 951,
    "itemName": "동국산업",
    "itemCode": "005160",
    "theme": "철강 중소형, 풍력에너지",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 952,
    "itemName": "유니온머티리얼",
    "itemCode": "047400",
    "theme": "공작기계, 자동차부품, 희귀금속(희토류 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 953,
    "itemName": "와이엠씨",
    "itemCode": "155650",
    "theme": "LCD 부품/소재, OLED(유기 발광 다이오드)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 954,
    "itemName": "모베이스전자",
    "itemCode": "012860",
    "theme": "자동차부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 955,
    "itemName": "프리시젼바이오",
    "itemCode": "335810",
    "theme": "2020 하반기 신규상장, 의료기기",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 956,
    "itemName": "쎌바이오텍",
    "itemCode": "049960",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 957,
    "itemName": "센트럴바이오",
    "itemCode": "051980",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 958,
    "itemName": "오리엔트정공",
    "itemCode": "065500",
    "theme": "그래핀, 자동차부품, 정치/인맥(이재명)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 959,
    "itemName": "화신",
    "itemCode": "010690",
    "theme": "자동차부품, 전기차",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 960,
    "itemName": "크린앤사이언스",
    "itemCode": "045520",
    "theme": "공기청정기, 마스크, 메르스 코로나 바이러스, 황사/미세먼지",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 961,
    "itemName": "한국전자인증",
    "itemCode": "041460",
    "theme": "보안주(정보), 블록체인, 사물인터넷, 인터넷은행, 지능형로봇/인공지능(AI), 핀테크(FinTech)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 962,
    "itemName": "상신이디피",
    "itemCode": "091580",
    "theme": "2차전지, 2차전지(소재/부품), 전기차, 휴대폰부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 963,
    "itemName": "GST",
    "itemCode": "083450",
    "theme": "반도체 장비, 콜드체인(저온 유통)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 964,
    "itemName": "푸드나무",
    "itemCode": "290720",
    "theme": "육계, 음식료업종",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 965,
    "itemName": "비디아이",
    "itemCode": "148140",
    "theme": "풍력에너지, 황사/미세먼지",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 966,
    "itemName": "나인테크",
    "itemCode": "267320",
    "theme": "2차전지, 2차전지(장비), OLED(유기 발광 다이오드)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 967,
    "itemName": "삼천리자전거",
    "itemCode": "024950",
    "theme": "엔젤산업, 자전거, 전기자전거",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 968,
    "itemName": "클리노믹스",
    "itemCode": "352770",
    "theme": "2020 하반기 신규상장, 유전자 치료제/분석",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 969,
    "itemName": "성창기업지주",
    "itemCode": "000180",
    "theme": "조림사업, 지주사",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 970,
    "itemName": "피엔케이피부임상연구센타",
    "itemCode": "347740",
    "theme": "2020 하반기 신규상장",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 971,
    "itemName": "부방",
    "itemCode": "014470",
    "theme": "선박평형수 처리장치",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 972,
    "itemName": "카프로",
    "itemCode": "006380",
    "theme": "농업, 비료",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 973,
    "itemName": "포스코강판",
    "itemCode": "058430",
    "theme": "전기차, 철강 주요종목",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 974,
    "itemName": "신세계건설",
    "itemCode": "034300",
    "theme": "건설 중소형, 테마파크",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 975,
    "itemName": "DB",
    "itemCode": "012030",
    "theme": "교육/온라인 교육, 지주사, 클라우드 컴퓨팅, SI(시스템통합)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 976,
    "itemName": "큐로컴",
    "itemCode": "040350",
    "theme": "슈퍼박테리아",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 977,
    "itemName": "피에스케이홀딩스",
    "itemCode": "031980",
    "theme": "3D 낸드(NAND), 반도체 장비",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 978,
    "itemName": "강스템바이오텍",
    "itemCode": "217730",
    "theme": "제대혈, 줄기세포, 코로나19(진단/치료제/백신 개발 등), 코로나19(치료제/백신 개발 등), 화장품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 979,
    "itemName": "인바이오젠",
    "itemCode": "101140",
    "theme": "가상화폐(비트코인 등), 코로나19(진단키트), 키오스크(KIOSK), 패션/의류",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 980,
    "itemName": "태경산업",
    "itemCode": "015890",
    "theme": "비철금속, LED",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 981,
    "itemName": "칩스앤미디어",
    "itemCode": "094360",
    "theme": "가상현실(VR), 메타버스(Metaverse), 자율주행차",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 982,
    "itemName": "야스",
    "itemCode": "255440",
    "theme": "OLED(유기 발광 다이오드)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 983,
    "itemName": "티앤알바이오팹",
    "itemCode": "246710",
    "theme": "3D 프린터, 의료기기",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 984,
    "itemName": "써니전자",
    "itemCode": "004770",
    "theme": "정치/인맥(안철수)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 985,
    "itemName": "한국화장품제조",
    "itemCode": "003350",
    "theme": "화장품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 986,
    "itemName": "인피니트헬스케어",
    "itemCode": "071200",
    "theme": "4차산업 수혜주, 고령화 사회(노인복지), U-Healthcare(원격진료)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 987,
    "itemName": "일동홀딩스",
    "itemCode": "000230",
    "theme": "지주사",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 988,
    "itemName": "대성산업",
    "itemCode": "128820",
    "theme": "자원개발",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 989,
    "itemName": "엠게임",
    "itemCode": "058630",
    "theme": "가상화폐(비트코인 등), 게임, 메타버스(Metaverse), 모바일게임(스마트폰), 증강현실(AR)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 990,
    "itemName": "이원컴포텍",
    "itemCode": "088290",
    "theme": "자동차부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 991,
    "itemName": "사조동아원",
    "itemCode": "008040",
    "theme": "사료, 음식료업종",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 992,
    "itemName": "수산아이앤티",
    "itemCode": "050960",
    "theme": "보안주(정보), 정치/인맥(이재명)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 993,
    "itemName": "안국약품",
    "itemCode": "001540",
    "theme": "면역항암제, 제약업체, 황사/미세먼지",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 994,
    "itemName": "벽산",
    "itemCode": "007210",
    "theme": "리모델링/인테리어, 정치/인맥(홍정욱), 페인트",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 995,
    "itemName": "코스맥스엔비티",
    "itemCode": "222040",
    "theme": "건강기능식품, 음식료업종",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 996,
    "itemName": "유진로봇",
    "itemCode": "056080",
    "theme": "사물인터넷, 엔젤산업, 자율주행차, 지능형로봇/인공지능(AI), 캐릭터상품, DMZ 평화공원",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 997,
    "itemName": "강남제비스코",
    "itemCode": "000860",
    "theme": "페인트",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 998,
    "itemName": "팅크웨어",
    "itemCode": "084730",
    "theme": "자율주행차, 증강현실(AR), 차량용블랙박스",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 999,
    "itemName": "선익시스템",
    "itemCode": "171090",
    "theme": "메타버스(Metaverse), OLED(유기 발광 다이오드)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1000,
    "itemName": "동운아나텍",
    "itemCode": "094170",
    "theme": "가상현실(VR), 바이오인식(생체인식), 반도체 재료/부품, 스마트폰, 카메라모듈/부품, 폴더블폰",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1001,
    "itemName": "코스맥스비티아이",
    "itemCode": "044820",
    "theme": "지주사",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1002,
    "itemName": "SM C&C",
    "itemCode": "048550",
    "theme": "광고, 엔터테인먼트, 여행, 영상콘텐츠",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1003,
    "itemName": "유니테크노",
    "itemCode": "241690",
    "theme": "자동차부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1004,
    "itemName": "우리손에프앤지",
    "itemCode": "073560",
    "theme": "아프리카 돼지열병(ASF)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1005,
    "itemName": "리메드",
    "itemCode": "302550",
    "theme": "의료기기, 치매",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1006,
    "itemName": "서플러스글로벌",
    "itemCode": "140070",
    "theme": "반도체 장비",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1007,
    "itemName": "신일전자",
    "itemCode": "002700",
    "theme": "겨울, 공기청정기, 밥솥, 여름, 제습기",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1008,
    "itemName": "HDC아이콘트롤스",
    "itemCode": "039570",
    "theme": "스마트홈(홈네트워크), 철도",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1009,
    "itemName": "오르비텍",
    "itemCode": "046120",
    "theme": "원자력발전, 원자력발전소 해체, 항공기부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1010,
    "itemName": "씨티케이코스메틱스",
    "itemCode": "260930",
    "theme": "화장품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1011,
    "itemName": "참좋은여행",
    "itemCode": "094850",
    "theme": "여행",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1012,
    "itemName": "일진디스플",
    "itemCode": "020760",
    "theme": "터치패널(스마트폰/태블릿PC), LED",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1013,
    "itemName": "코텍",
    "itemCode": "052330",
    "theme": "카지노",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1014,
    "itemName": "영풍제지",
    "itemCode": "006740",
    "theme": "골판지 제조",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1015,
    "itemName": "셀레믹스",
    "itemCode": "331920",
    "theme": "2020 하반기 신규상장, 아프리카 돼지열병(ASF), 유전자 치료제/분석",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1016,
    "itemName": "사조대림",
    "itemCode": "003960",
    "theme": "구제역/광우병 수혜, 수산",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1017,
    "itemName": "신라교역",
    "itemCode": "004970",
    "theme": "구제역/광우병 수혜, 수산",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1018,
    "itemName": "삼기",
    "itemCode": "122350",
    "theme": "수소차(연료전지/부품/충전소 등), 자동차부품, 전기차",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1019,
    "itemName": "바이브컴퍼니",
    "itemCode": "301300",
    "theme": "2020 하반기 신규상장, 지능형로봇/인공지능(AI)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1020,
    "itemName": "프로스테믹스",
    "itemCode": "203690",
    "theme": "건강기능식품, 줄기세포, 화장품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1021,
    "itemName": "위더스제약",
    "itemCode": "330350",
    "theme": "2020 하반기 신규상장, 제약업체",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1022,
    "itemName": "솔트룩스",
    "itemCode": "304100",
    "theme": "2020 하반기 신규상장, 지능형로봇/인공지능(AI), 클라우드 컴퓨팅",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1023,
    "itemName": "APS홀딩스",
    "itemCode": "054620",
    "theme": "지주사, OLED(유기 발광 다이오드)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1024,
    "itemName": "제이씨현시스템",
    "itemCode": "033320",
    "theme": "가상현실(VR), 가상화폐(비트코인 등), 드론(Drone), 재택근무/스마트워크",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1025,
    "itemName": "모나리자",
    "itemCode": "012690",
    "theme": "마스크, 日제품 불매운동(수혜), 치매, 황사/미세먼지",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1026,
    "itemName": "CJ씨푸드",
    "itemCode": "011150",
    "theme": "구제역/광우병 수혜, 수산",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1027,
    "itemName": "디케이티",
    "itemCode": "290550",
    "theme": "스마트폰, 폴더블폰, PCB(FPCB 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1028,
    "itemName": "소룩스",
    "itemCode": "290690",
    "theme": "2020 하반기 신규상장, LED",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1029,
    "itemName": "서울식품",
    "itemCode": "004410",
    "theme": "음식료업종, 쿠팡 관련주",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1030,
    "itemName": "중앙백신",
    "itemCode": "072020",
    "theme": "메르스 코로나 바이러스, 아프리카 돼지열병(ASF)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1031,
    "itemName": "아스트",
    "itemCode": "067390",
    "theme": "항공기부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1032,
    "itemName": "우리기술",
    "itemCode": "032820",
    "theme": "방위산업/전쟁 및 테러, 수자원(양적/질적 개선), 원자력발전, 원자력발전소 해체, 철도, 풍력에너지",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1033,
    "itemName": "파나진",
    "itemCode": "046210",
    "theme": "유전자 치료제/분석",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1034,
    "itemName": "와이더플래닛",
    "itemCode": "321820",
    "theme": "2021 상반기 신규상장, 광고, 지능형로봇/인공지능(AI), 쿠팡 관련주",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1035,
    "itemName": "티앤엘",
    "itemCode": "340570",
    "theme": "2020 하반기 신규상장, 의료기기",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1036,
    "itemName": "디와이",
    "itemCode": "013570",
    "theme": "수소차(연료전지/부품/충전소 등), 자동차부품, 지주사",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1037,
    "itemName": "삼일씨엔에스",
    "itemCode": "004440",
    "theme": "재난/안전(지진 등), 철도, 풍력에너지",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1038,
    "itemName": "제이에스코퍼레이션",
    "itemCode": "194370",
    "theme": "패션/의류",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1039,
    "itemName": "진양홀딩스",
    "itemCode": "100250",
    "theme": "정치/인맥(오세훈), 지주사",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1040,
    "itemName": "제노포커스",
    "itemCode": "187420",
    "theme": "유전자 치료제/분석",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1041,
    "itemName": "유니크",
    "itemCode": "011320",
    "theme": "수소차(연료전지/부품/충전소 등), 자동차부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1042,
    "itemName": "NPC",
    "itemCode": "004250",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1043,
    "itemName": "티사이언티픽",
    "itemCode": "057680",
    "theme": "가상화폐(비트코인 등), 모바일콘텐츠(스마트폰/태블릿PC)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1044,
    "itemName": "현대공업",
    "itemCode": "170030",
    "theme": "자동차부품, 전기차",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1045,
    "itemName": "비케이탑스",
    "itemCode": "030790",
    "theme": "소모성자재구매대행(MRO), 쿠팡 관련주",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1046,
    "itemName": "노루홀딩스",
    "itemCode": "000320",
    "theme": "지주사, 페인트",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1047,
    "itemName": "대한뉴팜",
    "itemCode": "054670",
    "theme": "아프리카 돼지열병(ASF), 제약업체, 코로나19(덱사메타손), 코로나19(모더나)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1048,
    "itemName": "국동",
    "itemCode": "005320",
    "theme": "패션/의류",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1049,
    "itemName": "웅진",
    "itemCode": "016880",
    "theme": "마스크, 정치/인맥(윤석열), 지주사",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1050,
    "itemName": "옵티팜",
    "itemCode": "153710",
    "theme": "아프리카 돼지열병(ASF), 코로나19(진단/치료제/백신 개발 등), 코로나19(치료제/백신 개발 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1051,
    "itemName": "모아텍",
    "itemCode": "033200",
    "theme": "3D 프린터",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1052,
    "itemName": "라이온켐텍",
    "itemCode": "171120",
    "theme": "리모델링/인테리어",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1053,
    "itemName": "엔에프씨",
    "itemCode": "265740",
    "theme": "2020 하반기 신규상장, 화장품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1054,
    "itemName": "에이테크솔루션",
    "itemCode": "071670",
    "theme": "자율주행차",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1055,
    "itemName": "쌍방울",
    "itemCode": "102280",
    "theme": "마스크, 日제품 불매운동(수혜), 패션/의류",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1056,
    "itemName": "핸즈코퍼레이션",
    "itemCode": "143210",
    "theme": "자동차부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1057,
    "itemName": "동양철관",
    "itemCode": "008970",
    "theme": "강관업체(Steel pipe), 남-북-러 가스관사업, 수자원(양적/질적 개선), 철강 중소형",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1058,
    "itemName": "디씨엠",
    "itemCode": "024090",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1059,
    "itemName": "케이프",
    "itemCode": "064820",
    "theme": "조선기자재",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1060,
    "itemName": "한솔홀딩스",
    "itemCode": "004150",
    "theme": "골판지 제조, 지주사, 폐기물처리",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1061,
    "itemName": "켐트로스",
    "itemCode": "220260",
    "theme": "2차전지, 2차전지(소재/부품), 온실가스(탄소배출권), 日 수출 규제(국산화 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1062,
    "itemName": "남화토건",
    "itemCode": "091590",
    "theme": "건설 중소형, 남북경협, 정치/인맥(이낙연), 케이블TV SO/MSO",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1063,
    "itemName": "삼익악기",
    "itemCode": "002450",
    "theme": "엔젤산업, 출산장려정책",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1064,
    "itemName": "켄코아에어로스페이스",
    "itemCode": "274090",
    "theme": "드론(Drone), 방위산업/전쟁 및 테러, 우주항공산업, 항공기부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1065,
    "itemName": "서한",
    "itemCode": "011370",
    "theme": "건설 중소형, 정치/인맥(유승민), 철도, 폐기물처리, GTX(수도권 광역급행철도)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1066,
    "itemName": "비씨월드제약",
    "itemCode": "200780",
    "theme": "제약업체, 코로나19(나파모스타트), 코로나19(렘데시비르), 코로나19(진단/치료제/백신 개발 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1067,
    "itemName": "깨끗한나라",
    "itemCode": "004540",
    "theme": "마스크, 日제품 불매운동(수혜), 정치/인맥(윤석열), 제지, 출산장려정책",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1068,
    "itemName": "대성에너지",
    "itemCode": "117580",
    "theme": "겨울, 도시가스",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1069,
    "itemName": "글로벌텍스프리",
    "itemCode": "204620",
    "theme": "면세점",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1070,
    "itemName": "엠플러스",
    "itemCode": "259630",
    "theme": "2차전지, 2차전지(장비), 전기차, 전력저장장치(ESS)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1071,
    "itemName": "케이사인",
    "itemCode": "192250",
    "theme": "보안주(정보), 블록체인, 사물인터넷, 삼성페이, 클라우드 컴퓨팅",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1072,
    "itemName": "힘스",
    "itemCode": "238490",
    "theme": "OLED(유기 발광 다이오드)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1073,
    "itemName": "한전산업",
    "itemCode": "130660",
    "theme": "스마트그리드(지능형전력망), 전력설비",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1074,
    "itemName": "한솔홈데코",
    "itemCode": "025750",
    "theme": "리모델링/인테리어, 온실가스(탄소배출권), 조림사업",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1075,
    "itemName": "계양전기",
    "itemCode": "012200",
    "theme": "자동차부품, 전기차",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1076,
    "itemName": "러셀",
    "itemCode": "217500",
    "theme": "반도체 장비",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1077,
    "itemName": "엑셈",
    "itemCode": "205100",
    "theme": "인터넷은행, 클라우드 컴퓨팅",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1078,
    "itemName": "코스메카코리아",
    "itemCode": "241710",
    "theme": "화장품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1079,
    "itemName": "국제약품",
    "itemCode": "002720",
    "theme": "마스크, 제약업체, 화장품, 황사/미세먼지",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1080,
    "itemName": "국보디자인",
    "itemCode": "066620",
    "theme": "리모델링/인테리어, 정치/인맥(문재인), 테마파크",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1081,
    "itemName": "남성",
    "itemCode": "004270",
    "theme": "정치/인맥(이낙연)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1082,
    "itemName": "까뮤이앤씨",
    "itemCode": "013700",
    "theme": "건설 중소형, 정치/인맥(안철수)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1083,
    "itemName": "한국경제TV",
    "itemCode": "039340",
    "theme": "미디어(방송/신문)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1084,
    "itemName": "에이텍티앤",
    "itemCode": "224110",
    "theme": "삼성페이, 정치/인맥(이재명), RFID(NFC 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1085,
    "itemName": "토니모리",
    "itemCode": "214420",
    "theme": "면세점, 화장품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1086,
    "itemName": "아이퀘스트",
    "itemCode": "262840",
    "theme": "2021 상반기 신규상장",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1087,
    "itemName": "아이쓰리시스템",
    "itemCode": "214430",
    "theme": "방위산업/전쟁 및 테러, 의료기기, 자율주행차",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1088,
    "itemName": "청담러닝",
    "itemCode": "096240",
    "theme": "교육/온라인 교육",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1089,
    "itemName": "한빛소프트",
    "itemCode": "047080",
    "theme": "가상현실(VR), 게임, 드론(Drone), 메타버스(Metaverse), 모바일게임(스마트폰)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1090,
    "itemName": "일신석재",
    "itemCode": "007110",
    "theme": "남북경협, DMZ 평화공원",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1091,
    "itemName": "에쓰씨엔지니어링",
    "itemCode": "023960",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1092,
    "itemName": "한국테크놀로지",
    "itemCode": "053590",
    "theme": "3D 프린터, 원자력발전소 해체, 자율주행차, 정치/인맥(윤석열), 황사/미세먼지",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1093,
    "itemName": "대양전기공업",
    "itemCode": "108380",
    "theme": "방위산업/전쟁 및 테러, 조선기자재, 철도",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1094,
    "itemName": "삼목에스폼",
    "itemCode": "018310",
    "theme": "리모델링/인테리어",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1095,
    "itemName": "에이플러스에셋",
    "itemCode": "244920",
    "theme": "2020 하반기 신규상장",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1096,
    "itemName": "신일제약",
    "itemCode": "012790",
    "theme": "제약업체, 코로나19(덱사메타손)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1097,
    "itemName": "크라운해태홀딩스",
    "itemCode": "005740",
    "theme": "日제품 불매운동(수혜), 지주사, DMZ 평화공원",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1098,
    "itemName": "베스파",
    "itemCode": "299910",
    "theme": "모바일게임(스마트폰)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1099,
    "itemName": "네온테크",
    "itemCode": "306620",
    "theme": "드론(Drone), 반도체 장비, LED장비, MLCC(적층세라믹콘덴서)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1100,
    "itemName": "지엠비코리아",
    "itemCode": "013870",
    "theme": "수소차(연료전지/부품/충전소 등), 자동차부품, 전기차",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1101,
    "itemName": "라온시큐어",
    "itemCode": "042510",
    "theme": "바이오인식(생체인식), 백신여권, 보안주(정보), 블록체인, 삼성페이, 인터넷은행, 핀테크(FinTech)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1102,
    "itemName": "큐로",
    "itemCode": "015590",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1103,
    "itemName": "인지디스플레",
    "itemCode": "037330",
    "theme": "LCD 부품/소재",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1104,
    "itemName": "동아타이어",
    "itemCode": "282690",
    "theme": "타이어",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1105,
    "itemName": "아이원스",
    "itemCode": "114810",
    "theme": "반도체 재료/부품, LCD 부품/소재, OLED(유기 발광 다이오드)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1106,
    "itemName": "탑엔지니어링",
    "itemCode": "065130",
    "theme": "2차전지, 2차전지(장비), 반도체 장비, 카메라모듈/부품, LCD장비, LED장비, OLED(유기 발광 다이오드)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1107,
    "itemName": "디에이테크놀로지",
    "itemCode": "196490",
    "theme": "2차전지, 2차전지(장비), 자율주행차",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1108,
    "itemName": "메디프론",
    "itemCode": "065650",
    "theme": "치매",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1109,
    "itemName": "지니틱스",
    "itemCode": "303030",
    "theme": "시스템반도체",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1110,
    "itemName": "시스웍",
    "itemCode": "269620",
    "theme": "스마트팩토리(스마트공장), 코로나19(진단키트)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1111,
    "itemName": "에스엠코어",
    "itemCode": "007820",
    "theme": "스마트팩토리(스마트공장)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1112,
    "itemName": "SDN",
    "itemCode": "099220",
    "theme": "정치/인맥(이낙연), 태양광에너지",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1113,
    "itemName": "에스엔유",
    "itemCode": "080000",
    "theme": "LCD장비, OLED(유기 발광 다이오드)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1114,
    "itemName": "아이씨케이",
    "itemCode": "068940",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1115,
    "itemName": "비트컴퓨터",
    "itemCode": "032850",
    "theme": "4차산업 수혜주, 고령화 사회(노인복지), 교육/온라인 교육, SI(시스템통합), U-Healthcare(원격진료)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1116,
    "itemName": "대명소노시즌",
    "itemCode": "007720",
    "theme": "소모성자재구매대행(MRO)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1117,
    "itemName": "제이엘케이",
    "itemCode": "322510",
    "theme": "지능형로봇/인공지능(AI), U-Healthcare(원격진료)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1118,
    "itemName": "SG세계물산",
    "itemCode": "004060",
    "theme": "패션/의류",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1119,
    "itemName": "아진산업",
    "itemCode": "013310",
    "theme": "북한 광물자원개발, 자동차부품, 전기차",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1120,
    "itemName": "웰바이오텍",
    "itemCode": "010600",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1121,
    "itemName": "덕우전자",
    "itemCode": "263600",
    "theme": "아이폰, 자동차부품, 카메라모듈/부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1122,
    "itemName": "마니커",
    "itemCode": "027740",
    "theme": "구제역/광우병 수혜, 아프리카 돼지열병(ASF), 여름, 육계",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1123,
    "itemName": "SBS콘텐츠허브",
    "itemCode": "046140",
    "theme": "미디어(방송/신문), 영상콘텐츠",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1124,
    "itemName": "바이오톡스텍",
    "itemCode": "086040",
    "theme": "코로나19(진단/치료제/백신 개발 등), 코로나19(진단키트)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1125,
    "itemName": "토탈소프트",
    "itemCode": "045340",
    "theme": "가상현실(VR), 정치/인맥(이재명)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1126,
    "itemName": "메가스터디",
    "itemCode": "072870",
    "theme": "교육/온라인 교육",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1127,
    "itemName": "아이진",
    "itemCode": "185490",
    "theme": "건강기능식품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1128,
    "itemName": "화성산업",
    "itemCode": "002460",
    "theme": "건설 중소형",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1129,
    "itemName": "코세스",
    "itemCode": "089890",
    "theme": "마이크로 LED, 메타버스(Metaverse), 반도체 장비, 플렉서블 디스플레이",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1130,
    "itemName": "삼원강재",
    "itemCode": "023000",
    "theme": "자동차부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1131,
    "itemName": "큐에스아이",
    "itemCode": "066310",
    "theme": "마이크로 LED",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1132,
    "itemName": "유에스티",
    "itemCode": "263770",
    "theme": "2차전지, 2차전지(소재/부품), 강관업체(Steel pipe), 전기차",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1133,
    "itemName": "세이브존I&C",
    "itemCode": "067830",
    "theme": "소매유통",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1134,
    "itemName": "베노홀딩스",
    "itemCode": "206400",
    "theme": "게임, 모바일게임(스마트폰)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1135,
    "itemName": "이수페타시스",
    "itemCode": "007660",
    "theme": "5G(5세대 이동통신), 갤럭시 부품주, 스마트폰, 우주항공산업, PCB(FPCB 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1136,
    "itemName": "SCI평가정보",
    "itemCode": "036120",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1137,
    "itemName": "태경케미컬",
    "itemCode": "006890",
    "theme": "마켓컬리 관련주, 여름, 콜드체인(저온 유통), 쿠팡 관련주",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1138,
    "itemName": "메카로",
    "itemCode": "241770",
    "theme": "반도체 재료/부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1139,
    "itemName": "한창제지",
    "itemCode": "009460",
    "theme": "정치/인맥(안철수), 정치/인맥(황교안), 제지",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1140,
    "itemName": "삼일제약",
    "itemCode": "000520",
    "theme": "제약업체, 황사/미세먼지",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1141,
    "itemName": "바이오리더스",
    "itemCode": "142760",
    "theme": "건강기능식품, 코로나19(진단/치료제/백신 개발 등), 코로나19(치료제/백신 개발 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1142,
    "itemName": "모바일어플라이언스",
    "itemCode": "087260",
    "theme": "4차산업 수혜주, 스마트카(SMART CAR), 자율주행차, 차량용블랙박스",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1143,
    "itemName": "머큐리",
    "itemCode": "100590",
    "theme": "통신장비",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1144,
    "itemName": "대유",
    "itemCode": "290380",
    "theme": "농업, 비료",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1145,
    "itemName": "금강공업",
    "itemCode": "014280",
    "theme": "강관업체(Steel pipe)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1146,
    "itemName": "줌인터넷",
    "itemCode": "239340",
    "theme": "지능형로봇/인공지능(AI)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1147,
    "itemName": "엑시콘",
    "itemCode": "092870",
    "theme": "반도체 장비",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1148,
    "itemName": "서원인텍",
    "itemCode": "093920",
    "theme": "2차전지, 2차전지(소재/부품), 휴대폰부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1149,
    "itemName": "인바이오",
    "itemCode": "352940",
    "theme": "2020 하반기 신규상장, 농업",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1150,
    "itemName": "제노레이",
    "itemCode": "122310",
    "theme": "의료기기",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1151,
    "itemName": "휴먼엔",
    "itemCode": "032860",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1152,
    "itemName": "일진전기",
    "itemCode": "103590",
    "theme": "스마트그리드(지능형전력망), 전력설비, 전선",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1153,
    "itemName": "보해양조",
    "itemCode": "000890",
    "theme": "여름, 日제품 불매운동(수혜), 정치/인맥(유시민)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1154,
    "itemName": "에스코넥",
    "itemCode": "096630",
    "theme": "2차전지, 2차전지(소재/부품), 가상현실(VR), 메타버스(Metaverse), 일자리(취업), 폴더블폰, 휴대폰부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1155,
    "itemName": "나무가",
    "itemCode": "190510",
    "theme": "가상현실(VR), 갤럭시 부품주, 스마트폰, 카메라모듈/부품, 휴대폰부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1156,
    "itemName": "디알젬",
    "itemCode": "263690",
    "theme": "의료기기",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1157,
    "itemName": "삼화전기",
    "itemCode": "009470",
    "theme": "전기차, 전력저장장치(ESS)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1158,
    "itemName": "유화증권",
    "itemCode": "003460",
    "theme": "증권",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1159,
    "itemName": "SM Life Design",
    "itemCode": "063440",
    "theme": "영상콘텐츠, 영화",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1160,
    "itemName": "동양이엔피",
    "itemCode": "079960",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1161,
    "itemName": "DRB동일",
    "itemCode": "004840",
    "theme": "자동차부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1162,
    "itemName": "제이씨케미칼",
    "itemCode": "137950",
    "theme": "조림사업",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1163,
    "itemName": "국순당",
    "itemCode": "043650",
    "theme": "음식료업종",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1164,
    "itemName": "두올",
    "itemCode": "016740",
    "theme": "자동차부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1165,
    "itemName": "넥스트사이언스",
    "itemCode": "003580",
    "theme": "화장품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1166,
    "itemName": "구영테크",
    "itemCode": "053270",
    "theme": "자동차부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1167,
    "itemName": "엠아이텍",
    "itemCode": "179290",
    "theme": "의료기기",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1168,
    "itemName": "대원미디어",
    "itemCode": "048910",
    "theme": "게임, 엔젤산업, 영상콘텐츠, 웹툰, 캐릭터상품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1169,
    "itemName": "신도기연",
    "itemCode": "290520",
    "theme": "2020 하반기 신규상장, 수소차(연료전지/부품/충전소 등), 플렉서블 디스플레이, OLED(유기 발광 다이오드)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1170,
    "itemName": "이라이콤",
    "itemCode": "041520",
    "theme": "휴대폰부품, LCD 부품/소재, LCD BLU제조",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1171,
    "itemName": "룽투코리아",
    "itemCode": "060240",
    "theme": "게임, 모바일게임(스마트폰)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1172,
    "itemName": "한양증권",
    "itemCode": "001750",
    "theme": "증권",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1173,
    "itemName": "광전자",
    "itemCode": "017900",
    "theme": "마이크로 LED, LED",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1174,
    "itemName": "디에스케이",
    "itemCode": "109740",
    "theme": "보톡스(보툴리눔톡신), LCD장비",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1175,
    "itemName": "나라엠앤디",
    "itemCode": "051490",
    "theme": "2차전지, 2차전지(소재/부품), 자동차부품, 전기차",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1176,
    "itemName": "비아트론",
    "itemCode": "141000",
    "theme": "플렉서블 디스플레이, LCD장비, OLED(유기 발광 다이오드)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1177,
    "itemName": "한컴MDS",
    "itemCode": "086960",
    "theme": "4차산업 수혜주, 모바일솔루션(스마트폰), 스마트카(SMART CAR), 스마트팩토리(스마트공장), 자율주행차",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1178,
    "itemName": "서연탑메탈",
    "itemCode": "019770",
    "theme": "건설기계, 자동차부품, 정치/인맥(문재인), 정치/인맥(윤석열)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1179,
    "itemName": "NE능률",
    "itemCode": "053290",
    "theme": "교육/온라인 교육, 정치/인맥(윤석열)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1180,
    "itemName": "형지엘리트",
    "itemCode": "093240",
    "theme": "정치/인맥(이재명), 패션/의류",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1181,
    "itemName": "디에이치피코리아",
    "itemCode": "131030",
    "theme": "황사/미세먼지",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1182,
    "itemName": "테라사이언스",
    "itemCode": "073640",
    "theme": "건설기계",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1183,
    "itemName": "웰크론",
    "itemCode": "065950",
    "theme": "마스크, 메르스 코로나 바이러스, 방위산업/전쟁 및 테러, 황사/미세먼지, DMZ 평화공원",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1184,
    "itemName": "대원산업",
    "itemCode": "005710",
    "theme": "자동차부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1185,
    "itemName": "티로보틱스",
    "itemCode": "117730",
    "theme": "의료기기, LCD장비, OLED(유기 발광 다이오드)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1186,
    "itemName": "한네트",
    "itemCode": "052600",
    "theme": "키오스크(KIOSK), 화폐/금융자동화기기(디지털화폐 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1187,
    "itemName": "스페코",
    "itemCode": "013810",
    "theme": "남북경협, 방위산업/전쟁 및 테러, 아스콘(아스팔트 콘크리트), 풍력에너지",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1188,
    "itemName": "극동유화",
    "itemCode": "014530",
    "theme": "아스콘(아스팔트 콘크리트), 자전거, LPG(액화석유가스)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1189,
    "itemName": "TS트릴리온",
    "itemCode": "317240",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1190,
    "itemName": "블루콤",
    "itemCode": "033560",
    "theme": "스마트폰, 음성인식",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1191,
    "itemName": "남광토건",
    "itemCode": "001260",
    "theme": "건설 중소형, 남북경협, 철도",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1192,
    "itemName": "KR모터스",
    "itemCode": "000040",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1193,
    "itemName": "황금에스티",
    "itemCode": "032560",
    "theme": "2차전지, 2차전지(소재/부품), 비철금속, 철도",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1194,
    "itemName": "에스텍파마",
    "itemCode": "041910",
    "theme": "제약업체",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1195,
    "itemName": "유니온",
    "itemCode": "000910",
    "theme": "시멘트/레미콘, 희귀금속(희토류 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1196,
    "itemName": "이더블유케이",
    "itemCode": "258610",
    "theme": "LNG(액화천연가스)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1197,
    "itemName": "크라운제과",
    "itemCode": "264900",
    "theme": "음식료업종, 日제품 불매운동(수혜)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1198,
    "itemName": "이화공영",
    "itemCode": "001840",
    "theme": "4대강 복원, 건설 중소형, DMZ 평화공원",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1199,
    "itemName": "엔투텍",
    "itemCode": "227950",
    "theme": "반도체 장비, 코로나19(모더나)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1200,
    "itemName": "대우부품",
    "itemCode": "009320",
    "theme": "수소차(연료전지/부품/충전소 등), 자동차부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1201,
    "itemName": "퓨쳐스트림네트웍스",
    "itemCode": "214270",
    "theme": "가상화폐(비트코인 등), 광고",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1202,
    "itemName": "석경에이티",
    "itemCode": "357550",
    "theme": "2020 하반기 신규상장",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1203,
    "itemName": "티엘아이",
    "itemCode": "062860",
    "theme": "마이크로 LED, 시스템반도체, 정치/인맥(이재명), LCD 부품/소재",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1204,
    "itemName": "루멘스",
    "itemCode": "038060",
    "theme": "마이크로 LED, 방위산업/전쟁 및 테러, 통신장비, 플렉서블 디스플레이, LED",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1205,
    "itemName": "토비스",
    "itemCode": "051360",
    "theme": "스마트폰, 카지노, 터치패널(스마트폰/태블릿PC), LCD 부품/소재",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1206,
    "itemName": "조아제약",
    "itemCode": "034940",
    "theme": "구충제(펜벤다졸 등), 마스크, 제약업체, 줄기세포",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1207,
    "itemName": "씨티씨바이오",
    "itemCode": "060590",
    "theme": "사료, 아프리카 돼지열병(ASF), 치매, 코로나19(진단/치료제/백신 개발 등), 코로나19(진단키트)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1208,
    "itemName": "알엔투테크놀로지",
    "itemCode": "148250",
    "theme": "통신장비",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1209,
    "itemName": "오리엔탈정공",
    "itemCode": "014940",
    "theme": "조선기자재",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1210,
    "itemName": "영풍정밀",
    "itemCode": "036560",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1211,
    "itemName": "기신정기",
    "itemCode": "092440",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1212,
    "itemName": "케이씨티",
    "itemCode": "089150",
    "theme": "키오스크(KIOSK), 화폐/금융자동화기기(디지털화폐 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1213,
    "itemName": "서원",
    "itemCode": "021050",
    "theme": "비철금속",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1214,
    "itemName": "선진뷰티사이언스",
    "itemCode": "086710",
    "theme": "2021 상반기 신규상장, 화장품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1215,
    "itemName": "하이텍팜",
    "itemCode": "106190",
    "theme": "메르스 코로나 바이러스, 제약업체",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1216,
    "itemName": "흥국에프엔비",
    "itemCode": "189980",
    "theme": "마켓컬리 관련주, 음식료업종, 쿠팡 관련주",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1217,
    "itemName": "휴맥스",
    "itemCode": "115160",
    "theme": "전기차, 정치/인맥(안철수)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1218,
    "itemName": "글로본",
    "itemCode": "019660",
    "theme": "화장품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1219,
    "itemName": "보락",
    "itemCode": "002760",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1220,
    "itemName": "이즈미디어",
    "itemCode": "181340",
    "theme": "카메라모듈/부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1221,
    "itemName": "알리코제약",
    "itemCode": "260660",
    "theme": "구충제(펜벤다졸 등), 제약업체",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1222,
    "itemName": "젠큐릭스",
    "itemCode": "229000",
    "theme": "유전자 치료제/분석, 코로나19(진단/치료제/백신 개발 등), 코로나19(진단키트)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1223,
    "itemName": "신원",
    "itemCode": "009270",
    "theme": "남북경협, 패션/의류",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1224,
    "itemName": "대유에이텍",
    "itemCode": "002880",
    "theme": "자동차부품, 조림사업",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1225,
    "itemName": "씨엠에스에듀",
    "itemCode": "225330",
    "theme": "교육/온라인 교육, 메타버스(Metaverse)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1226,
    "itemName": "삼보모터스",
    "itemCode": "053700",
    "theme": "수소차(연료전지/부품/충전소 등), 자동차부품, 자율주행차, 전기차",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1227,
    "itemName": "범양건영",
    "itemCode": "002410",
    "theme": "건설 중소형, 정치/인맥(이낙연)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1228,
    "itemName": "KPX생명과학",
    "itemCode": "114450",
    "theme": "농업, 제약업체, 코로나19(화이자)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1229,
    "itemName": "대성엘텍",
    "itemCode": "025440",
    "theme": "4차산업 수혜주, 자동차부품, 자율주행차",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1230,
    "itemName": "미창석유",
    "itemCode": "003650",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1231,
    "itemName": "엘컴텍",
    "itemCode": "037950",
    "theme": "북한 광물자원개발, 자원개발, 카메라모듈/부품, 휴대폰부품, LED",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1232,
    "itemName": "유라테크",
    "itemCode": "048430",
    "theme": "자동차부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1233,
    "itemName": "디아이씨",
    "itemCode": "092200",
    "theme": "자동차부품, 전기차, 쿠팡 관련주",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1234,
    "itemName": "에이티넘인베스트",
    "itemCode": "021080",
    "theme": "가상화폐(비트코인 등), 두나무 관련주, 창투사",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1235,
    "itemName": "코콤",
    "itemCode": "015710",
    "theme": "사물인터넷, 스마트그리드(지능형전력망), 스마트홈(홈네트워크), 음성인식, CCTV＆DVR",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1236,
    "itemName": "네오셈",
    "itemCode": "253590",
    "theme": "반도체 장비",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1237,
    "itemName": "하츠",
    "itemCode": "066130",
    "theme": "리모델링/인테리어, 정치/인맥(이재명), 황사/미세먼지",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1238,
    "itemName": "아이텍",
    "itemCode": "119830",
    "theme": "시스템반도체, 콜드체인(저온 유통)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1239,
    "itemName": "뉴인텍",
    "itemCode": "012340",
    "theme": "수소차(연료전지/부품/충전소 등), 전기차, 태양광에너지",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1240,
    "itemName": "매일홀딩스",
    "itemCode": "005990",
    "theme": "지주사",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1241,
    "itemName": "비올",
    "itemCode": "335890",
    "theme": "의료기기",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1242,
    "itemName": "이그잭스",
    "itemCode": "060230",
    "theme": "사물인터넷, 삼성페이, 정치/인맥(윤석열), RFID(NFC 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1243,
    "itemName": "제놀루션",
    "itemCode": "225220",
    "theme": "2020 하반기 신규상장, 유전자 치료제/분석, 의료기기, 코로나19(진단/치료제/백신 개발 등), 코로나19(진단키트)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1244,
    "itemName": "경남제약",
    "itemCode": "053950",
    "theme": "건강기능식품, 아프리카 돼지열병(ASF), 제약업체, 콜드체인(저온 유통)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1245,
    "itemName": "노랑풍선",
    "itemCode": "104620",
    "theme": "여행",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1246,
    "itemName": "아가방컴퍼니",
    "itemCode": "013990",
    "theme": "마스크, 엔젤산업, 日제품 불매운동(수혜), 출산장려정책",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1247,
    "itemName": "넥스트BT",
    "itemCode": "065170",
    "theme": "건강기능식품, 자원개발, 화장품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1248,
    "itemName": "핌스",
    "itemCode": "347770",
    "theme": "2020 하반기 신규상장, OLED(유기 발광 다이오드)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1249,
    "itemName": "조광ILI",
    "itemCode": "044060",
    "theme": "남-북-러 가스관사업, 수소차(연료전지/부품/충전소 등), 원자력발전, 정치/인맥(문재인), 조선기자재",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1250,
    "itemName": "에이팩트",
    "itemCode": "200470",
    "theme": "반도체 장비",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1251,
    "itemName": "무림페이퍼",
    "itemCode": "009200",
    "theme": "제지",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1252,
    "itemName": "흥구석유",
    "itemCode": "024060",
    "theme": "LPG(액화석유가스)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1253,
    "itemName": "한스바이오메드",
    "itemCode": "042520",
    "theme": "의료기기",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1254,
    "itemName": "창해에탄올",
    "itemCode": "004650",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1255,
    "itemName": "동일고무벨트",
    "itemCode": "163560",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1256,
    "itemName": "티웨이홀딩스",
    "itemCode": "004870",
    "theme": "항공/저가 항공사(LCC)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1257,
    "itemName": "신신제약",
    "itemCode": "002800",
    "theme": "제약업체, 치매",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1258,
    "itemName": "이지케어텍",
    "itemCode": "099750",
    "theme": "U-Healthcare(원격진료)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1259,
    "itemName": "KT서브마린",
    "itemCode": "060370",
    "theme": "재난/안전(지진 등), 정치/인맥(이낙연), 해저터널(지하화/지하도로 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1260,
    "itemName": "메디아나",
    "itemCode": "041920",
    "theme": "의료기기",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1261,
    "itemName": "한독크린텍",
    "itemCode": "256150",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1262,
    "itemName": "태경비케이",
    "itemCode": "014580",
    "theme": "구제역/광우병 수혜, 비료, 아프리카 돼지열병(ASF), LED",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1263,
    "itemName": "시그네틱스",
    "itemCode": "033170",
    "theme": "시스템반도체, DMZ 평화공원",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1264,
    "itemName": "인터지스",
    "itemCode": "129260",
    "theme": "정치/인맥(이재명), 종합 물류",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1265,
    "itemName": "바이오스마트",
    "itemCode": "038460",
    "theme": "치매, 코로나19(진단/치료제/백신 개발 등), 코로나19(진단키트), 화장품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1266,
    "itemName": "마이크로디지탈",
    "itemCode": "305090",
    "theme": "코로나19(진단/치료제/백신 개발 등), 코로나19(진단키트)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1267,
    "itemName": "큐브엔터",
    "itemCode": "182360",
    "theme": "엔터테인먼트",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1268,
    "itemName": "KTcs",
    "itemCode": "058850",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1269,
    "itemName": "오상자이엘",
    "itemCode": "053980",
    "theme": "코로나19(진단/치료제/백신 개발 등), 코로나19(진단키트), 화장품, SI(시스템통합)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1270,
    "itemName": "금강철강",
    "itemCode": "053260",
    "theme": "철강 중소형",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1271,
    "itemName": "새로닉스",
    "itemCode": "042600",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1272,
    "itemName": "고려제약",
    "itemCode": "014570",
    "theme": "메르스 코로나 바이러스, 제약업체, 치매",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1273,
    "itemName": "에스트래픽",
    "itemCode": "234300",
    "theme": "전기차, 철도, SI(시스템통합)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1274,
    "itemName": "삼륭물산",
    "itemCode": "014970",
    "theme": "日 수출 규제(국산화 등), DMZ 평화공원",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1275,
    "itemName": "그린플러스",
    "itemCode": "186230",
    "theme": "비철금속",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1276,
    "itemName": "기가레인",
    "itemCode": "049080",
    "theme": "5G(5세대 이동통신), 갤럭시 부품주, 반도체 장비, 사물인터넷, 스마트폰, 통신장비, 휴대폰부품, LED장비",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1277,
    "itemName": "에이프로젠 H&G",
    "itemCode": "109960",
    "theme": "모바일게임(스마트폰)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1278,
    "itemName": "컴퍼니케이",
    "itemCode": "307930",
    "theme": "정치/인맥(윤석열), 창투사",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1279,
    "itemName": "에넥스",
    "itemCode": "011090",
    "theme": "리모델링/인테리어",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1280,
    "itemName": "특수건설",
    "itemCode": "026150",
    "theme": "4대강 복원, 정치/인맥(이낙연), 철도, 해저터널(지하화/지하도로 등), GTX(수도권 광역급행철도)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1281,
    "itemName": "삼호개발",
    "itemCode": "010960",
    "theme": "4대강 복원, 건설 중소형",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1282,
    "itemName": "에스텍",
    "itemCode": "069510",
    "theme": "자동차부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1283,
    "itemName": "지티지웰니스",
    "itemCode": "219750",
    "theme": "의료기기",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1284,
    "itemName": "청보산업",
    "itemCode": "013720",
    "theme": "자동차부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1285,
    "itemName": "YBM넷",
    "itemCode": "057030",
    "theme": "교육/온라인 교육, 모바일콘텐츠(스마트폰/태블릿PC), 정치/인맥(유시민)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1286,
    "itemName": "와이제이엠게임즈",
    "itemCode": "193250",
    "theme": "가상현실(VR), 메타버스(Metaverse), 모바일게임(스마트폰), 스마트폰",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1287,
    "itemName": "WI",
    "itemCode": "073570",
    "theme": "반도체 장비, 캐릭터상품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1288,
    "itemName": "대원",
    "itemCode": "007680",
    "theme": "건설 중소형",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1289,
    "itemName": "티비씨",
    "itemCode": "033830",
    "theme": "미디어(방송/신문), 정치/인맥(황교안)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1290,
    "itemName": "퍼스텍",
    "itemCode": "010820",
    "theme": "드론(Drone), 방위산업/전쟁 및 테러, 우주항공산업, 지능형로봇/인공지능(AI), DMZ 평화공원",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1291,
    "itemName": "KB오토시스",
    "itemCode": "024120",
    "theme": "자동차부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1292,
    "itemName": "피제이전자",
    "itemCode": "006140",
    "theme": "고령화 사회(노인복지), 보안주(물리), 의료기기",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1293,
    "itemName": "에스넷",
    "itemCode": "038680",
    "theme": "4차산업 수혜주, 보안주(정보), 사물인터넷, 스마트홈(홈네트워크), 정치/인맥(안철수), NI(네트워크통합), RFID(NFC 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1294,
    "itemName": "앤씨앤",
    "itemCode": "092600",
    "theme": "보안주(물리), 시스템반도체, 자율주행차, 차량용블랙박스, CCTV＆DVR",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1295,
    "itemName": "한국석유",
    "itemCode": "004090",
    "theme": "남북경협, 아스콘(아스팔트 콘크리트), 자전거",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1296,
    "itemName": "씨앤지하이테크",
    "itemCode": "264660",
    "theme": "반도체 장비, LCD장비",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1297,
    "itemName": "우원개발",
    "itemCode": "046940",
    "theme": "4대강 복원, 건설 중소형, 정치/인맥(이낙연), 철도, 해저터널(지하화/지하도로 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1298,
    "itemName": "현대코퍼레이션홀딩스",
    "itemCode": "227840",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1299,
    "itemName": "우리들휴브레인",
    "itemCode": "118000",
    "theme": "의료기기, 줄기세포, 코로나19(진단/치료제/백신 개발 등), 코로나19(진단키트)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1300,
    "itemName": "대원전선",
    "itemCode": "006340",
    "theme": "전력설비, 전선, 정치/인맥(김무성), 철도",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1301,
    "itemName": "케이엠",
    "itemCode": "083550",
    "theme": "마스크, 메르스 코로나 바이러스, 황사/미세먼지",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1302,
    "itemName": "지엔원에너지",
    "itemCode": "270520",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1303,
    "itemName": "세아특수강",
    "itemCode": "019440",
    "theme": "자동차부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1304,
    "itemName": "아이티센",
    "itemCode": "124500",
    "theme": "SI(시스템통합)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1305,
    "itemName": "경창산업",
    "itemCode": "024910",
    "theme": "자동차부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1306,
    "itemName": "젬백스링크",
    "itemCode": "064800",
    "theme": "모바일솔루션(스마트폰), 증강현실(AR), 클라우드 컴퓨팅, 패션/의류, SNS(소셜네트워크서비스)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1307,
    "itemName": "모베이스",
    "itemCode": "101330",
    "theme": "갤럭시 부품주, 스마트폰, 휴대폰부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1308,
    "itemName": "대양금속",
    "itemCode": "009190",
    "theme": "비철금속",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1309,
    "itemName": "피에스텍",
    "itemCode": "002230",
    "theme": "스마트그리드(지능형전력망), 스마트홈(홈네트워크), 자동차부품, 전기차",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1310,
    "itemName": "에스디생명공학",
    "itemCode": "217480",
    "theme": "건강기능식품, 마스크, 화장품, 황사/미세먼지",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1311,
    "itemName": "STX",
    "itemCode": "011810",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1312,
    "itemName": "새론오토모티브",
    "itemCode": "075180",
    "theme": "자동차부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1313,
    "itemName": "엔에스",
    "itemCode": "217820",
    "theme": "2차전지, 2차전지(장비)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1314,
    "itemName": "한진중공업홀딩스",
    "itemCode": "003480",
    "theme": "지주사",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1315,
    "itemName": "디케이락",
    "itemCode": "105740",
    "theme": "남-북-러 가스관사업, 수소차(연료전지/부품/충전소 등), 원자력발전",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1316,
    "itemName": "삼아알미늄",
    "itemCode": "006110",
    "theme": "2차전지, 2차전지(소재/부품), 비철금속",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1317,
    "itemName": "정산애강",
    "itemCode": "022220",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1318,
    "itemName": "한국팩키지",
    "itemCode": "037230",
    "theme": "정치/인맥(이재명)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1319,
    "itemName": "플레이디",
    "itemCode": "237820",
    "theme": "광고",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1320,
    "itemName": "시공테크",
    "itemCode": "020710",
    "theme": "가상현실(VR), 리모델링/인테리어, 정치/인맥(이재명), 테마파크, DMZ 평화공원",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1321,
    "itemName": "윈팩",
    "itemCode": "097800",
    "theme": "시스템반도체",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1322,
    "itemName": "이구산업",
    "itemCode": "025820",
    "theme": "비철금속",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1323,
    "itemName": "비비씨",
    "itemCode": "318410",
    "theme": "2020 하반기 신규상장",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1324,
    "itemName": "대림제지",
    "itemCode": "017650",
    "theme": "골판지 제조",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1325,
    "itemName": "라닉스",
    "itemCode": "317120",
    "theme": "보안주(정보), 시스템반도체, 자율주행차",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1326,
    "itemName": "미래생명자원",
    "itemCode": "218150",
    "theme": "사료, 아프리카 돼지열병(ASF), 음식료업종, 쿠팡 관련주",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1327,
    "itemName": "영림원소프트랩",
    "itemCode": "060850",
    "theme": "2020 하반기 신규상장, 재택근무/스마트워크, 클라우드 컴퓨팅",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1328,
    "itemName": "코프라",
    "itemCode": "126600",
    "theme": "자동차부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1329,
    "itemName": "상상인증권",
    "itemCode": "001290",
    "theme": "증권",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1330,
    "itemName": "영화금속",
    "itemCode": "012280",
    "theme": "자동차부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1331,
    "itemName": "유니켐",
    "itemCode": "011330",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1332,
    "itemName": "광명전기",
    "itemCode": "017040",
    "theme": "스마트그리드(지능형전력망), 원자력발전, 전력설비, 태양광에너지",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1333,
    "itemName": "보성파워텍",
    "itemCode": "006910",
    "theme": "원자력발전, 전기차, 전력설비",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1334,
    "itemName": "영화테크",
    "itemCode": "265560",
    "theme": "2차전지, 2차전지(소재/부품), 수소차(연료전지/부품/충전소 등), 자동차부품, 전기차",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1335,
    "itemName": "영흥",
    "itemCode": "012160",
    "theme": "북한 광물자원개발, 자동차부품, 철강 중소형",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1336,
    "itemName": "정다운",
    "itemCode": "208140",
    "theme": "구제역/광우병 수혜, 아프리카 돼지열병(ASF), 음식료업종, 정치/인맥(이재명)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1337,
    "itemName": "대봉엘에스",
    "itemCode": "078140",
    "theme": "화장품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1338,
    "itemName": "한미글로벌",
    "itemCode": "053690",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1339,
    "itemName": "3S",
    "itemCode": "060310",
    "theme": "반도체 재료/부품, 여름",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1340,
    "itemName": "동구바이오제약",
    "itemCode": "006620",
    "theme": "제약업체, 줄기세포, 치매, 화장품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1341,
    "itemName": "흥국",
    "itemCode": "010240",
    "theme": "건설기계, 정치/인맥(유시민)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1342,
    "itemName": "윌비스",
    "itemCode": "008600",
    "theme": "교육/온라인 교육, 일자리(취업), 패션/의류",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1343,
    "itemName": "SH에너지화학",
    "itemCode": "002360",
    "theme": "북한 광물자원개발, 셰일가스(Shale Gas)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1344,
    "itemName": "고려시멘트",
    "itemCode": "198440",
    "theme": "시멘트/레미콘, 아프리카 돼지열병(ASF)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1345,
    "itemName": "엔케이",
    "itemCode": "085310",
    "theme": "남-북-러 가스관사업, 선박평형수 처리장치, 수소차(연료전지/부품/충전소 등), 정치/인맥(김무성), LNG(액화천연가스)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1346,
    "itemName": "바른손이앤에이",
    "itemCode": "035620",
    "theme": "가상현실(VR), 게임, 모바일게임(스마트폰), 영상콘텐츠, 영화",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1347,
    "itemName": "위니아딤채",
    "itemCode": "071460",
    "theme": "공기청정기, 여름, 제습기, 황사/미세먼지",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1348,
    "itemName": "액트",
    "itemCode": "131400",
    "theme": "PCB(FPCB 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1349,
    "itemName": "나우IB",
    "itemCode": "293580",
    "theme": "창투사",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1350,
    "itemName": "제이스텍",
    "itemCode": "090470",
    "theme": "반도체 장비, LCD장비, OLED(유기 발광 다이오드)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1351,
    "itemName": "프리엠스",
    "itemCode": "053160",
    "theme": "건설기계, 정치/인맥(안철수), 정치/인맥(이재명), 화폐/금융자동화기기(디지털화폐 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1352,
    "itemName": "이녹스",
    "itemCode": "088390",
    "theme": "지주사",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1353,
    "itemName": "조비",
    "itemCode": "001550",
    "theme": "남북경협, 농업, 비료, 여름, 태풍 및 장마",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1354,
    "itemName": "디지틀조선",
    "itemCode": "033130",
    "theme": "미디어(방송/신문), 정치/인맥(김무성), 정치/인맥(홍정욱)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1355,
    "itemName": "코디엠",
    "itemCode": "224060",
    "theme": "면역항암제, 반도체 장비",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1356,
    "itemName": "이루다",
    "itemCode": "164060",
    "theme": "2020 하반기 신규상장, 의료기기",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1357,
    "itemName": "KCI",
    "itemCode": "036670",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1358,
    "itemName": "비피도",
    "itemCode": "238200",
    "theme": "음식료업종",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1359,
    "itemName": "심텍홀딩스",
    "itemCode": "036710",
    "theme": "지주사",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1360,
    "itemName": "휴림로봇",
    "itemCode": "090710",
    "theme": "3D 프린터, 4차산업 수혜주, 스마트팩토리(스마트공장), 원자력발전소 해체, 지능형로봇/인공지능(AI)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1361,
    "itemName": "덕양산업",
    "itemCode": "024900",
    "theme": "그래핀, 자동차부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1362,
    "itemName": "아이스크림에듀",
    "itemCode": "289010",
    "theme": "교육/온라인 교육, 쿠팡 관련주",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1363,
    "itemName": "알파홀딩스",
    "itemCode": "117670",
    "theme": "사물인터넷, 시스템반도체, 전기차",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1364,
    "itemName": "오로라",
    "itemCode": "039830",
    "theme": "엔젤산업, 캐릭터상품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1365,
    "itemName": "우성사료",
    "itemCode": "006980",
    "theme": "구제역/광우병 수혜, 사료, 아프리카 돼지열병(ASF), 정치/인맥(문재인)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1366,
    "itemName": "케이씨에스",
    "itemCode": "115500",
    "theme": "철도, 키오스크(KIOSK), 화폐/금융자동화기기(디지털화폐 등), SI(시스템통합)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1367,
    "itemName": "iMBC",
    "itemCode": "052220",
    "theme": "미디어(방송/신문)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1368,
    "itemName": "우리산업홀딩스",
    "itemCode": "072470",
    "theme": "지주사",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1369,
    "itemName": "대한과학",
    "itemCode": "131220",
    "theme": "사물인터넷, 콜드체인(저온 유통)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1370,
    "itemName": "동양파일",
    "itemCode": "228340",
    "theme": "재난/안전(지진 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1371,
    "itemName": "국보",
    "itemCode": "001140",
    "theme": "마스크, 종합 물류",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1372,
    "itemName": "KMH하이텍",
    "itemCode": "052900",
    "theme": "반도체 재료/부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1373,
    "itemName": "티플랙스",
    "itemCode": "081150",
    "theme": "북한 광물자원개발, 비철금속, 희귀금속(희토류 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1374,
    "itemName": "콤텍시스템",
    "itemCode": "031820",
    "theme": "아스콘(아스팔트 콘크리트), 제4이동통신, NI(네트워크통합)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1375,
    "itemName": "큐캐피탈",
    "itemCode": "016600",
    "theme": "창투사",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1376,
    "itemName": "본느",
    "itemCode": "226340",
    "theme": "화장품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1377,
    "itemName": "NI스틸",
    "itemCode": "008260",
    "theme": "철강 중소형",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1378,
    "itemName": "NHN벅스",
    "itemCode": "104200",
    "theme": "모바일콘텐츠(스마트폰/태블릿PC), 음원/음반, SNS(소셜네트워크서비스)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1379,
    "itemName": "엠투아이",
    "itemCode": "347890",
    "theme": "2020 하반기 신규상장, 스마트팩토리(스마트공장)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1380,
    "itemName": "제일제강",
    "itemCode": "023440",
    "theme": "철강 중소형",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1381,
    "itemName": "에프엔에스테크",
    "itemCode": "083500",
    "theme": "반도체 재료/부품, OLED(유기 발광 다이오드)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1382,
    "itemName": "세하",
    "itemCode": "027970",
    "theme": "제지",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1383,
    "itemName": "유유제약",
    "itemCode": "000220",
    "theme": "정치/인맥(김무성), 제약업체, 치매",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1384,
    "itemName": "에코바이오",
    "itemCode": "038870",
    "theme": "수소차(연료전지/부품/충전소 등), 온실가스(탄소배출권)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1385,
    "itemName": "제룡전기",
    "itemCode": "033100",
    "theme": "전력설비, 철도",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1386,
    "itemName": "정상제이엘에스",
    "itemCode": "040420",
    "theme": "교육/온라인 교육, 엔젤산업",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1387,
    "itemName": "KC코트렐",
    "itemCode": "119650",
    "theme": "온실가스(탄소배출권), 태양광에너지, 황사/미세먼지",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1388,
    "itemName": "동아엘텍",
    "itemCode": "088130",
    "theme": "LCD장비, OLED(유기 발광 다이오드)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1389,
    "itemName": "아이에스이커머스",
    "itemCode": "069920",
    "theme": "소매유통",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1390,
    "itemName": "디이엔티",
    "itemCode": "079810",
    "theme": "2차전지, 2차전지(장비), 日 수출 규제(국산화 등), 플렉서블 디스플레이, LCD장비",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1391,
    "itemName": "옴니시스템",
    "itemCode": "057540",
    "theme": "스마트그리드(지능형전력망), 스마트홈(홈네트워크)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1392,
    "itemName": "리더스 기술투자",
    "itemCode": "019570",
    "theme": "창투사",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1393,
    "itemName": "태웅로직스",
    "itemCode": "124560",
    "theme": "종합 물류",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1394,
    "itemName": "엘티씨",
    "itemCode": "170920",
    "theme": "반도체 재료/부품, 수소차(연료전지/부품/충전소 등), LCD 부품/소재",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1395,
    "itemName": "아톤",
    "itemCode": "158430",
    "theme": "보안주(정보), 핀테크(FinTech)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1396,
    "itemName": "신풍제지",
    "itemCode": "002870",
    "theme": "제지",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1397,
    "itemName": "로보로보",
    "itemCode": "215100",
    "theme": "4차산업 수혜주, 지능형로봇/인공지능(AI)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1398,
    "itemName": "원풍물산",
    "itemCode": "008290",
    "theme": "패션/의류",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1399,
    "itemName": "파워넷",
    "itemCode": "037030",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1400,
    "itemName": "멕아이씨에스",
    "itemCode": "058110",
    "theme": "의료기기",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1401,
    "itemName": "KTis",
    "itemCode": "058860",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1402,
    "itemName": "보라티알",
    "itemCode": "250000",
    "theme": "음식료업종, 日제품 불매운동(수혜)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1403,
    "itemName": "STX중공업",
    "itemCode": "071970",
    "theme": "수소차(연료전지/부품/충전소 등), 조선기자재, 풍력에너지",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1404,
    "itemName": "한국유니온제약",
    "itemCode": "080720",
    "theme": "제약업체, 코로나19(덱사메타손), 코로나19(혈장치료/혈장치료제)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1405,
    "itemName": "서린바이오",
    "itemCode": "038070",
    "theme": "메르스 코로나 바이러스, 코로나19(혈장치료/혈장치료제), 콜드체인(저온 유통)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1406,
    "itemName": "이니텍",
    "itemCode": "053350",
    "theme": "보안주(정보), 블록체인, 삼성페이, 인터넷은행, 핀테크(FinTech)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1407,
    "itemName": "영우디에스피",
    "itemCode": "143540",
    "theme": "마이크로 LED, OLED(유기 발광 다이오드)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1408,
    "itemName": "이엠넷",
    "itemCode": "123570",
    "theme": "광고",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1409,
    "itemName": "국영지앤엠",
    "itemCode": "006050",
    "theme": "방위산업/전쟁 및 테러, 정치/인맥(이낙연), 철도",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1410,
    "itemName": "비엠티",
    "itemCode": "086670",
    "theme": "스마트팩토리(스마트공장), 원자력발전, 정치/인맥(문재인), 조선기자재",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1411,
    "itemName": "사조오양",
    "itemCode": "006090",
    "theme": "구제역/광우병 수혜, 수산",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1412,
    "itemName": "대유플러스",
    "itemCode": "000300",
    "theme": "비철금속, 자동차부품, 전기차, 탄소나노튜브(CNT)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1413,
    "itemName": "대창단조",
    "itemCode": "015230",
    "theme": "건설기계",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1414,
    "itemName": "미래나노텍",
    "itemCode": "095500",
    "theme": "터치패널(스마트폰/태블릿PC), LCD 부품/소재",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1415,
    "itemName": "고려산업",
    "itemCode": "002140",
    "theme": "사료, 정치/인맥(문재인), 정치/인맥(홍정욱)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1416,
    "itemName": "인포뱅크",
    "itemCode": "039290",
    "theme": "모바일솔루션(스마트폰), 모바일콘텐츠(스마트폰/태블릿PC), 스마트카(SMART CAR), 자율주행차, 전자결제(전자화폐), 핀테크(FinTech), SNS(소셜네트워크서비스)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1417,
    "itemName": "에이트원",
    "itemCode": "230980",
    "theme": "가상현실(VR), 메타버스(Metaverse), 방위산업/전쟁 및 테러, 증강현실(AR)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1418,
    "itemName": "나노씨엠에스",
    "itemCode": "247660",
    "theme": "2021 상반기 신규상장, 보안주(정보)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1419,
    "itemName": "TS인베스트먼트",
    "itemCode": "246690",
    "theme": "4차산업 수혜주, 가상화폐(비트코인 등), 두나무 관련주, 일자리(취업), 창투사, 크래프톤 관련주",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1420,
    "itemName": "이건산업",
    "itemCode": "008250",
    "theme": "리모델링/인테리어, 온실가스(탄소배출권), 조림사업",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1421,
    "itemName": "원익큐브",
    "itemCode": "014190",
    "theme": "정치/인맥(윤석열), 폴더블폰",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1422,
    "itemName": "씨이랩",
    "itemCode": "189330",
    "theme": "2021 상반기 신규상장",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1423,
    "itemName": "성보화학",
    "itemCode": "003080",
    "theme": "농업, 정치/인맥(윤석열)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1424,
    "itemName": "팬젠",
    "itemCode": "222110",
    "theme": "바이오시밀러(복제 바이오의약품)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1425,
    "itemName": "넥스트아이",
    "itemCode": "137940",
    "theme": "2차전지, 2차전지(장비), 화장품, LCD장비",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1426,
    "itemName": "휴비츠",
    "itemCode": "065510",
    "theme": "고령화 사회(노인복지), 의료기기, 황사/미세먼지, U-Healthcare(원격진료)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1427,
    "itemName": "링네트",
    "itemCode": "042500",
    "theme": "사물인터넷, 재택근무/스마트워크, 정치/인맥(안철수), NI(네트워크통합)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1428,
    "itemName": "KC그린홀딩스",
    "itemCode": "009440",
    "theme": "지주사, 태양광에너지, 폐기물처리",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1429,
    "itemName": "로지시스",
    "itemCode": "067730",
    "theme": "화폐/금융자동화기기(디지털화폐 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1430,
    "itemName": "듀오백",
    "itemCode": "073190",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1431,
    "itemName": "비비안",
    "itemCode": "002070",
    "theme": "마스크, 메타버스(Metaverse), 日제품 불매운동(수혜), 정치/인맥(이재명), 패션/의류",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1432,
    "itemName": "케이맥",
    "itemCode": "043290",
    "theme": "LCD장비, OLED(유기 발광 다이오드)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1433,
    "itemName": "엘엠에스",
    "itemCode": "073110",
    "theme": "그래핀, 스마트폰, LCD 부품/소재",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1434,
    "itemName": "인콘",
    "itemCode": "083640",
    "theme": "마스크, 면역항암제, 보안주(물리), 재난/안전(지진 등), CCTV＆DVR",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1435,
    "itemName": "디에이피",
    "itemCode": "066900",
    "theme": "휴대폰부품, PCB(FPCB 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1436,
    "itemName": "TCC스틸",
    "itemCode": "002710",
    "theme": "2차전지, 2차전지(소재/부품), 철강 중소형",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1437,
    "itemName": "오픈베이스",
    "itemCode": "049480",
    "theme": "4차산업 수혜주, 보안주(정보), 사물인터넷, 스마트팩토리(스마트공장), 정치/인맥(안철수), 지능형로봇/인공지능(AI), 탄소나노튜브(CNT), NI(네트워크통합)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1438,
    "itemName": "이글벳",
    "itemCode": "044960",
    "theme": "메르스 코로나 바이러스, 아프리카 돼지열병(ASF)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1439,
    "itemName": "데이타솔루션",
    "itemCode": "263800",
    "theme": "지능형로봇/인공지능(AI), SI(시스템통합)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1440,
    "itemName": "신화인터텍",
    "itemCode": "056700",
    "theme": "LCD 부품/소재",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1441,
    "itemName": "지엔씨에너지",
    "itemCode": "119850",
    "theme": "4차산업 수혜주, 남북경협",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1442,
    "itemName": "HRS",
    "itemCode": "036640",
    "theme": "원자력발전, 재난/안전(지진 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1443,
    "itemName": "에이치엘비파워",
    "itemCode": "043220",
    "theme": "의료기기, 전력저장장치(ESS)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1444,
    "itemName": "쎄노텍",
    "itemCode": "222420",
    "theme": "2차전지, 2차전지(소재/부품), 북한 광물자원개발, 희귀금속(희토류 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1445,
    "itemName": "삼양옵틱스",
    "itemCode": "225190",
    "theme": "카메라모듈/부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1446,
    "itemName": "동방아그로",
    "itemCode": "007590",
    "theme": "농업, 태풍 및 장마",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1447,
    "itemName": "이스트소프트",
    "itemCode": "047560",
    "theme": "4차산업 수혜주, 게임, 모바일게임(스마트폰), 보안주(정보), 핀테크(FinTech)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1448,
    "itemName": "나무기술",
    "itemCode": "242040",
    "theme": "5G(5세대 이동통신), 클라우드 컴퓨팅, SI(시스템통합)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1449,
    "itemName": "대성창투",
    "itemCode": "027830",
    "theme": "4차산업 수혜주, 두나무 관련주, 블록체인, 일자리(취업), 창투사, 크래프톤 관련주",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1450,
    "itemName": "상신브레이크",
    "itemCode": "041650",
    "theme": "자동차부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1451,
    "itemName": "대현",
    "itemCode": "016090",
    "theme": "패션/의류",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1452,
    "itemName": "사조씨푸드",
    "itemCode": "014710",
    "theme": "수산",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1453,
    "itemName": "하이즈항공",
    "itemCode": "221840",
    "theme": "항공기부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1454,
    "itemName": "태평양물산",
    "itemCode": "007980",
    "theme": "패션/의류",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1455,
    "itemName": "홈캐스트",
    "itemCode": "064240",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1456,
    "itemName": "잉크테크",
    "itemCode": "049550",
    "theme": "전자파",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1457,
    "itemName": "액트로",
    "itemCode": "290740",
    "theme": "스마트폰, 카메라모듈/부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1458,
    "itemName": "성호전자",
    "itemCode": "043260",
    "theme": "공기청정기, LED",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1459,
    "itemName": "액션스퀘어",
    "itemCode": "205500",
    "theme": "모바일게임(스마트폰)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1460,
    "itemName": "까스텔바작",
    "itemCode": "308100",
    "theme": "패션/의류",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1461,
    "itemName": "삼영화학",
    "itemCode": "003720",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1462,
    "itemName": "코데즈컴바인",
    "itemCode": "047770",
    "theme": "日제품 불매운동(수혜), 패션/의류",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1463,
    "itemName": "빅솔론",
    "itemCode": "093190",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1464,
    "itemName": "삼진엘앤디",
    "itemCode": "054090",
    "theme": "2차전지, 2차전지(소재/부품), 전력저장장치(ESS), LCD 부품/소재, LCD BLU제조, LED",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1465,
    "itemName": "코맥스",
    "itemCode": "036690",
    "theme": "사물인터넷, 스마트홈(홈네트워크), 음성인식, 클라우드 컴퓨팅, CCTV＆DVR",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1466,
    "itemName": "참엔지니어링",
    "itemCode": "009310",
    "theme": "LCD장비, OLED(유기 발광 다이오드)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1467,
    "itemName": "로체시스템즈",
    "itemCode": "071280",
    "theme": "반도체 장비, LCD장비",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1468,
    "itemName": "코위버",
    "itemCode": "056360",
    "theme": "5G(5세대 이동통신), 통신장비",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1469,
    "itemName": "유니트론텍",
    "itemCode": "142210",
    "theme": "자율주행차",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1470,
    "itemName": "제일바이오",
    "itemCode": "052670",
    "theme": "구충제(펜벤다졸 등), 메르스 코로나 바이러스, 아프리카 돼지열병(ASF)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1471,
    "itemName": "방림",
    "itemCode": "003610",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1472,
    "itemName": "대림B&Co",
    "itemCode": "005750",
    "theme": "리모델링/인테리어",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1473,
    "itemName": "휴니드",
    "itemCode": "005870",
    "theme": "드론(Drone), 방위산업/전쟁 및 테러, 항공기부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1474,
    "itemName": "액토즈소프트",
    "itemCode": "052790",
    "theme": "게임, 모바일게임(스마트폰)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1475,
    "itemName": "메가엠디",
    "itemCode": "133750",
    "theme": "교육/온라인 교육, 일자리(취업)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1476,
    "itemName": "CNH",
    "itemCode": "023460",
    "theme": "지주사",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1477,
    "itemName": "마니커에프앤지",
    "itemCode": "195500",
    "theme": "육계, 음식료업종",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1478,
    "itemName": "에프앤가이드",
    "itemCode": "064850",
    "theme": "2020 하반기 신규상장",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1479,
    "itemName": "엘이티",
    "itemCode": "297890",
    "theme": "플렉서블 디스플레이, LCD장비, OLED(유기 발광 다이오드)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1480,
    "itemName": "아비코전자",
    "itemCode": "036010",
    "theme": "스마트폰, 휴대폰부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1481,
    "itemName": "비상교육",
    "itemCode": "100220",
    "theme": "교육/온라인 교육",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1482,
    "itemName": "율호",
    "itemCode": "072770",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1483,
    "itemName": "우신시스템",
    "itemCode": "017370",
    "theme": "자동차부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1484,
    "itemName": "푸른기술",
    "itemCode": "094940",
    "theme": "4차산업 수혜주, 철도, 키오스크(KIOSK), 화폐/금융자동화기기(디지털화폐 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1485,
    "itemName": "비에이치아이",
    "itemCode": "083650",
    "theme": "셰일가스(Shale Gas), 원자력발전, 원자력발전소 해체, LNG(액화천연가스)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1486,
    "itemName": "현대사료",
    "itemCode": "016790",
    "theme": "사료, 아프리카 돼지열병(ASF)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1487,
    "itemName": "우노앤컴퍼니",
    "itemCode": "114630",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1488,
    "itemName": "파수",
    "itemCode": "150900",
    "theme": "보안주(정보), 블록체인, 재택근무/스마트워크",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1489,
    "itemName": "지투알",
    "itemCode": "035000",
    "theme": "광고",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1490,
    "itemName": "동우팜투테이블",
    "itemCode": "088910",
    "theme": "구제역/광우병 수혜, 아프리카 돼지열병(ASF), 여름, 육계",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1491,
    "itemName": "슈프리마에이치큐",
    "itemCode": "094840",
    "theme": "보안주(물리), 지주사",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1492,
    "itemName": "골드퍼시픽",
    "itemCode": "038530",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1493,
    "itemName": "베뉴지",
    "itemCode": "019010",
    "theme": "백화점, 소매유통",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1494,
    "itemName": "피씨디렉트",
    "itemCode": "051380",
    "theme": "드론(Drone)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1495,
    "itemName": "고려신용정보",
    "itemCode": "049720",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1496,
    "itemName": "DSC인베스트먼트",
    "itemCode": "241520",
    "theme": "4차산업 수혜주, 두나무 관련주, 마켓컬리 관련주, 일자리(취업), 창투사",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1497,
    "itemName": "에스폴리텍",
    "itemCode": "050760",
    "theme": "태양광에너지, LCD 부품/소재, LED",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1498,
    "itemName": "유성티엔에스",
    "itemCode": "024800",
    "theme": "정치/인맥(문재인), 종합 물류, 편의점",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1499,
    "itemName": "씨큐브",
    "itemCode": "101240",
    "theme": "화장품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1500,
    "itemName": "바른손",
    "itemCode": "018700",
    "theme": "가상현실(VR), 두나무 관련주, 모바일게임(스마트폰), 모바일콘텐츠(스마트폰/태블릿PC), 엔터테인먼트, 영상콘텐츠, 영화, 정치/인맥(문재인), 화장품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1501,
    "itemName": "아이크래프트",
    "itemCode": "052460",
    "theme": "5G(5세대 이동통신), 백신여권, 정치/인맥(윤석열), SI(시스템통합)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1502,
    "itemName": "태양",
    "itemCode": "053620",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1503,
    "itemName": "한국내화",
    "itemCode": "010040",
    "theme": "북한 광물자원개발",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1504,
    "itemName": "동일금속",
    "itemCode": "109860",
    "theme": "건설기계",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1505,
    "itemName": "광림",
    "itemCode": "014200",
    "theme": "방위산업/전쟁 및 테러, 재난/안전(지진 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1506,
    "itemName": "에이치시티",
    "itemCode": "072990",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1507,
    "itemName": "이노인스트루먼트",
    "itemCode": "215790",
    "theme": "5G(5세대 이동통신), 통신장비",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1508,
    "itemName": "모나미",
    "itemCode": "005360",
    "theme": "엔젤산업, 日제품 불매운동(수혜)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1509,
    "itemName": "한솔로지스틱스",
    "itemCode": "009180",
    "theme": "종합 물류",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1510,
    "itemName": "파이오링크",
    "itemCode": "170790",
    "theme": "클라우드 컴퓨팅, 통신장비",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1511,
    "itemName": "에스에너지",
    "itemCode": "095910",
    "theme": "수소차(연료전지/부품/충전소 등), 태양광에너지",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1512,
    "itemName": "한국가구",
    "itemCode": "004590",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1513,
    "itemName": "모비스",
    "itemCode": "250060",
    "theme": "4차산업 수혜주, 지능형로봇/인공지능(AI), 핵융합에너지",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1514,
    "itemName": "페이퍼코리아",
    "itemCode": "001020",
    "theme": "제지",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1515,
    "itemName": "엠에스씨",
    "itemCode": "009780",
    "theme": "음식료업종",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1516,
    "itemName": "에이루트",
    "itemCode": "096690",
    "theme": "RFID(NFC 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1517,
    "itemName": "부국철강",
    "itemCode": "026940",
    "theme": "남-북-러 가스관사업, 정치/인맥(이낙연), 철강 중소형",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1518,
    "itemName": "디엔에이링크",
    "itemCode": "127120",
    "theme": "유전자 치료제/분석, 코로나19(진단/치료제/백신 개발 등), 코로나19(진단키트)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1519,
    "itemName": "DSR",
    "itemCode": "155660",
    "theme": "정치/인맥(문재인), 정치/인맥(유승민)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1520,
    "itemName": "한국프랜지",
    "itemCode": "010100",
    "theme": "자동차부품, 정치/인맥(홍정욱)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1521,
    "itemName": "성도이엔지",
    "itemCode": "037350",
    "theme": "반도체 장비",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1522,
    "itemName": "호전실업",
    "itemCode": "111110",
    "theme": "패션/의류",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1523,
    "itemName": "와이즈버즈",
    "itemCode": "273060",
    "theme": "광고",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1524,
    "itemName": "엔피디",
    "itemCode": "198080",
    "theme": "스마트폰",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1525,
    "itemName": "티라유텍",
    "itemCode": "322180",
    "theme": "스마트팩토리(스마트공장)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1526,
    "itemName": "에쎈테크",
    "itemCode": "043340",
    "theme": "여름",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1527,
    "itemName": "대륙제관",
    "itemCode": "004780",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1528,
    "itemName": "에프엔씨엔터",
    "itemCode": "173940",
    "theme": "엔터테인먼트, 영상콘텐츠, 음원/음반",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1529,
    "itemName": "우진",
    "itemCode": "105840",
    "theme": "원자력발전, 원자력발전소 해체",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1530,
    "itemName": "코퍼스코리아",
    "itemCode": "322780",
    "theme": "영상콘텐츠",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1531,
    "itemName": "매커스",
    "itemCode": "093520",
    "theme": "가상화폐(비트코인 등), 드론(Drone), 태양광에너지",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1532,
    "itemName": "바이온",
    "itemCode": "032980",
    "theme": "줄기세포, 화장품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1533,
    "itemName": "KBI메탈",
    "itemCode": "024840",
    "theme": "자동차부품, 전선",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1534,
    "itemName": "인성정보",
    "itemCode": "033230",
    "theme": "고령화 사회(노인복지), NI(네트워크통합), U-Healthcare(원격진료)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1535,
    "itemName": "코리아에프티",
    "itemCode": "123410",
    "theme": "자동차부품, 자율주행차",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1536,
    "itemName": "코메론",
    "itemCode": "049430",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1537,
    "itemName": "알에스오토메이션",
    "itemCode": "140670",
    "theme": "4차산업 수혜주, 스마트팩토리(스마트공장), 전력저장장치(ESS), 태양광에너지",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1538,
    "itemName": "오스템",
    "itemCode": "031510",
    "theme": "자동차부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1539,
    "itemName": "세화피앤씨",
    "itemCode": "252500",
    "theme": "화장품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1540,
    "itemName": "EG",
    "itemCode": "037370",
    "theme": "수소차(연료전지/부품/충전소 등), 희귀금속(희토류 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1541,
    "itemName": "엠브레인",
    "itemCode": "169330",
    "theme": "2020 하반기 신규상장",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1542,
    "itemName": "한송네오텍",
    "itemCode": "226440",
    "theme": "2차전지, 2차전지(소재/부품), 마스크, OLED(유기 발광 다이오드)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1543,
    "itemName": "제이티",
    "itemCode": "089790",
    "theme": "반도체 장비",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1544,
    "itemName": "한라IMS",
    "itemCode": "092460",
    "theme": "선박평형수 처리장치, 조선기자재, LED",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1545,
    "itemName": "배럴",
    "itemCode": "267790",
    "theme": "여름, 日제품 불매운동(수혜), 치매, 패션/의류",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1546,
    "itemName": "SG&G",
    "itemCode": "040610",
    "theme": "자동차부품, 정치/인맥(유시민), 종합 물류",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1547,
    "itemName": "일진파워",
    "itemCode": "094820",
    "theme": "원자력발전, 핵융합에너지",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1548,
    "itemName": "티에스아이",
    "itemCode": "277880",
    "theme": "2020 하반기 신규상장, 2차전지, 2차전지(장비)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1549,
    "itemName": "경동인베스트",
    "itemCode": "012320",
    "theme": "북한 광물자원개발, 지주사",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1550,
    "itemName": "한창",
    "itemCode": "005110",
    "theme": "남북경협, 재난/안전(지진 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1551,
    "itemName": "우리넷",
    "itemCode": "115440",
    "theme": "5G(5세대 이동통신), 철도, 통신장비",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1552,
    "itemName": "조광페인트",
    "itemCode": "004910",
    "theme": "정치/인맥(문재인), 페인트",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1553,
    "itemName": "마이크로프랜드",
    "itemCode": "147760",
    "theme": "반도체 재료/부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1554,
    "itemName": "대성파인텍",
    "itemCode": "104040",
    "theme": "자동차부품, 태양광에너지",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1555,
    "itemName": "유성기업",
    "itemCode": "002920",
    "theme": "자동차부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1556,
    "itemName": "제이준코스메틱",
    "itemCode": "025620",
    "theme": "화장품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1557,
    "itemName": "더블유에스아이",
    "itemCode": "299170",
    "theme": "의료기기",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1558,
    "itemName": "한국종합기술",
    "itemCode": "023350",
    "theme": "수자원(양적/질적 개선), 재난/안전(지진 등), 철도, 테마파크",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1559,
    "itemName": "아이오케이",
    "itemCode": "078860",
    "theme": "엔터테인먼트",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1560,
    "itemName": "예선테크",
    "itemCode": "250930",
    "theme": "LCD 부품/소재, OLED(유기 발광 다이오드)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1561,
    "itemName": "한일진공",
    "itemCode": "123840",
    "theme": "가상화폐(비트코인 등), 스마트폰",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1562,
    "itemName": "엔에스엔",
    "itemCode": "031860",
    "theme": "자전거, 치매",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1563,
    "itemName": "대주산업",
    "itemCode": "003310",
    "theme": "사료",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1564,
    "itemName": "다스코",
    "itemCode": "058730",
    "theme": "남북경협, 태양광에너지",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1565,
    "itemName": "케이엔제이",
    "itemCode": "272110",
    "theme": "반도체 재료/부품, LCD장비, LED, OLED(유기 발광 다이오드)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1566,
    "itemName": "DSR제강",
    "itemCode": "069730",
    "theme": "정치/인맥(문재인), 정치/인맥(유승민), 철강 중소형",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1567,
    "itemName": "동국알앤에스",
    "itemCode": "075970",
    "theme": "2차전지, 2차전지(소재/부품), 북한 광물자원개발, 스마트팩토리(스마트공장), 희귀금속(희토류 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1568,
    "itemName": "유아이엘",
    "itemCode": "049520",
    "theme": "휴대폰부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1569,
    "itemName": "상보",
    "itemCode": "027580",
    "theme": "그래핀, 북한 광물자원개발, 탄소나노튜브(CNT), 폴더블폰, LCD 부품/소재",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1570,
    "itemName": "영보화학",
    "itemCode": "014440",
    "theme": "자동차부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1571,
    "itemName": "자연과환경",
    "itemCode": "043910",
    "theme": "4대강 복원, 수자원(양적/질적 개선), 조림사업, DMZ 평화공원",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1572,
    "itemName": "원익",
    "itemCode": "032940",
    "theme": "고령화 사회(노인복지), 의료기기",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1573,
    "itemName": "혜인",
    "itemCode": "003010",
    "theme": "4대강 복원, 건설기계, 방위산업/전쟁 및 테러, 태양광에너지, 환율하락 수혜",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1574,
    "itemName": "한국선재",
    "itemCode": "025550",
    "theme": "정치/인맥(오세훈), 정치/인맥(유승민), 해저터널(지하화/지하도로 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1575,
    "itemName": "대원화성",
    "itemCode": "024890",
    "theme": "희귀금속(희토류 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1576,
    "itemName": "오공",
    "itemCode": "045060",
    "theme": "마스크, 메르스 코로나 바이러스, 황사/미세먼지",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1577,
    "itemName": "동양피스톤",
    "itemCode": "092780",
    "theme": "수소차(연료전지/부품/충전소 등), 자동차부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1578,
    "itemName": "문배철강",
    "itemCode": "008420",
    "theme": "남-북-러 가스관사업, 철강 중소형",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1579,
    "itemName": "디알텍",
    "itemCode": "214680",
    "theme": "의료기기",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1580,
    "itemName": "모바일리더",
    "itemCode": "100030",
    "theme": "모바일솔루션(스마트폰), 인터넷은행",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1581,
    "itemName": "화인베스틸",
    "itemCode": "133820",
    "theme": "조선기자재, 철강 중소형",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1582,
    "itemName": "디티앤씨",
    "itemCode": "187220",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1583,
    "itemName": "케이엘넷",
    "itemCode": "039420",
    "theme": "블록체인, 사물인터넷, SI(시스템통합)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1584,
    "itemName": "유비벨록스",
    "itemCode": "089850",
    "theme": "모바일솔루션(스마트폰), 삼성페이, 스마트카(SMART CAR), RFID(NFC 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1585,
    "itemName": "디스플레이텍",
    "itemCode": "066670",
    "theme": "스마트폰, 휴대폰부품, LCD 부품/소재",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1586,
    "itemName": "코드네이처",
    "itemCode": "078940",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1587,
    "itemName": "알로이스",
    "itemCode": "297570",
    "theme": "쿠팡 관련주",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1588,
    "itemName": "하이로닉",
    "itemCode": "149980",
    "theme": "의료기기",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1589,
    "itemName": "대유에이피",
    "itemCode": "290120",
    "theme": "자동차부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1590,
    "itemName": "애니젠",
    "itemCode": "196300",
    "theme": "화장품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1591,
    "itemName": "디케이앤디",
    "itemCode": "263020",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1592,
    "itemName": "전진바이오팜",
    "itemCode": "110020",
    "theme": "아프리카 돼지열병(ASF)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1593,
    "itemName": "케이엔더블유",
    "itemCode": "105330",
    "theme": "LCD 부품/소재",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1594,
    "itemName": "만호제강",
    "itemCode": "001080",
    "theme": "철강 중소형",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1595,
    "itemName": "트루윈",
    "itemCode": "105550",
    "theme": "5G(5세대 이동통신), 자동차부품, 자율주행차, 전기차",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1596,
    "itemName": "투비소프트",
    "itemCode": "079970",
    "theme": "모바일솔루션(스마트폰), 삼성페이, 콜드체인(저온 유통), 핀테크(FinTech)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1597,
    "itemName": "상지카일룸",
    "itemCode": "042940",
    "theme": "건설 중소형, 스마트홈(홈네트워크)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1598,
    "itemName": "플레이위드",
    "itemCode": "023770",
    "theme": "게임, 모바일게임(스마트폰)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1599,
    "itemName": "무림SP",
    "itemCode": "001810",
    "theme": "제지",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1600,
    "itemName": "우정바이오",
    "itemCode": "215380",
    "theme": "메르스 코로나 바이러스, 유전자 치료제/분석, 코로나19(음압병실/음압구급차)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1601,
    "itemName": "우양",
    "itemCode": "103840",
    "theme": "마켓컬리 관련주, 음식료업종",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1602,
    "itemName": "SG",
    "itemCode": "255220",
    "theme": "시멘트/레미콘, 아스콘(아스팔트 콘크리트)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1603,
    "itemName": "우진비앤지",
    "itemCode": "018620",
    "theme": "구제역/광우병 수혜, 농업, 메르스 코로나 바이러스, 비료, 사료, 아프리카 돼지열병(ASF)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1604,
    "itemName": "케이피에프",
    "itemCode": "024880",
    "theme": "자동차부품, 풍력에너지",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1605,
    "itemName": "소프트캠프",
    "itemCode": "258790",
    "theme": "보안주(정보), 재택근무/스마트워크",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1606,
    "itemName": "원바이오젠",
    "itemCode": "307280",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1607,
    "itemName": "인디에프",
    "itemCode": "014990",
    "theme": "남북경협, 패션/의류",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1608,
    "itemName": "휴스틸",
    "itemCode": "005010",
    "theme": "강관업체(Steel pipe), 남-북-러 가스관사업, 철강 중소형",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1609,
    "itemName": "에이디칩스",
    "itemCode": "054630",
    "theme": "4차산업 수혜주, 사물인터넷, 시스템반도체, 지능형로봇/인공지능(AI), 콜드체인(저온 유통)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1610,
    "itemName": "제일테크노스",
    "itemCode": "038010",
    "theme": "정치/인맥(윤석열)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1611,
    "itemName": "엘아이에스",
    "itemCode": "138690",
    "theme": "마스크, LED장비, OLED(유기 발광 다이오드)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1612,
    "itemName": "삼현철강",
    "itemCode": "017480",
    "theme": "남-북-러 가스관사업, 철강 중소형, 철도, GTX(수도권 광역급행철도)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1613,
    "itemName": "서암기계공업",
    "itemCode": "100660",
    "theme": "공작기계, 철도, 풍력에너지",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1614,
    "itemName": "아이앤씨",
    "itemCode": "052860",
    "theme": "스마트그리드(지능형전력망), 스마트폰, 시스템반도체, 휴대폰부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1615,
    "itemName": "코이즈",
    "itemCode": "121850",
    "theme": "정치/인맥(이재명), LCD 부품/소재, LCD BLU제조",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1616,
    "itemName": "링크제니시스",
    "itemCode": "219420",
    "theme": "스마트팩토리(스마트공장), 지능형로봇/인공지능(AI)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1617,
    "itemName": "이건홀딩스",
    "itemCode": "039020",
    "theme": "리모델링/인테리어, 조림사업, 지주사, 태양광에너지",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1618,
    "itemName": "버킷스튜디오",
    "itemCode": "066410",
    "theme": "엔터테인먼트, 영상콘텐츠, 영화",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1619,
    "itemName": "파버나인",
    "itemCode": "177830",
    "theme": "정치/인맥(이낙연), 키오스크(KIOSK)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1620,
    "itemName": "램테크놀러지",
    "itemCode": "171010",
    "theme": "반도체 재료/부품, 日 수출 규제(국산화 등), OLED(유기 발광 다이오드)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1621,
    "itemName": "알톤스포츠",
    "itemCode": "123750",
    "theme": "자전거, 전기자전거",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1622,
    "itemName": "윌링스",
    "itemCode": "313760",
    "theme": "밥솥, 선박평형수 처리장치, 전력저장장치(ESS), 태양광에너지",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1623,
    "itemName": "플리토",
    "itemCode": "300080",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1624,
    "itemName": "한일사료",
    "itemCode": "005860",
    "theme": "구제역/광우병 수혜, 사료, 아프리카 돼지열병(ASF)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1625,
    "itemName": "케이엠제약",
    "itemCode": "225430",
    "theme": "마스크",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1626,
    "itemName": "삼성공조",
    "itemCode": "006660",
    "theme": "자동차부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1627,
    "itemName": "서울제약",
    "itemCode": "018680",
    "theme": "제약업체, 코로나19(화이자)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1628,
    "itemName": "한익스프레스",
    "itemCode": "014130",
    "theme": "조림사업, 종합 물류, 콜드체인(저온 유통)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1629,
    "itemName": "인팩",
    "itemCode": "023810",
    "theme": "자동차부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1630,
    "itemName": "손오공",
    "itemCode": "066910",
    "theme": "게임, 엔젤산업, 캐릭터상품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1631,
    "itemName": "아이엘사이언스",
    "itemCode": "307180",
    "theme": "LED",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1632,
    "itemName": "아진엑스텍",
    "itemCode": "059120",
    "theme": "4차산업 수혜주, 스마트폰, 시스템반도체",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1633,
    "itemName": "예림당",
    "itemCode": "036000",
    "theme": "엔젤산업, 출산장려정책",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1634,
    "itemName": "미래아이앤지",
    "itemCode": "007120",
    "theme": "방위산업/전쟁 및 테러",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1635,
    "itemName": "한양디지텍",
    "itemCode": "078350",
    "theme": "우주항공산업",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1636,
    "itemName": "아이비김영",
    "itemCode": "339950",
    "theme": "교육/온라인 교육",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1637,
    "itemName": "대호에이엘",
    "itemCode": "069460",
    "theme": "비철금속, 철도",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1638,
    "itemName": "푸드웰",
    "itemCode": "005670",
    "theme": "음식료업종",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1639,
    "itemName": "에스씨디",
    "itemCode": "042110",
    "theme": "여름",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1640,
    "itemName": "한국큐빅",
    "itemCode": "021650",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1641,
    "itemName": "제룡산업",
    "itemCode": "147830",
    "theme": "전력설비",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1642,
    "itemName": "타이거일렉",
    "itemCode": "219130",
    "theme": "반도체 재료/부품, PCB(FPCB 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1643,
    "itemName": "원풍",
    "itemCode": "008370",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1644,
    "itemName": "우리이앤엘",
    "itemCode": "153490",
    "theme": "LED",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1645,
    "itemName": "스카이이앤엠",
    "itemCode": "131100",
    "theme": "2차전지, 2차전지(소재/부품), 전기차",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1646,
    "itemName": "대창솔루션",
    "itemCode": "096350",
    "theme": "북한 광물자원개발, 원자력발전소 해체, 조선기자재, 콜드체인(저온 유통), 풍력에너지, LNG(액화천연가스)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1647,
    "itemName": "엠벤처투자",
    "itemCode": "019590",
    "theme": "창투사",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1648,
    "itemName": "CS홀딩스",
    "itemCode": "000590",
    "theme": "지주사",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1649,
    "itemName": "핸디소프트",
    "itemCode": "220180",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1650,
    "itemName": "재영솔루텍",
    "itemCode": "049630",
    "theme": "남북경협, 자동차부품, 카메라모듈/부품, 휴대폰부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1651,
    "itemName": "한국바이오젠",
    "itemCode": "318000",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1652,
    "itemName": "신원종합개발",
    "itemCode": "017000",
    "theme": "건설 중소형",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1653,
    "itemName": "에코캡",
    "itemCode": "128540",
    "theme": "자동차부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1654,
    "itemName": "린드먼아시아",
    "itemCode": "277070",
    "theme": "창투사",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1655,
    "itemName": "일성건설",
    "itemCode": "013360",
    "theme": "건설 중소형",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1656,
    "itemName": "세종메디칼",
    "itemCode": "258830",
    "theme": "의료기기",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1657,
    "itemName": "클라우드에어",
    "itemCode": "036170",
    "theme": "가상화폐(비트코인 등), 온실가스(탄소배출권), 자동차부품, 핀테크(FinTech), LED",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1658,
    "itemName": "대성미생물",
    "itemCode": "036480",
    "theme": "구제역/광우병 수혜, 아프리카 돼지열병(ASF)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1659,
    "itemName": "디딤",
    "itemCode": "217620",
    "theme": "음식료업종",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1660,
    "itemName": "메타랩스",
    "itemCode": "090370",
    "theme": "패션/의류, 화장품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1661,
    "itemName": "GH신소재",
    "itemCode": "130500",
    "theme": "자동차부품, 코로나19(음압병실/음압구급차)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1662,
    "itemName": "이랜시스",
    "itemCode": "264850",
    "theme": "보안주(물리)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1663,
    "itemName": "한국컴퓨터",
    "itemCode": "054040",
    "theme": "스마트폰, 휴대폰부품, LCD 부품/소재",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1664,
    "itemName": "성창오토텍",
    "itemCode": "080470",
    "theme": "수소차(연료전지/부품/충전소 등), 자동차부품, 전기차, 황사/미세먼지",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1665,
    "itemName": "파인텍",
    "itemCode": "131760",
    "theme": "터치패널(스마트폰/태블릿PC), 폴더블폰, 플렉서블 디스플레이, OLED(유기 발광 다이오드)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1666,
    "itemName": "시티랩스",
    "itemCode": "139050",
    "theme": "보안주(물리), 블록체인, CCTV＆DVR",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1667,
    "itemName": "멜파스",
    "itemCode": "096640",
    "theme": "바이오인식(생체인식), 스마트폰, 터치패널(스마트폰/태블릿PC), PCB(FPCB 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1668,
    "itemName": "아이즈비전",
    "itemCode": "031310",
    "theme": "MVNO(가상이동통신망사업자)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1669,
    "itemName": "세보엠이씨",
    "itemCode": "011560",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1670,
    "itemName": "큐브앤컴퍼니",
    "itemCode": "043090",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1671,
    "itemName": "진양제약",
    "itemCode": "007370",
    "theme": "메르스 코로나 바이러스, 제약업체, 치매",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1672,
    "itemName": "엔바이오니아",
    "itemCode": "317870",
    "theme": "수자원(양적/질적 개선)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1673,
    "itemName": "쌍용정보통신",
    "itemCode": "010280",
    "theme": "방위산업/전쟁 및 테러, 정치/인맥(정세균), SI(시스템통합)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1674,
    "itemName": "유니온커뮤니티",
    "itemCode": "203450",
    "theme": "바이오인식(생체인식)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1675,
    "itemName": "지니언스",
    "itemCode": "263860",
    "theme": "보안주(정보)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1676,
    "itemName": "삼진",
    "itemCode": "032750",
    "theme": "사물인터넷",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1677,
    "itemName": "서울전자통신",
    "itemCode": "027040",
    "theme": "삼성페이, 핀테크(FinTech)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1678,
    "itemName": "삼영이엔씨",
    "itemCode": "065570",
    "theme": "방위산업/전쟁 및 테러, 재난/안전(지진 등), 조선기자재",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1679,
    "itemName": "효성오앤비",
    "itemCode": "097870",
    "theme": "농업, 비료, 정치/인맥(윤석열), 조림사업",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1680,
    "itemName": "이글루시큐리티",
    "itemCode": "067920",
    "theme": "보안주(정보), 스마트그리드(지능형전력망), 인터넷은행, 핀테크(FinTech)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1681,
    "itemName": "신라섬유",
    "itemCode": "001000",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1682,
    "itemName": "토박스코리아",
    "itemCode": "215480",
    "theme": "엔젤산업, 출산장려정책, 패션/의류",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1683,
    "itemName": "이노테라피",
    "itemCode": "246960",
    "theme": "크래프톤 관련주",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1684,
    "itemName": "세명전기",
    "itemCode": "017510",
    "theme": "전력설비, 철도, 해저터널(지하화/지하도로 등), GTX(수도권 광역급행철도)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1685,
    "itemName": "SJM",
    "itemCode": "123700",
    "theme": "자동차부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1686,
    "itemName": "한일네트웍스",
    "itemCode": "046110",
    "theme": "가상화폐(비트코인 등), 보안주(정보), 정치/인맥(안철수), 클라우드 컴퓨팅, NI(네트워크통합)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1687,
    "itemName": "웰크론한텍",
    "itemCode": "076080",
    "theme": "2차전지, 2차전지(장비), 수자원(양적/질적 개선)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1688,
    "itemName": "코렌",
    "itemCode": "078650",
    "theme": "바이오인식(생체인식), 스마트폰, 카메라모듈/부품, 휴대폰부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1689,
    "itemName": "현우산업",
    "itemCode": "092300",
    "theme": "PCB(FPCB 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1690,
    "itemName": "서남",
    "itemCode": "294630",
    "theme": "우주항공산업",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1691,
    "itemName": "휘닉스소재",
    "itemCode": "050090",
    "theme": "정치/인맥(홍정욱)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1692,
    "itemName": "덕신하우징",
    "itemCode": "090410",
    "theme": "정치/인맥(이낙연)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1693,
    "itemName": "오리콤",
    "itemCode": "010470",
    "theme": "광고",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1694,
    "itemName": "한국맥널티",
    "itemCode": "222980",
    "theme": "음식료업종",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1695,
    "itemName": "화성밸브",
    "itemCode": "039610",
    "theme": "남-북-러 가스관사업, 정치/인맥(윤석열)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1696,
    "itemName": "베셀",
    "itemCode": "177350",
    "theme": "드론(Drone), 터치패널(스마트폰/태블릿PC), LCD장비, OLED(유기 발광 다이오드)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1697,
    "itemName": "리더스코스메틱",
    "itemCode": "016100",
    "theme": "골판지 제조, 화장품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1698,
    "itemName": "상신전자",
    "itemCode": "263810",
    "theme": "전자파",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1699,
    "itemName": "화신정공",
    "itemCode": "126640",
    "theme": "자동차부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1700,
    "itemName": "체리부로",
    "itemCode": "066360",
    "theme": "육계",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1701,
    "itemName": "삼영엠텍",
    "itemCode": "054540",
    "theme": "북한 광물자원개발, 재난/안전(지진 등), 조선기자재, 풍력에너지",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1702,
    "itemName": "대신정보통신",
    "itemCode": "020180",
    "theme": "정치/인맥(유승민), SI(시스템통합)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1703,
    "itemName": "피엔에이치테크",
    "itemCode": "239890",
    "theme": "2021 상반기 신규상장, OLED(유기 발광 다이오드)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1704,
    "itemName": "셀바스AI",
    "itemCode": "108860",
    "theme": "4차산업 수혜주, 모바일솔루션(스마트폰), 모바일콘텐츠(스마트폰/태블릿PC), 음성인식, 지능형로봇/인공지능(AI)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1705,
    "itemName": "이씨에스",
    "itemCode": "067010",
    "theme": "마켓컬리 관련주, 재택근무/스마트워크",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1706,
    "itemName": "파인디지털",
    "itemCode": "038950",
    "theme": "음성인식, 자율주행차, 차량용블랙박스",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1707,
    "itemName": "오디텍",
    "itemCode": "080520",
    "theme": "시스템반도체, LED",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1708,
    "itemName": "우리조명",
    "itemCode": "037400",
    "theme": "LED",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1709,
    "itemName": "피에스엠씨",
    "itemCode": "024850",
    "theme": "반도체 재료/부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1710,
    "itemName": "신라에스지",
    "itemCode": "025870",
    "theme": "구제역/광우병 수혜, 수산, 아프리카 돼지열병(ASF)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1711,
    "itemName": "경남스틸",
    "itemCode": "039240",
    "theme": "철강 중소형",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1712,
    "itemName": "메디콕스",
    "itemCode": "054180",
    "theme": "정치/인맥(김무성), 조선기자재, 철도, 코로나19(진단/치료제/백신 개발 등), 코로나19(치료제/백신 개발 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1713,
    "itemName": "우진플라임",
    "itemCode": "049800",
    "theme": "정치/인맥(황교안)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1714,
    "itemName": "MH에탄올",
    "itemCode": "023150",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1715,
    "itemName": "소프트센",
    "itemCode": "032680",
    "theme": "U-Healthcare(원격진료)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1716,
    "itemName": "피제이메탈",
    "itemCode": "128660",
    "theme": "북한 광물자원개발",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1717,
    "itemName": "희림",
    "itemCode": "037440",
    "theme": "남북경협, 리모델링/인테리어, 재난/안전(지진 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1718,
    "itemName": "선도전기",
    "itemCode": "007610",
    "theme": "전력설비, 철도",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1719,
    "itemName": "평화산업",
    "itemCode": "090080",
    "theme": "방위산업/전쟁 및 테러, 수소차(연료전지/부품/충전소 등), 자동차부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1720,
    "itemName": "케이비아이동국실업",
    "itemCode": "001620",
    "theme": "자동차부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1721,
    "itemName": "오하임아이엔티",
    "itemCode": "309930",
    "theme": "리모델링/인테리어",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1722,
    "itemName": "진양산업",
    "itemCode": "003780",
    "theme": "정치/인맥(오세훈)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1723,
    "itemName": "메타바이오메드",
    "itemCode": "059210",
    "theme": "고령화 사회(노인복지), 의료기기, 치아 치료(임플란트 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1724,
    "itemName": "S&K폴리텍",
    "itemCode": "091340",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1725,
    "itemName": "포시에스",
    "itemCode": "189690",
    "theme": "모바일콘텐츠(스마트폰/태블릿PC)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1726,
    "itemName": "에프알텍",
    "itemCode": "073540",
    "theme": "5G(5세대 이동통신), 통신장비, LED",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1727,
    "itemName": "스튜디오산타클로스",
    "itemCode": "204630",
    "theme": "엔터테인먼트, 영상콘텐츠",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1728,
    "itemName": "진도",
    "itemCode": "088790",
    "theme": "정치/인맥(윤석열), 패션/의류",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1729,
    "itemName": "에스에이티",
    "itemCode": "060540",
    "theme": "통신장비",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1730,
    "itemName": "중앙에너비스",
    "itemCode": "000440",
    "theme": "정치/인맥(이낙연), LPG(액화석유가스)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1731,
    "itemName": "그리티",
    "itemCode": "204020",
    "theme": "日제품 불매운동(수혜), 패션/의류",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1732,
    "itemName": "한일철강",
    "itemCode": "002220",
    "theme": "철강 중소형",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1733,
    "itemName": "위세아이텍",
    "itemCode": "065370",
    "theme": "모바일솔루션(스마트폰), 지능형로봇/인공지능(AI)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1734,
    "itemName": "정원엔시스",
    "itemCode": "045510",
    "theme": "SI(시스템통합)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1735,
    "itemName": "인화정공",
    "itemCode": "101930",
    "theme": "자동차부품, 조선기자재",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1736,
    "itemName": "아시아종묘",
    "itemCode": "154030",
    "theme": "농업",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1737,
    "itemName": "인트로메딕",
    "itemCode": "150840",
    "theme": "의료기기",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1738,
    "itemName": "한신기계",
    "itemCode": "011700",
    "theme": "스마트팩토리(스마트공장), 원자력발전",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1739,
    "itemName": "우림기계",
    "itemCode": "101170",
    "theme": "북한 광물자원개발, 셰일가스(Shale Gas), 철도, 풍력에너지",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1740,
    "itemName": "오스테오닉",
    "itemCode": "226400",
    "theme": "의료기기, 치아 치료(임플란트 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1741,
    "itemName": "인베니아",
    "itemCode": "079950",
    "theme": "LCD장비, OLED(유기 발광 다이오드)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1742,
    "itemName": "쎄니트",
    "itemCode": "037760",
    "theme": "비철금속, 시멘트/레미콘, 영화",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1743,
    "itemName": "아세아텍",
    "itemCode": "050860",
    "theme": "농업, 정치/인맥(황교안)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1744,
    "itemName": "이엘피",
    "itemCode": "063760",
    "theme": "LCD장비, OLED(유기 발광 다이오드)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1745,
    "itemName": "서진오토모티브",
    "itemCode": "122690",
    "theme": "자동차부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1746,
    "itemName": "형지I&C",
    "itemCode": "011080",
    "theme": "패션/의류",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1747,
    "itemName": "주연테크",
    "itemCode": "044380",
    "theme": "메타버스(Metaverse), 블록체인, 정치/인맥(이낙연)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1748,
    "itemName": "태양금속",
    "itemCode": "004100",
    "theme": "자동차부품, 정치/인맥(윤석열)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1749,
    "itemName": "에너토크",
    "itemCode": "019990",
    "theme": "수자원(양적/질적 개선), 원자력발전",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1750,
    "itemName": "대동전자",
    "itemCode": "008110",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1751,
    "itemName": "제이엠티",
    "itemCode": "094970",
    "theme": "LCD 부품/소재",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1752,
    "itemName": "전방",
    "itemCode": "000950",
    "theme": "정치/인맥(김무성)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1753,
    "itemName": "대림통상",
    "itemCode": "006570",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1754,
    "itemName": "파루",
    "itemCode": "043200",
    "theme": "메르스 코로나 바이러스, 슈퍼박테리아, 아프리카 돼지열병(ASF), 태양광에너지, 태풍 및 장마",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1755,
    "itemName": "화천기계",
    "itemCode": "010660",
    "theme": "공작기계, 자동차부품, 정치/인맥(조국)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1756,
    "itemName": "TPC",
    "itemCode": "048770",
    "theme": "3D 프린터, 4차산업 수혜주, 스마트팩토리(스마트공장), 지능형로봇/인공지능(AI)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1757,
    "itemName": "한일단조",
    "itemCode": "024740",
    "theme": "방위산업/전쟁 및 테러, 자동차부품, 정치/인맥(홍정욱)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1758,
    "itemName": "네오크레마",
    "itemCode": "311390",
    "theme": "음식료업종",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1759,
    "itemName": "삼일기업공사",
    "itemCode": "002290",
    "theme": "건설 중소형, 정치/인맥(유승민)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1760,
    "itemName": "아스타",
    "itemCode": "246720",
    "theme": "의료기기, U-Healthcare(원격진료)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1761,
    "itemName": "티에이치엔",
    "itemCode": "019180",
    "theme": "자동차부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1762,
    "itemName": "평화홀딩스",
    "itemCode": "010770",
    "theme": "수소차(연료전지/부품/충전소 등), 지주사",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1763,
    "itemName": "아시아경제",
    "itemCode": "127710",
    "theme": "광고, 미디어(방송/신문)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1764,
    "itemName": "승일",
    "itemCode": "049830",
    "theme": "정치/인맥(윤석열), 화장품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1765,
    "itemName": "위즈코프",
    "itemCode": "038620",
    "theme": "사물인터넷, 정치/인맥(윤석열), RFID(NFC 등), SI(시스템통합)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1766,
    "itemName": "캐스텍코리아",
    "itemCode": "071850",
    "theme": "자동차부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1767,
    "itemName": "동원금속",
    "itemCode": "018500",
    "theme": "자동차부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1768,
    "itemName": "얼라인드",
    "itemCode": "238120",
    "theme": "코로나19(진단/치료제/백신 개발 등), 코로나19(진단키트)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1769,
    "itemName": "아즈텍WB",
    "itemCode": "032080",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1770,
    "itemName": "휴네시온",
    "itemCode": "290270",
    "theme": "보안주(정보), 클라우드 컴퓨팅",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1771,
    "itemName": "픽셀플러스",
    "itemCode": "087600",
    "theme": "보안주(물리), 카메라모듈/부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1772,
    "itemName": "나노캠텍",
    "itemCode": "091970",
    "theme": "마스크, 증강현실(AR)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1773,
    "itemName": "케이에스피",
    "itemCode": "073010",
    "theme": "조선기자재",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1774,
    "itemName": "한탑",
    "itemCode": "002680",
    "theme": "사료, 음식료업종, 환율하락 수혜",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1775,
    "itemName": "케이디켐",
    "itemCode": "221980",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1776,
    "itemName": "솔루에타",
    "itemCode": "154040",
    "theme": "그래핀, 스마트폰, 전자파",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1777,
    "itemName": "대동스틸",
    "itemCode": "048470",
    "theme": "남-북-러 가스관사업, 철강 중소형",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1778,
    "itemName": "신송홀딩스",
    "itemCode": "006880",
    "theme": "음식료업종, 지주사",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1779,
    "itemName": "셀바스헬스케어",
    "itemCode": "208370",
    "theme": "의료기기",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1780,
    "itemName": "에코플라스틱",
    "itemCode": "038110",
    "theme": "자동차부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1781,
    "itemName": "에스피시스템스",
    "itemCode": "317830",
    "theme": "스마트팩토리(스마트공장)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1782,
    "itemName": "카스",
    "itemCode": "016920",
    "theme": "공기청정기, 마스크, 정치/인맥(이재명)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1783,
    "itemName": "부스타",
    "itemCode": "008470",
    "theme": "겨울",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1784,
    "itemName": "WISCOM",
    "itemCode": "024070",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1785,
    "itemName": "인산가",
    "itemCode": "277410",
    "theme": "음식료업종",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1786,
    "itemName": "진바이오텍",
    "itemCode": "086060",
    "theme": "구충제(펜벤다졸 등), 아프리카 돼지열병(ASF)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1787,
    "itemName": "아이디피",
    "itemCode": "332370",
    "theme": "2020 하반기 신규상장",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1788,
    "itemName": "네오펙트",
    "itemCode": "290660",
    "theme": "의료기기, U-Healthcare(원격진료)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1789,
    "itemName": "스맥",
    "itemCode": "099440",
    "theme": "공작기계, 스마트그리드(지능형전력망), 스마트팩토리(스마트공장), 지능형로봇/인공지능(AI)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1790,
    "itemName": "엔텔스",
    "itemCode": "069410",
    "theme": "5G(5세대 이동통신), 사물인터넷, 클라우드 컴퓨팅",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1791,
    "itemName": "대창스틸",
    "itemCode": "140520",
    "theme": "재난/안전(지진 등), 전기차, DMZ 평화공원",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1792,
    "itemName": "자이글",
    "itemCode": "234920",
    "theme": "정치/인맥(안철수)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1793,
    "itemName": "신진에스엠",
    "itemCode": "138070",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1794,
    "itemName": "티피씨글로벌",
    "itemCode": "130740",
    "theme": "자동차부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1795,
    "itemName": "플랜티넷",
    "itemCode": "075130",
    "theme": "모바일콘텐츠(스마트폰/태블릿PC), 보안주(정보), 창투사",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1796,
    "itemName": "알에프세미",
    "itemCode": "096610",
    "theme": "스마트폰, 음성인식, 지능형로봇/인공지능(AI), 휴대폰부품, LED, MLCC(적층세라믹콘덴서)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1797,
    "itemName": "모헨즈",
    "itemCode": "006920",
    "theme": "시멘트/레미콘, DMZ 평화공원",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1798,
    "itemName": "코리아에셋투자증권",
    "itemCode": "190650",
    "theme": "증권, 코로나19(스푸트니크V)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1799,
    "itemName": "미래테크놀로지",
    "itemCode": "213090",
    "theme": "보안주(정보), 인터넷은행",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1800,
    "itemName": "옵티시스",
    "itemCode": "109080",
    "theme": "철도",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1801,
    "itemName": "이스타코",
    "itemCode": "015020",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1802,
    "itemName": "유엔젤",
    "itemCode": "072130",
    "theme": "모바일솔루션(스마트폰), 재난/안전(지진 등), 정치/인맥(유시민), 클라우드 컴퓨팅, SNS(소셜네트워크서비스)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1803,
    "itemName": "YW",
    "itemCode": "051390",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1804,
    "itemName": "서산",
    "itemCode": "079650",
    "theme": "시멘트/레미콘",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1805,
    "itemName": "하이트론",
    "itemCode": "019490",
    "theme": "보안주(물리), CCTV＆DVR",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1806,
    "itemName": "포메탈",
    "itemCode": "119500",
    "theme": "농업, 방위산업/전쟁 및 테러, 자동차부품, 풍력에너지",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1807,
    "itemName": "코다코",
    "itemCode": "046070",
    "theme": "자동차부품, 전기차",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1808,
    "itemName": "TJ미디어",
    "itemCode": "032540",
    "theme": "모바일콘텐츠(스마트폰/태블릿PC), 엔터테인먼트",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1809,
    "itemName": "지엘팜텍",
    "itemCode": "204840",
    "theme": "정치/인맥(이재명)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1810,
    "itemName": "하이스틸",
    "itemCode": "071090",
    "theme": "강관업체(Steel pipe), 남-북-러 가스관사업, 수자원(양적/질적 개선)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1811,
    "itemName": "일지테크",
    "itemCode": "019540",
    "theme": "수소차(연료전지/부품/충전소 등), 日 수출 규제(국산화 등), 자동차부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1812,
    "itemName": "세중",
    "itemCode": "039310",
    "theme": "3D 프린터, 여행",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1813,
    "itemName": "SGA솔루션즈",
    "itemCode": "184230",
    "theme": "4차산업 수혜주, 가상화폐(비트코인 등), 백신여권, 보안주(정보), 블록체인, 사물인터넷, 클라우드 컴퓨팅, 핀테크(FinTech), SI(시스템통합)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1814,
    "itemName": "엑사이엔씨",
    "itemCode": "054940",
    "theme": "그래핀, 사물인터넷, 휴대폰부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1815,
    "itemName": "코디",
    "itemCode": "080530",
    "theme": "반도체 장비, 화장품, LCD 부품/소재, LED장비, OLED(유기 발광 다이오드)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1816,
    "itemName": "한국전자홀딩스",
    "itemCode": "006200",
    "theme": "지주사, 쿠팡 관련주",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1817,
    "itemName": "동일제강",
    "itemCode": "002690",
    "theme": "철강 중소형, 철도",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1818,
    "itemName": "씨유메디칼",
    "itemCode": "115480",
    "theme": "고령화 사회(노인복지), 의료기기",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1819,
    "itemName": "체시스",
    "itemCode": "033250",
    "theme": "비료, 아프리카 돼지열병(ASF), 자동차부품, 정치/인맥(김무성)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1820,
    "itemName": "네오티스",
    "itemCode": "085910",
    "theme": "블록체인, 자동차부품, 전기차, PCB(FPCB 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1821,
    "itemName": "백금T&A",
    "itemCode": "046310",
    "theme": "차량용블랙박스",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1822,
    "itemName": "오파스넷",
    "itemCode": "173130",
    "theme": "5G(5세대 이동통신), 재택근무/스마트워크, NI(네트워크통합), SI(시스템통합)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1823,
    "itemName": "국일신동",
    "itemCode": "060480",
    "theme": "비철금속, 정치/인맥(황교안)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1824,
    "itemName": "누리플랜",
    "itemCode": "069140",
    "theme": "정치/인맥(오세훈), 황사/미세먼지, DMZ 평화공원",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1825,
    "itemName": "삼보산업",
    "itemCode": "009620",
    "theme": "정치/인맥(조국)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1826,
    "itemName": "진양화학",
    "itemCode": "051630",
    "theme": "리모델링/인테리어, 정치/인맥(오세훈)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1827,
    "itemName": "성우테크론",
    "itemCode": "045300",
    "theme": "반도체 장비",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1828,
    "itemName": "윈텍",
    "itemCode": "320000",
    "theme": "2차전지, 2차전지(장비), LCD장비, MLCC(적층세라믹콘덴서), OLED(유기 발광 다이오드)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1829,
    "itemName": "지에스이",
    "itemCode": "053050",
    "theme": "겨울, 도시가스",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1830,
    "itemName": "한성기업",
    "itemCode": "003680",
    "theme": "구제역/광우병 수혜, 수산",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1831,
    "itemName": "피피아이",
    "itemCode": "062970",
    "theme": "5G(5세대 이동통신), 통신장비",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1832,
    "itemName": "슈프리마아이디",
    "itemCode": "317770",
    "theme": "바이오인식(생체인식)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1833,
    "itemName": "유신",
    "itemCode": "054930",
    "theme": "수자원(양적/질적 개선), 철도",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1834,
    "itemName": "미디어젠",
    "itemCode": "279600",
    "theme": "음성인식",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1835,
    "itemName": "알티캐스트",
    "itemCode": "085810",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1836,
    "itemName": "피델릭스",
    "itemCode": "032580",
    "theme": "스마트폰, 휴대폰부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1837,
    "itemName": "리노스",
    "itemCode": "039980",
    "theme": "재난/안전(지진 등), 철도, 패션/의류, GTX(수도권 광역급행철도)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1838,
    "itemName": "바이오로그디바이스",
    "itemCode": "208710",
    "theme": "바이오인식(생체인식), 카메라모듈/부품, 휴대폰부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1839,
    "itemName": "지란지교시큐리티",
    "itemCode": "208350",
    "theme": "보안주(정보)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1840,
    "itemName": "이퓨쳐",
    "itemCode": "134060",
    "theme": "교육/온라인 교육",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1841,
    "itemName": "브리지텍",
    "itemCode": "064480",
    "theme": "음성인식, 인터넷은행, 정치/인맥(안철수), 핀테크(FinTech)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1842,
    "itemName": "딜리",
    "itemCode": "131180",
    "theme": "DMZ 평화공원",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1843,
    "itemName": "와토스코리아",
    "itemCode": "079000",
    "theme": "수자원(양적/질적 개선)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1844,
    "itemName": "뉴보텍",
    "itemCode": "060260",
    "theme": "수자원(양적/질적 개선)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1845,
    "itemName": "한솔인티큐브",
    "itemCode": "070590",
    "theme": "SI(시스템통합)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1846,
    "itemName": "자비스",
    "itemCode": "254120",
    "theme": "2차전지, 2차전지(장비), 반도체 장비, PCB(FPCB 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1847,
    "itemName": "한일화학",
    "itemCode": "007770",
    "theme": "정치/인맥(오세훈)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1848,
    "itemName": "제너셈",
    "itemCode": "217190",
    "theme": "반도체 장비, 전자파",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1849,
    "itemName": "한세엠케이",
    "itemCode": "069640",
    "theme": "패션/의류",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1850,
    "itemName": "웨이브일렉트로",
    "itemCode": "095270",
    "theme": "5G(5세대 이동통신), 방위산업/전쟁 및 테러, 통신장비",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1851,
    "itemName": "성우전자",
    "itemCode": "081580",
    "theme": "스마트폰, 전자파, 카메라모듈/부품, 핀테크(FinTech)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1852,
    "itemName": "원림",
    "itemCode": "005820",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1853,
    "itemName": "CS",
    "itemCode": "065770",
    "theme": "스마트그리드(지능형전력망), 스마트홈(홈네트워크), 정치/인맥(이재명), 제4이동통신, 통신장비",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1854,
    "itemName": "이루온",
    "itemCode": "065440",
    "theme": "5G(5세대 이동통신), 모바일솔루션(스마트폰), 삼성페이, SNS(소셜네트워크서비스)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1855,
    "itemName": "와이오엠",
    "itemCode": "066430",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1856,
    "itemName": "마이크로컨텍솔",
    "itemCode": "098120",
    "theme": "반도체 재료/부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1857,
    "itemName": "원일특강",
    "itemCode": "012620",
    "theme": "철강 중소형",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1858,
    "itemName": "애니플러스",
    "itemCode": "310200",
    "theme": "미디어(방송/신문), 영상콘텐츠",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1859,
    "itemName": "SGA",
    "itemCode": "049470",
    "theme": "가상화폐(비트코인 등), 교육/온라인 교육, 보안주(정보), 사물인터넷, 클라우드 컴퓨팅, SI(시스템통합)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1860,
    "itemName": "피앤씨테크",
    "itemCode": "237750",
    "theme": "스마트그리드(지능형전력망), 전력설비, 철도",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1861,
    "itemName": "프럼파스트",
    "itemCode": "035200",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1862,
    "itemName": "동일기연",
    "itemCode": "032960",
    "theme": "전자파",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1863,
    "itemName": "코스나인",
    "itemCode": "082660",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1864,
    "itemName": "다믈멀티미디어",
    "itemCode": "093640",
    "theme": "시스템반도체, 정치/인맥(안철수)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1865,
    "itemName": "팬스타엔터프라이즈",
    "itemCode": "054300",
    "theme": "쿠팡 관련주",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1866,
    "itemName": "인포마크",
    "itemCode": "175140",
    "theme": "5G(5세대 이동통신), 지능형로봇/인공지능(AI), 통신장비",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1867,
    "itemName": "영신금속",
    "itemCode": "007530",
    "theme": "자동차부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1868,
    "itemName": "파인디앤씨",
    "itemCode": "049120",
    "theme": "LCD 부품/소재",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1869,
    "itemName": "갤럭시아에스엠",
    "itemCode": "011420",
    "theme": "엔터테인먼트",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1870,
    "itemName": "네오오토",
    "itemCode": "212560",
    "theme": "자동차부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1871,
    "itemName": "PN풍년",
    "itemCode": "024940",
    "theme": "밥솥",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1872,
    "itemName": "세진티에스",
    "itemCode": "067770",
    "theme": "LCD 부품/소재",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1873,
    "itemName": "동원수산",
    "itemCode": "030720",
    "theme": "구제역/광우병 수혜, 수산",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1874,
    "itemName": "광진윈텍",
    "itemCode": "090150",
    "theme": "자동차부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1875,
    "itemName": "케이씨피드",
    "itemCode": "025880",
    "theme": "마켓컬리 관련주, 사료, 정치/인맥(안철수)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1876,
    "itemName": "캐리소프트",
    "itemCode": "317530",
    "theme": "교육/온라인 교육, 엔젤산업, 영상콘텐츠, 출산장려정책, 캐릭터상품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1877,
    "itemName": "뉴프렉스",
    "itemCode": "085670",
    "theme": "갤럭시 부품주, PCB(FPCB 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1878,
    "itemName": "한솔PNS",
    "itemCode": "010420",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1879,
    "itemName": "파커스",
    "itemCode": "065690",
    "theme": "LED",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1880,
    "itemName": "드래곤플라이",
    "itemCode": "030350",
    "theme": "가상현실(VR), 게임, 모바일게임(스마트폰), 증강현실(AR)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1881,
    "itemName": "대모",
    "itemCode": "317850",
    "theme": "건설기계",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1882,
    "itemName": "아우딘퓨쳐스",
    "itemCode": "227610",
    "theme": "화장품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1883,
    "itemName": "풍강",
    "itemCode": "093380",
    "theme": "자동차부품, 정치/인맥(유시민)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1884,
    "itemName": "이디티",
    "itemCode": "215090",
    "theme": "방위산업/전쟁 및 테러, 원자력발전, 항공기부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1885,
    "itemName": "삼화전자",
    "itemCode": "011230",
    "theme": "수소차(연료전지/부품/충전소 등), 전기차, 희귀금속(희토류 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1886,
    "itemName": "제이엠아이",
    "itemCode": "033050",
    "theme": "정치/인맥(이낙연), LED",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1887,
    "itemName": "디지캡",
    "itemCode": "197140",
    "theme": "보안주(정보)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1888,
    "itemName": "패션플랫폼",
    "itemCode": "225590",
    "theme": "패션/의류",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1889,
    "itemName": "빛샘전자",
    "itemCode": "072950",
    "theme": "철도, 통신장비, LED",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1890,
    "itemName": "릭스솔루션",
    "itemCode": "029480",
    "theme": "제4이동통신, NI(네트워크통합), SI(시스템통합)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1891,
    "itemName": "제닉",
    "itemCode": "123330",
    "theme": "화장품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1892,
    "itemName": "동일철강",
    "itemCode": "023790",
    "theme": "철강 중소형",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1893,
    "itemName": "에코마이스터",
    "itemCode": "064510",
    "theme": "철도, 폐기물처리, 희귀금속(희토류 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1894,
    "itemName": "해성옵틱스",
    "itemCode": "076610",
    "theme": "드론(Drone), 바이오인식(생체인식), 스마트폰, 카메라모듈/부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1895,
    "itemName": "성문전자",
    "itemCode": "014910",
    "theme": "수소차(연료전지/부품/충전소 등), 전기차, 정치/인맥(황교안)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1896,
    "itemName": "기산텔레콤",
    "itemCode": "035460",
    "theme": "5G(5세대 이동통신), 드론(Drone), 방위산업/전쟁 및 테러, 통신장비",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1897,
    "itemName": "엔피케이",
    "itemCode": "048830",
    "theme": "아스콘(아스팔트 콘크리트)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1898,
    "itemName": "케이피티유",
    "itemCode": "054410",
    "theme": "정치/인맥(문재인), 정치/인맥(정세균)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1899,
    "itemName": "나노",
    "itemCode": "187790",
    "theme": "황사/미세먼지",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1900,
    "itemName": "유앤아이",
    "itemCode": "056090",
    "theme": "의료기기",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1901,
    "itemName": "아이컴포넌트",
    "itemCode": "059100",
    "theme": "플렉서블 디스플레이, OLED(유기 발광 다이오드)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1902,
    "itemName": "한창산업",
    "itemCode": "079170",
    "theme": "정치/인맥(홍정욱)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1903,
    "itemName": "엠에프엠코리아",
    "itemCode": "323230",
    "theme": "패션/의류",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1904,
    "itemName": "서전기전",
    "itemCode": "189860",
    "theme": "스마트그리드(지능형전력망), 재난/안전(지진 등), 전력설비",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1905,
    "itemName": "윈하이텍",
    "itemCode": "192390",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1906,
    "itemName": "코아스",
    "itemCode": "071950",
    "theme": "DMZ 평화공원",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1907,
    "itemName": "TBH글로벌",
    "itemCode": "084870",
    "theme": "日제품 불매운동(수혜), 패션/의류",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1908,
    "itemName": "서울리거",
    "itemCode": "043710",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1909,
    "itemName": "삼일",
    "itemCode": "032280",
    "theme": "종합 물류",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1910,
    "itemName": "스타플렉스",
    "itemCode": "115570",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1911,
    "itemName": "에스에스알",
    "itemCode": "275630",
    "theme": "보안주(정보)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1912,
    "itemName": "텔레필드",
    "itemCode": "091440",
    "theme": "5G(5세대 이동통신), 사물인터넷, 스마트홈(홈네트워크), 통신장비",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1913,
    "itemName": "제이에스티나",
    "itemCode": "026040",
    "theme": "남북경협, 패션/의류",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1914,
    "itemName": "대동기어",
    "itemCode": "008830",
    "theme": "농업, 자동차부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1915,
    "itemName": "진양폴리",
    "itemCode": "010640",
    "theme": "정치/인맥(오세훈)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1916,
    "itemName": "에이치케이",
    "itemCode": "044780",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1917,
    "itemName": "쎄미시스코",
    "itemCode": "136510",
    "theme": "그래핀, 반도체 장비, 日 수출 규제(국산화 등), 전기차, LCD장비, OLED(유기 발광 다이오드)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1918,
    "itemName": "신화콘텍",
    "itemCode": "187270",
    "theme": "갤럭시 부품주",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1919,
    "itemName": "에스티오",
    "itemCode": "098660",
    "theme": "패션/의류",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1920,
    "itemName": "인터엠",
    "itemCode": "017250",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1921,
    "itemName": "금호전기",
    "itemCode": "001210",
    "theme": "LED",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1922,
    "itemName": "에이엔피",
    "itemCode": "015260",
    "theme": "PCB(FPCB 등)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1923,
    "itemName": "태원물산",
    "itemCode": "001420",
    "theme": "비료, 자동차부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1924,
    "itemName": "디엠티",
    "itemCode": "134580",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1925,
    "itemName": "한국정보공학",
    "itemCode": "039740",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1926,
    "itemName": "광진실업",
    "itemCode": "026910",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1927,
    "itemName": "소리바다",
    "itemCode": "053110",
    "theme": "가상현실(VR), 모바일콘텐츠(스마트폰/태블릿PC), 음원/음반",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1928,
    "itemName": "디자인",
    "itemCode": "227100",
    "theme": "마스크, 스마트폰",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1929,
    "itemName": "웹스",
    "itemCode": "196700",
    "theme": "4대강 복원, 자동차부품, DMZ 평화공원",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1930,
    "itemName": "육일씨엔에쓰",
    "itemCode": "191410",
    "theme": "스마트폰",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1931,
    "itemName": "엘디티",
    "itemCode": "096870",
    "theme": "스마트폰, LED, OLED(유기 발광 다이오드)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1932,
    "itemName": "세동",
    "itemCode": "053060",
    "theme": "정치/인맥(문재인)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1933,
    "itemName": "디젠스",
    "itemCode": "113810",
    "theme": "자동차부품",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1934,
    "itemName": "신화실업",
    "itemCode": "001770",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1935,
    "itemName": "동양에스텍",
    "itemCode": "060380",
    "theme": "남-북-러 가스관사업, 철강 중소형",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1936,
    "itemName": "THE MIDONG",
    "itemCode": "161570",
    "theme": "자율주행차, 차량용블랙박스",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1937,
    "itemName": "코리아에스이",
    "itemCode": "101670",
    "theme": "4대강 복원, 재난/안전(지진 등), DMZ 평화공원",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1938,
    "itemName": "디지아이",
    "itemCode": "043360",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1939,
    "itemName": "씨아이테크",
    "itemCode": "004920",
    "theme": "키오스크(KIOSK), DMZ 평화공원",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1940,
    "itemName": "동방선기",
    "itemCode": "099410",
    "theme": "조선기자재",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1941,
    "itemName": "한국주강",
    "itemCode": "025890",
    "theme": "공작기계, 북한 광물자원개발",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1942,
    "itemName": "KD",
    "itemCode": "044180",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1943,
    "itemName": "이미지스",
    "itemCode": "115610",
    "theme": "모바일솔루션(스마트폰), 스마트폰, 터치패널(스마트폰/태블릿PC)",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1944,
    "itemName": "프레스티지바이오파마",
    "itemCode": "950210",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1945,
    "itemName": "SNK",
    "itemCode": "950180",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1946,
    "itemName": "엑세스바이오",
    "itemCode": "950130",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1947,
    "itemName": "미투젠",
    "itemCode": "950190",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1948,
    "itemName": "SBI핀테크솔루션즈",
    "itemCode": "950110",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1949,
    "itemName": "JTC",
    "itemCode": "950170",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  },
  {
    "id": 1950,
    "itemName": "잉글우드랩",
    "itemCode": "950140",
    "theme": "",
    "createdAt": null,
    "lastUpdatedAt": null
  }
];

export {
  stockItems,
};
// i18next 설정 및 초기화
document.addEventListener("DOMContentLoaded", function () {
  // i18next 초기화
  i18next.use(i18nextBrowserLanguageDetector).init(
    {
      debug: true,
      fallbackLng: "ko",
      lng: "ko",
      resources: {
        ko: {
          translation: {
            "header.title": "GS Caltex. APEC 2025",
            "main.title": "Energy for Sustainable Life",
            "main.description":
              "GS칼텍스는 대한민국 최초 민간 정유사로 출발해 앞선 기술과 차별화된 품질로 전 세계 50개국에 정유, 석유화학, 윤활유 등의 제품을 수출하고 있습니다. 또한 미래 환경 변화에 대응하기 위해 디지털 및 AI 기술을 적극적으로 적용하고 저탄소 신사업을 강화하며 지속가능한 미래를 위한 여정을 이어가고 있습니다.",

            "deepTransformation.title": "Deep Transformation Journey",
            "deepTransformation.description":
              "Deep Transformation Journey는 급변하는 경영환경에서 미래 성장 동력을 확보하고 지속가능한 성장을 실현하기 위해, 기존의 변화 노력과 부분적 혁신을 넘어서는 근원적이고 전사적인 혁신을 의미합니다.",
            "deepTransformation.bx.title":
              "Value Chain 전반의 일하는 방식 변화",
            "deepTransformation.bx.description":
              "정유, 석유화학, 윤활유 등 기존 사업의 Value Chain 전반에서 체질을 근본적으로 개선하고 수익성을 강화하고 있습니다. 또한, 이를 달성하기 위해 일하는 방식의 변화를 통해 지속가능한 혁신을 실현해 나가고 있습니다.",
            "deepTransformation.gx.title":
              "기존 사업 탄소 감축 및 저탄소 신사업 확대",
            "deepTransformation.gx.description":
              "에너지 산업의 패러다임 전환에 선제적으로 대응하기 위해, 수소/CCUS 사업, 플라스틱 리사이클링(MR/CR), 무탄소 스팀, 바이오연료 등 저탄소 신사업을 확장하고 있습니다. 이를 통해 지속가능한 성장을 위한 사업 포트폴리오를 구축하고 있습니다.",
            "deepTransformation.dax.title":
              "디지털을 넘어, AI 전환으로의 혁신 여정",
            "deepTransformation.dax.description":
              "AI와 디지털 기술을 핵심 경쟁력으로 삼아 데이터 기반의 의사결정 체계를 고도화하고 있습니다. 공정 전반에 AI를 적용하여 공정 최적화 및 안전 혁신 등을 이루고, 다양한 디지털 툴을 활용해 AI 중심의 지능형 조직으로 도약하고 있습니다.",

            "videos.deepJourney": "Deep Transformation Journey",
            "videos.futurePlus.title": "Future Plus",
            "videos.futurePlus.description":
              "고객 경험 혁신을 위한 새로운 시도<br />GS칼텍스의 미래형 주유소 프로토타입",
            "videos.futurePlus.content":
              "GS칼텍스는 기존의 획일화된 주유소 형태와 서비스에서 벗어나 고객에게 더 큰 만족을 선사할 수 있는 기회를 모색하고 있습니다. 지속적으로 Robot, AI 등 미래 기술 동향을 모니터링 하고 있으며, 이를 주유소 환경에 접목, 개선하기 위한 아이디어를 발굴하고 있습니다. 미래 아이디어는 가상의 공간인 Future Plus에 구현, 현실화 요소는 Energy Plus Hub 에 선제적으로 도입하게 되며, 검증을 거쳐 점차 GS칼텍스의 전체 네트워크로 확산될 것입니다. Future Plus는 차별화된 고객 경험 제공을 위해 GS칼텍스가 제안하는 미래형 주유소 프로토타입이며, 새 시대를 이끌어 가고자 하는 의지의 표상입니다.",
            "videos.dax.title": "DAX",
            "videos.dax.description":
              "지속 가능한 내일을 위한 혁신<br />GS칼텍스의 디지털·AI 전환",
            "videos.dax.content":
              "변화하는 글로벌 에너지 시장 속에서 GS칼텍스는 디지털 전환(Digital Transformation)과 AI 전환(AI Transformation)을 결합한 'DAX'를 통해 새로운 혁신의 길을 열어가고 있습니다. 2019년부터 이어온 체계적인 디지털 전환을 기반으로 데이터 중심의 협업 문화를 구축하고, AI 기술을 통해 현장의 문제를 스스로 해결하는 차별화된 경쟁력을 키워왔습니다. DAX는 GS칼텍스가 지속 가능한 에너지와 지속 가능한 내일을 만들어가는 핵심 동력입니다.",
            "videos.energyForLife.title": "Energy for Sustainable Life",
            "videos.energyForLife.description": "GS칼텍스 Legacy & New Energy",
            "videos.energyForLife.content":
              "1967년 대한민국 최초의 민간 정유사로 출범한 GS칼텍스는 정유에서 석유화학, 윤활유, 저탄소 신사업으로 확장하며 종합에너지기업으로 성장했습니다. 지속적인 기술 혁신과 투자를 통해 에너지 수급 안정에 기여하고, 청정수소, CCUS, 바이오 전환, 폐플라스틱 재활용 등 지속가능한 내일을 위한 에너지의 새로운 가능성을 열어가고 있습니다.",

            "gallery.title": "Gallery of GS Caltex",
            "gallery.item1": "GS타워",
            "gallery.item2": "여수 제2공장 정경",
            "gallery.item3": "미래형 주유소",
            "gallery.item4": "VR-AR 안전교육",
            "gallery.item5": "여수공장 전경",
            "gallery.item6": "내곡 스마트 MFC",
            "gallery.item7": "직접액체냉각유",
            "gallery.item8": "바이오선박유 공급",
            "gallery.item9": "GS칼텍스 예울마루",
            "gallery.item10": "에너지플러스허브 달맞이",
            "gallery.item11": "에너지플러스 서울로",
            "gallery.item12": "에너지플러스",
            "gallery.item13": "VR 안전점검 시뮬레이터",
            "gallery.item14": "드론 설비점검",
            "gallery.item15": "AI활용 에너지 절감 설비",

            "award.title": "Award",
            "award.item1": "한국에서 가장 존경받는 기업조사 뉴에너지 부문 1위",
            "award.item2":
              "국가고객만족도 17년 연속 주유소 부문 1위(2009~2025)",
            "award.item3": "에너지플러스앱 글로벌 디자인 어워드 6관왕 수상",
            "award.item4": "산업통산자원부 AI 자율제조 부문 표창",
            "award.item5": "메세나대상, 대통령 표창",

            "merchandise.title": "CCUS Kit",
            "merchandise.item1":
              "한국에서 가장 존경받는 기업조사 뉴에너지 부문 1위",
            "merchandise.item2":
              "국가고객만족도 17년 연속 주유소 부문 1위(2009~2025)",
            "merchandise.item3":
              "에너지플러스앱 글로벌 디자인 어워드 6관왕 수상",
            "merchandise.item4": "산업통산자원부 AI 자율제조 부문 표창",
            "merchandise.item5": "메세나대상, 대통령 표창",

            "history.title": "History",
            "history.item1": "미국 칼텍스사와합작투자계약 체결",
            "history.item2": "호남정유주식회사 설립 등기",
            "history.item3":
              "제1원유정제시설 가동 (No.2 1972, No.3 1981, No.4 1996)",
            "history.item4": "인천 윤활유공장 준공",
            "history.item5": "2억불 수출의 탑 수상 (정유업계 최초)",
            "history.item6": "석유화학(PP) 공장 가동",
            "history.item7":
              "제1파라자일렌 공장 가동 (No.2 PX 1995, No.3 PX 2003) 제1방향족 공장 가동 (No.2 BTX 2000)",
            "history.item8":
              "제1중질유분해시설가동 (No.2 2007, No.3 2011, No.4 2013)",
            "history.item9": "'LG칼텍스정유'로 사명 변경",
            "history.item10": "'GS칼텍스'로 사명 변경",
            "history.item11": "250억불 수출의 탑 수상 (국내 두번째)",
            "history.item12": "비전 선포 'Value No.1 Energy&Chemical Partner'",
            "history.item13": "GS칼텍스 창립 50주년",
            "history.item14": "'Deep Transformation' 실행 원년 선포",
            "history.item15": "MFC(올레핀 생산시설) 가동",
            "history.item16": "제59회 무역의 날 은탑산업훈장 수상",
            "history.item17": "바이오 선박유 첫 시범 운항 개시",
            "history.item18":
              "바이오 항공유 상업 수출 개시 및 CORSIA 인증 획득",
            "history.item19": "사내 생성형 AI 통합 플랫폼 'AIU' 도입",
          },
        },
        en: {
          translation: {
            "header.title": "GS Caltex. APEC 2025",
            "main.title": "Energy for Sustainable Life",
            "main.description":
              "Established as Korea’s first private oil company, GS Caltex now exports petroleum, petrochemicals, lubricants, and other products to 50 countries based on our advanced technology and differentiated quality. To meet the challenges of a changing environment, we are proactively adopting digital and AI technologies and developing new lower-carbon businesses as we continue our journey toward a sustainable future.",

            "deepTransformation.title": "Deep Transformation Journey",
            "deepTransformation.description":
              "Deep Transformation Journey is a fundamental, companywide transformation that moves beyond prior efforts and partial innovations to secure future growth engines and achieve sustainable growth in a rapidly changing business environment.",
            "deepTransformation.bx.title":
              "Transforming the Way We Work Across the Value Chain",
            "deepTransformation.bx.description":
              "Across the full value chain of our core businesses — petroleum, petrochemicals, and lubricants — GS Caltex is strengthening its fundamentals and profitability by transforming the way we work to drive sustainable innovation.",
            "deepTransformation.gx.title":
              "Reducing Carbon in Existing Businesses and Developing New Lower-Carbon Businesses",
            "deepTransformation.gx.description":
              "To stay ahead of the paradigm shift in the energy industry, GS Caltex is expanding new lower-carbon businesses such as hydrogen and CCUS, plastic recycling (MR/CR), carbon-free steam, and biofuels. Through these initiatives, we are building business portfolio for sustainable growth.",
            "deepTransformation.dax.title":
              "A Journey of Innovation Beyond Digital, Toward AI",
            "deepTransformation.dax.description":
              "By making AI and digital technologies our core competitive strengths, GS Caltex is enhancing data-based decision-making systems. We are applying AI across our operations to optimize processes and enable safety innovation, while leveraging digital tools to evolve into an AI-centered intelligent organization.",

            "videos.deepJourney": "Deep Transformation Journey",
            "videos.futurePlus.title": "Future Plus",
            "videos.futurePlus.description":
              "Pioneering Customer Experience Innovation<br />The GS Caltex Prototype for the Fueling Station of the Future",
            "videos.futurePlus.content":
              "GS Caltex is moving beyond conventional fuel station models and services to explore new opportunities for greater customer satisfaction.We monitor emerging technologies such as robotics and AI to develop ideas that can be applied to enhance fueling stations. Future concepts are first modeled in the virtual Future Plus space, and viable ideas are then introduced to Energy Plus Hub. Elements ready for real-world application are implemented there, and once validated, they will gradually expand across the GS Caltex network. Future Plus is GS Caltex’s prototype for next-generation fueling stations, designed to deliver a differentiated customer experience and to represent our commitment to leading a new era.",
            "videos.dax.title": "DAX",
            "videos.dax.description":
              "Innovation for a Sustainable Tomorrow<br />GS Caltex’s Digital and AI Transformation",
            "videos.dax.content":
              "In a rapidly changing global energy market, GS Caltex is leading with DAX, combining Digital Transformation and AI Transformation to open a new path of innovation. Since 2019, we have built on the foundation of systematic Digital Transformation to establish a data-centered culture of collaboration and use AI to solve on-site challenges independently, developing a distinct competitive edge. DAX is the driving force of GS Caltex’s journey toward sustainable energy and a better tomorrow.",
            "videos.energyForLife.title": "Energy for Sustainable Life",
            "videos.energyForLife.description":
              "GS Caltex — Legacy & New Energy",
            "videos.energyForLife.content":
              "Founded in 1967 as Korea’s first private oil company, GS Caltex has grown into a total energy company, expanding from refining into petrochemicals, lubricants, and new lower-carbon businesses. Through continuous technological innovation and investment, we contribute to energy supply stability and open new possibilities in energy, including hydrogen, CCUS, bio transition, and waste plastic recycling, for a sustainable tomorrow.",

            "gallery.title": "Gallery of GS Caltex",
            "gallery.item1": "GS Tower",
            "gallery.item2": "View of Yeosu Plant No. 2",
            "gallery.item3": "Fueling Station of the Future",
            "gallery.item4": "VR/AR Safety Training",
            "gallery.item5": "Yeosu Complex",
            "gallery.item6": "Naegok Smart MFC",
            "gallery.item7": "Direct Liquid Cooling Fluid",
            "gallery.item8": "Bio Marine Fuel Supply",
            "gallery.item9": "GS Caltex Yeulmaru",
            "gallery.item10": "Energy Plus Hub, Dalmaji",
            "gallery.item11": "Energy Plus, Seoullo",
            "gallery.item12": "Energy Plus",
            "gallery.item13": "VR Safety Inspection Simulator",
            "gallery.item14": "Drone-Based Facility Inspection",
            "gallery.item15": "AI-Based Heat Energy Reduction System",

            "award.title": "Award",
            "award.item1":
              "No. 1 in the New Energy sector of Korea’s Most Respected Companies survey",
            "award.item2":
              "No. 1 in the National Customer Satisfaction Index (NCSI), Gas Station category for 17 consecutive years (2009–2025)",
            "award.item3": "Six global design awards for the Energy Plus App",
            "award.item4":
              "Commendation from the Ministry of Trade, Industry and Energy in the AI Autonomous Manufacturing category",
            "award.item5": "Mecenat Award, Presidential Commendation",

            "merchandise.title": "CCUS Kit",
            "merchandise.item1":
              "No. 1 in the New Energy sector of Korea’s Most Respected Companies survey",
            "merchandise.item2":
              "No. 1 in the National Customer Satisfaction Index (NCSI), Gas Station category for 17 consecutive years (2009–2025)",
            "merchandise.item3":
              "Six global design awards for the Energy Plus App",
            "merchandise.item4":
              "Commendation from the Ministry of Trade, Industry and Energy in the AI Autonomous Manufacturing category",
            "merchandise.item5": "Mecenat Award, Presidential Commendation",

            "history.title": "History",
            "history.item1":
              "Signing of joint venture agreement with Caltex Petroleum Corp.",
            "history.item2": "Honam Oil Refinery is incorporated",
            "history.item3":
              "Completion of No. 1 CDU at Yeosu Refinery (No. 2 1972, No. 3 1981, No. 4 1996)",
            "history.item4": "Completion of Incheon lubricant plant",
            "history.item5":
              "USD 200 Million Export Tower Award (first in the refining industry)",
            "history.item6": "Completion of PP (polypropylene) plant",
            "history.item7":
              "Completion of Plant No. 1 PX (Paraxylene) (No. 2 PX 1995, No. 3 PX 2003) Completion of Plant No. 1 BTX (Benzene, Toluene, Xylene) (No. 2 BTX 2000)",
            "history.item8":
              "Completion of No. 1 HOU (RFCC) unit (No. 2 2007, No. 3 2011, No. 4 2013)",
            "history.item9": "Company renamed LG-Caltex Oil Corp.",
            "history.item10": "Company renamed GS Caltex Corp.",
            "history.item11":
              "USD 25 Billion Export Tower Award (2nd in Korea)",
            "history.item12":
              "Declaration of vision: Value No. 1 Energy & Chemical Partner",
            "history.item13": "50th anniversary of GS Caltex",
            "history.item14":
              "Declaration of first year of Deep Transformation",
            "history.item15":
              "Completion of the MFC (Mixed Feed Cracker for olefin production)",
            "history.item16":
              "Silver Tower Order of Industrial Service Merit on the 59th Trade Day",
            "history.item17": "First pilot voyage powered by bio marine fuel",
            "history.item18":
              "Commercial export of sustainable aviation fuel and CORSIA certification",
            "history.item19": "Launch of companywide AI platform 'AIU'",
          },
        },
      },
    },
    function (err, t) {
      if (err) {
        console.error("i18next 초기화 실패:", err);
        return;
      }

      // 초기 텍스트 업데이트
      updatePageText();

      // 언어 전환 버튼 이벤트 리스너 추가
      setupLanguageButtons();
    }
  );
});

// 페이지 텍스트 업데이트 함수
function updatePageText() {
  // data-i18n 속성이 있는 모든 요소를 찾아서 텍스트 업데이트
  document.querySelectorAll("[data-i18n]").forEach(function (element) {
    const key = element.getAttribute("data-i18n");
    const text = i18next.t(key);
    element.innerHTML = text;
  });
}

// 언어 전환 버튼 설정
function setupLanguageButtons() {
  const krButton = document.querySelector('nav a[href="#"]:first-child');
  const enButton = document.querySelector('nav a[href="#"]:last-child');

  if (krButton) {
    krButton.addEventListener("click", function (e) {
      e.preventDefault();
      changeLanguage("ko");
    });
  }

  if (enButton) {
    enButton.addEventListener("click", function (e) {
      e.preventDefault();
      changeLanguage("en");
    });
  }
}

// 언어 변경 함수
function changeLanguage(lng) {
  i18next.changeLanguage(lng, function (err, t) {
    if (err) {
      console.error("언어 변경 실패:", err);
      return;
    }
    updatePageText();

    // 언어 변경 이벤트 발생
    document.dispatchEvent(
      new CustomEvent("languageChanged", {
        detail: { language: lng },
      })
    );
  });
}

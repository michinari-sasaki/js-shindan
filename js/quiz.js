(() => {
  const $modalQuestion = document.getElementById('modal__question');
  const $modalResult = document.getElementById('modal__result');
  const $questionNumber = document.getElementById('modal__question__number');
  const $questionTitle = document.getElementById('modal__question__title');

  const quiz = [
    {
      question: '何かを決める時のあなたは',
      answers: [
        '優柔不断だ',
        '慎重に決める方だ',
        '直感で決める方だ',
      ],
      score: [
        1,
        2,
        3,
      ]
    },
    {
      question: '分かれ道に立ったあなたは',
      answers: [
        '引き返す',
        '左に進む',
        '右に進む',
      ],
      score: [
        1,
        2,
        3,
      ]
    },
    {
      question: 'ジャンケン ポン！</br>あなたの手は？',
      answers: [
        'チョキ',
        'パー',
        'グー',
      ],
      score: [
        1,
        2,
        3,
      ]
    },
    {
      question: '100%勝てなそうな強敵に遭遇</br>あなたはどうする',
      answers: [
        '逃げる',
        '敵に寝返る',
        '闘う',
      ],
      score: [
        1,
        2,
        3,
      ]
    },
    {
      question: '最近のうんちの調子はどう？',
      answers: [
        '便秘気味',
        '下痢気味',
        '毎日快便',
      ],
      score: [
        1,
        2,
        3,
      ]
    },
    {
      question: 'もしも願いが叶うなら',
      answers: [
        '世界平和',
        '世界征服',
        '急激な成長',
      ],
      score: [
        1,
        2,
        3,
      ]
    },
    {
      question: 'もし道に財布が落ちていたら',
      answers: [
        '無視する',
        '自分の物にする',
        '警察に届ける',
      ],
      score: [
        1,
        2,
        3,
      ]
    },
    {
      question: 'あなたはどちらかというと',
      answers: [
        '温厚なタイプ',
        '冷静なタイプ',
        '熱血なタイプ',
      ],
      score: [
        1,
        2,
        3,
      ]
    },
    {
      question: 'あなたの大事なものはどれかというと',
      answers: [
        '仕事',
        '趣味',
        '夢',
      ],
      score: [
        1,
        2,
        3,
      ]
    },
    {
      question: '自分に能力があったら</br>どう使う？',
      answers: [
        'テストのカンニングに使う',
        '嫌いな奴をバレずにパンチする',
        'とりあえず悪を倒してみる',
      ],
      score: [
        1,
        2,
        3,
      ]
    },
  ];

  const $characterTmb = document.getElementById('characterTmb');
  const $characterName = document.getElementById('characterName');
  const $characterExplain = document.getElementById('characterExplain');

  const result = [
    {
      characterTmb: 'img/result-tmb-01.png',
      characterName: 'ゴン',
      characterExplain:　'このキャラクターと診断されたあなたは<br />まっすぐな心の持ち主で、<br />誰からも好かれるような性格。<br />物語の主人公タイプです。',
    },
    {
      characterTmb: 'img/result-tmb-04.png',
      characterName: 'ウヴォーギン',
      characterExplain:　'このキャラクターと診断されたあなたは<br />猪突猛進の性格で脳筋の戦闘狂です。拷問を受けても揺るがない不動の精神力を持つパワーファイターです。',
    },
    {
      characterTmb: 'img/result-tmb-02.png',
      characterName: 'レオリオ',
      characterExplain:　'このキャラクターと診断されたあなたは<br />熱くて仲間思いな<br />理屈よりも自分の感情優先で動くタイプです。',
    },
    {
      characterTmb: 'img/result-tmb-08.png',
      characterName: 'ネテロ',
      characterExplain:　'このキャラクターと診断されたあなたは<br />人を食ったような性格をしており、不思議な魅力を持つ一方で、一日一万回正拳突きの修行も行うほどの努力家タイプです。',
    },
    {
      characterTmb: 'img/result-tmb-05.png',
      characterName: 'ノブナガ',
      characterExplain: 'このキャラクターと診断されたあなたは<br />冷たそうに見えて内心は情に脆いタイプです。、また自分の信念にまっすぐでどんな人にも突っかかるので揉め事も多いタイプです。',
    },
    {
      characterTmb: 'img/result-tmb-07.png',
      characterName: 'キルア',
      characterExplain:　'このキャラクターと診断されたあなたは<br />冷静、残忍で合理的な思考を持つ<br />暗殺が得意なエリートタイプタイプです。',
    },
    {
      characterTmb: 'img/result-tmb-03.png',
      characterName: 'クラピカ',
      characterExplain:　'このキャラクターと診断されたあなたは<br />冷静沈着で幅広い知識をもちながらも、心の中に情熱を持ち続けるタイプです。',
    },
    {
      characterTmb: 'img/result-tmb-06.png',
      characterName: '団長',
      characterExplain:　'このキャラクターと診断されたあなたは<br />冷徹で博識。読書好き。自らの死もいとわない反面、仲間を想う気持ちも強く持っており<br />カリスマタイプです。',
    },
    {
      characterTmb: 'img/result-tmb-09.png',
      characterName: 'メルエム',
      characterExplain:　'このキャラクターと診断されたあなたは<br />誰も手が付けられないほどに荒い性格をしており、人間を殺害しても感情は何も動きません。<br />悪役のリーダータイプです。',
    },
    {
      characterTmb: 'img/result-tmb-10.png',
      characterName: 'ヒソカ',
      characterExplain:　'このキャラクターと診断されたあなたは<br />変態殺人者という以外、どうにも掴みどころのない性格です。<br />サイコパスタイプです。',
    },
  ]

  const $button = document.getElementsByTagName('button');

  //関数　クイズを設定する　タイトルと回答を生成
  const handleQuiz = (quizCount) => {
    let answersIndex = 0;
    const answerLength = quiz[quizCount].answers.length;
    $questionNumber.textContent = (quizCount+1 + '/' + 10);
    $questionTitle.innerHTML = (quiz[quizCount].question);
    while (answersIndex < answerLength) {
      $button[answersIndex].textContent = (quiz[quizCount].answers[answersIndex]);
      answersIndex++;
    }
  }
  handleQuiz(0);

  const yourCharacter = () => {
    if (score <= 10) {
      $characterTmb.src = result[9].characterTmb;
      $characterName.textContent = result[9].characterName;
      $characterExplain.innerHTML = result[9].characterExplain;
    }
    else if (score <= 14) {
      $characterTmb.src = result[8].characterTmb;
      $characterName.textContent = result[8].characterName;
      $characterExplain.innerHTML = result[8].characterExplain;
    }
    else if (score <= 16) {
      $characterTmb.src = result[7].characterTmb;
      $characterName.textContent = result[7].characterName;
      $characterExplain.innerHTML = result[7].characterExplain;
    }
    else if (score <= 18) {
      $characterTmb.src = result[6].characterTmb;
      $characterName.textContent = result[6].characterName;
      $characterExplain.innerHTML = result[6].characterExplain;
    }
    else if (score <= 20) {
      $characterTmb.src = result[5].characterTmb;
      $characterName.textContent = result[5].characterName;
      $characterExplain.innerHTML = result[5].characterExplain;
    }
    else if (score <= 22) {
      $characterTmb.src = result[4].characterTmb;
      $characterName.textContent = result[4].characterName;
      $characterExplain.innerHTML = result[4].characterExplain;
    }
    else if (score <= 24) {
      $characterTmb.src = result[3].characterTmb;
      $characterName.textContent = result[3].characterName;
      $characterExplain.innerHTML = result[3].characterExplain;
    }
    else if (score <= 26) {
      $characterTmb.src = result[2].characterTmb;
      $characterName.textContent = result[2].characterName;
      $characterExplain.innerHTML = result[2].characterExplain;
    }
    else if (score <= 28) {
      $characterTmb.src = result[1].characterTmb;
      $characterName.textContent = result[1].characterName;
      $characterExplain.innerHTML = result[1].characterExplain;
    }
    else if (score <= 30) {
      $characterTmb.src = result[0].characterTmb;
      $characterName.textContent = result[0].characterName;
      $characterExplain.innerHTML = result[0].characterExplain;
    }
    $modalQuestion.classList.add('inactive');
    $modalResult.classList.add('active');
  }

  const quizLength = quiz.length;
  let quizIndex = 0;

  // const buttonLength = $button.length;
  // let buttonIndex = 0;
  let score = 0;

  //ボタンがくりっくされたら
  $button[0].addEventListener('click', () => {
      score += quiz[quizIndex].score[0];
      quizIndex++;
    if (quizIndex < quizLength) {
      //クイズがまだあれば生成する
      handleQuiz(quizIndex);
    } else {
      yourCharacter();
    }
  })

  $button[1].addEventListener('click', () => {
      score += quiz[quizIndex].score[1];
      quizIndex++;
      if (quizIndex < quizLength) {
         //クイズがまだあれば生成する
         handleQuiz(quizIndex);
      } else {
        yourCharacter();
      }
    })

  $button[2].addEventListener('click', () => {
      score += quiz[quizIndex].score[2];
      quizIndex++;
      if (quizIndex < quizLength) {
         //クイズがまだあれば生成する
         handleQuiz(quizIndex);
      } else {
        yourCharacter();
      }
    })
})();

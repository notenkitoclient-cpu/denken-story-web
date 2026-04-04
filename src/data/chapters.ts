import type { Chapter } from '../types';

export const chapters: Chapter[] = [
  {
    id: 1,
    title: '直流機を学ぶ',
    sections: [
      {
        id: '1-1',
        title: '直流機の誘導起電力を求めよう',
        messages: [
          { speaker: 'hiro', text: 'マスター、直流機の仕組みはわかりましたけど、実際にどのくらいの電気が発生するか計算しなきゃいけないんですよね？' },
          { speaker: 'master', text: 'その通り！機械科目には数式がつきものだ。でも安心してくれ。直流機の誘導起電力の公式 E = (pZ / 60a) * ΦN は基本中の基本だぞ。' },
          { speaker: 'hiro', text: 'わっ、またアルファベットがいっぱい…。' },
          { speaker: 'master', text: 'ははは、分解して考えれば簡単だ。pは極数、Zは導体数、Φ（ファイ）は磁束、Nは回転速度だ。aは並列回路数といって、巻き方で決まる数字だな。' },
          { speaker: 'hiro', text: '「60倍のあ（a）の上に、ピザ（pZ）ファイ（Φ）エヌ（N）」…無理やりですけど、こう覚えればいいですか？' },
          { speaker: 'master', text: 'いい語呂合わせだ！まずはその公式に慣れるところから始めようか。' }
        ]
      },
      {
        id: '1-2',
        title: '電機子反作用とはどのようなものか',
        messages: [
          { speaker: 'hiro', text: '電機子反作用…？なんだか難しそうな名前が出てきましたね。' },
          { speaker: 'master', text: 'これは「電気が流れることで、本来の磁力を邪魔しちゃう現象」のことなんだ。' },
          { speaker: 'hiro', text: 'えっ、自分で自分の首を締めてるってことですか？' },
          { speaker: 'master', text: 'まさに！電機子に電流が流れると自分でも磁界を作っちゃって、主極の磁界を歪めたり弱めたりするんだ。これを解決するために「補極」や「補償巻線」という助っ人が必要なんだぞ。' }
        ]
      },
      { id: '1-3', title: '直流発電機の特性を覚えよう', messages: [] },
      { id: '1-4', title: '直流電動機の速度とトルク特性を覚えよう', messages: [] },
      { id: '1-ex', title: '練習問題', messages: [] }
    ]
  },
  {
    id: 2,
    title: '同期機を学ぶ',
    sections: [
      { id: '2-1', title: '同期機と同期速度と誘導起電力の公式を覚えよう', messages: [] },
      { id: '2-2', title: '電機子反作用と同期インピーダンスをマスターしよう', messages: [] },
      { id: '2-3', title: '同期機の短絡比と出力の公式を覚えよう', messages: [] },
      { id: '2-4', title: '同期発電機の並行運転条件を確かめよう', messages: [] },
      { id: '2-5', title: '同期電動機の始動法にはどのようなものがあるか', messages: [] },
      { id: '2-ex', title: '練習問題', messages: [] }
    ]
  },
  {
      id: 3,
      title: '誘導機を学ぶ',
      sections: [
          { id: '3-1', title: '誘導機はどのように回転するのか', messages: [] },
          { id: '3-2', title: '三相誘導電動機の円線図，トルクおよび比例推移を覚えよう', messages: [] },
          { id: '3-3', title: '誘導機の始動法と速度制御', messages: [] },
          { id: '3-4', title: '特殊かご形･単相誘導電動機とはどのような電動機か', messages: [] },
          { id: '3-ex', title: '練習問題', messages: [] }
      ]
  },
  {
      id: 4,
      title: '変圧器を学ぶ',
      sections: [
          { id: '4-1', title: '変圧器の誘導起電力と等価回路を覚えよう', messages: [] },
          { id: '4-2', title: 'パーセント表示と電圧変動率の関係を理解しよう', messages: [] },
          { id: '4-3', title: '最高効率はどのような条件のときか', messages: [] },
          { id: '4-4', title: '並行運転の条件といろいろな結線方法の特徴を理解しよう', messages: [] },
          { id: '4-5', title: '単巻変圧器の自己容量とV結線の利用率の求め方', messages: [] },
          { id: '4-6', title: '変圧器保護および関連静止器', messages: [] },
          { id: '4-ex', title: '練習問題', messages: [] }
      ]
  },
  {
      id: 5,
      title: 'パワーエレクトロニクスを学ぶ',
      sections: [
          { id: '5-1', title: '電力用半導体素子にはどのようなものがあるか', messages: [] },
          { id: '5-2', title: 'いろいろな整流回路の直流平均値公式を暗記しよう', messages: [] },
          { id: '5-3', title: 'インバータ回路，チョッパ回路とはどのような回路か', messages: [] },
          { id: '5-ex', title: '練習問題', messages: [] }
      ]
  },
  {
      id: 6,
      title: '電動機応用を学ぶ',
      sections: [
          { id: '6-1', title: '慣性モーメントとはずみ車効果との違い', messages: [] },
          { id: '6-2', title: '揚水ポンプ，送風機などの所要動力計算をマスターしよう', messages: [] },
          { id: '6-3', title: '電動機の種類とその負荷特性を調べてみよう', messages: [] },
          { id: '6-4', title: '電車の出力計算と速度制御について理解しよう', messages: [] },
          { id: '6-ex', title: '練習問題', messages: [] }
      ]
  },
  {
      id: 7,
      title: '照明を学ぶ',
      sections: [
          { id: '7-1', title: '可視光線と黒体の熱放射を学ぼう', messages: [] },
          { id: '7-2', title: '照明用LED，水銀ランプなどの特徴を覚えよう', messages: [] },
          { id: '7-3', title: '立体角，光速発散度などの照明の用語と単位を覚えよう', messages: [] },
          { id: '7-4', title: '照明計算の基本パターンを覚えよう', messages: [] },
          { id: '7-5', title: '道路照明の計算を理解しよう', messages: [] },
          { id: '7-ex', title: '練習問題', messages: [] }
      ]
  },
  {
      id: 8,
      title: '電熱と電気加工を学ぶ',
      sections: [
          { id: '8-1', title: '熱回路と電気回路の相似について理解しよう', messages: [] },
          { id: '8-2', title: '電熱線と換気による冷却の計算テクニックを覚えよう', messages: [] },
          { id: '8-3', title: '電気加熱の方法と原理を覚えよう', messages: [] },
          { id: '8-4', title: 'ヒートポンプの原理を覚えよう', messages: [] },
          { id: '8-5', title: '発熱体の使用区分温度と放射温度などの測定範囲をマスターしよう', messages: [] },
          { id: '8-ex', title: '練習問題', messages: [] }
      ]
  },
  {
      id: 9,
      title: '電気化学を学ぶ',
      sections: [
          { id: '9-1', title: '電気化学におけるファラデーの法則を理解しよう', messages: [] },
          { id: '9-2', title: '水電解，食塩電解，溶融塩電解，酸化・還元反応とは何か', messages: [] },
          { id: '9-3', title: '一次電池と二次電池の違いは何か', messages: [] },
          { id: '9-4', title: '電気浸透，電気泳動，電気透析を図から学ぼう', messages: [] },
          { id: '9-ex', title: '練習問題', messages: [] }
      ]
  },
  {
      id: 10,
      title: '自動制御を学ぶ',
      sections: [
          { id: '10-1', title: '自動制御とはどのようなものか', messages: [] },
          { id: '10-2', title: 'フィードバック制御系の基本構成', messages: [] },
          { id: '10-3', title: '伝達関数とブロック線図', messages: [] },
          { id: '10-4', title: '周波数応答', messages: [] },
          { id: '10-ex', title: '練習問題', messages: [] }
      ]
  },
  {
      id: 11,
      title: '電子計算機を学ぶ',
      sections: [
          { id: '11-1', title: '2進数・10進数・16進数はどのように表すか', messages: [] },
          { id: '11-2', title: '論理回路', messages: [] },
          { id: '11-3', title: 'フリップフロップ', messages: [] },
          { id: '11-4', title: '計算機システムの基本をマスターしよう', messages: [] },
          { id: '11-5', title: 'ソフトウェア', messages: [] },
          { id: '11-ex', title: '練習問題', messages: [] }
      ]
  }
];

import type { Chapter } from '../../types';

export const chapter6: Chapter = {
  id: 6,
  title: '第6の事件：止まらないコマ（電動機応用）',
  sections: [
    {
      id: '6-1',
      title: '重たいコマは止まれない（慣性モーメント）',
      items: [
        { type: 'narration', text: '巨大なエレベーターの制御室。ヒロがふと、モーターの軸に付けられた分厚い鉄の円盤を指さした。' },
        { type: 'chat', speaker: 'hiro', text: 'マスター、あの円盤なんですか？重りですか？' },
        { type: 'chat', speaker: 'master', text: 'それは「はずみ車（フライホイール）」だ。この章『電動機応用』では、モーター本体ではなく、「モーターに何を繋いで、どう動かすか」という現場の力学を扱う。' },
        { type: 'chat', speaker: 'master', text: 'ヒロ、プラスチックの軽いコマと、鉄でできた重くて巨大なコマ。どちらが回すのに苦労する？' },
        { type: 'chat', speaker: 'hiro', text: 'そりゃあ、鉄のコマの方が最初は回しにくいです。でも、一度スピードに乗っちゃえば、逆に止めるのもめちゃくちゃ苦労しますよね。' },
        { type: 'chat', speaker: 'master', text: 'それが【慣性モーメント（イナーシャ：J）】だ。物が「今の状態を保とうとするタフさ」のことだ。' },
        { 
          type: 'formula', 
          formulaTitle: '慣性モーメント・はずみ車効果（GD^2）',
          formula: 'J = m × r^2  [kg・m^2]\nGD^2 = 4 × J',
          formulaDesc: '・重さ（m）と、半径（r）の2乗に比例して、回しにくさ（止めにくさ）が増加する。\n・エレベーターなどでは、急に止まると危ないから、あえて重い円盤（フライホイール）をつけて「ゆっくり止まる」ようにするんだ！'
        },
        { type: 'chat', speaker: 'hiro', text: '単なる重りじゃなくて、動きを滑らかにするための「クッション」なんですね！' }
      ]
    },
    {
      id: '6-2',
      title: '水を押し上げる力（ポンプの出力）',
      items: [
        { type: 'narration', text: '街の水道施設の点検。大きなモーターが、地下から水を組み上げるポンプを回していた。' },
        { type: 'chat', speaker: 'master', text: 'モーターの仕事で一番多いのが「ポンプ」だ。試験でもしょっちゅう出題される。' },
        { type: 'chat', speaker: 'master', text: '水を上に持ち上げるのに必要な力（モーターの出力 P）は、どうやって決まると思う？' },
        { type: 'chat', speaker: 'hiro', text: 'えーっと……「どれくらいの量の水」を「どれくらいの高さ」まで持ち上げるか、ですかね？' },
        { type: 'chat', speaker: 'master', text: '大正解。それに加えて、ポンプやモーター自体の「無駄（効率：η）」を割ってあげればいい。' },
        { 
          type: 'formula', 
          formulaTitle: 'ポンプ用電動機の出力（P）',
          formula: 'P = (9.8 × Q × H) / η',
          formulaDesc: '・P : 必要なモーターのパワー(kW)\n・Q : 1秒間に運ぶ水の量(m^3/s)\n・H : 持ち上げる高さ(m)\n・η : ポンプの効率'
        },
        { type: 'chat', speaker: 'hiro', text: '最初の「9.8」って何ですか？' },
        { type: 'chat', speaker: 'master', text: '重力加速度だ。地球上で物を持ち上げるなら、必ず重力が邪魔をしてくる。だから 9.8 という係数がかかるんだ。' },
        { type: 'chat', speaker: 'hiro', text: 'なるほど。水（質量）× 高さ × 重力……。これって、高校の物理でやった「位置エネルギー（mgh）」と全く同じじゃないですか！' },
        { type: 'chat', speaker: 'master', text: 'おっ、鋭いぞ。まさにその通りだ。電気の世界も結局は物理法則の延長線上にある。それを「P = 9.8QH / η」というメモ帳（公式）に書き直しただけなんだぜ。' }
      ]
    },
    {
      id: '6-ex',
      title: '証拠品検証（電動機応用・練習問題）',
      items: [
        { type: 'narration', text: '帰りのバンの中。マスターが運転しながら問題を出した。' },
        { type: 'chat', speaker: 'master', text: '「高さ 20m のビルの屋上のタンクに、1秒間に 0.1 m^3 の水を汲み上げるポンプがある。ポンプの効率が 80% (0.8) だとすると、モーターには何kWの力が必要か？」' },
        { type: 'chat', speaker: 'hiro', text: '公式は「 P = (9.8 × Q × H) / η 」！' },
        { type: 'chat', speaker: 'hiro', text: '・重力は 9.8\n・水量(Q) は 0.1\n・高さ(H) は 20\n分子は 9.8 × 0.1 × 20 ＝ 19.6！' },
        { type: 'chat', speaker: 'hiro', text: 'これを効率(η) の 0.8 で割るから…… 19.6 ÷ 0.8 ＝ 『 24.5 kW 』です！' },
        { type: 'chat', speaker: 'master', text: '完璧だ。エレベータの巻上げ機も、エスカレーターも、基本の考え方は全部同じだ。「何を、どんなスピード（高さ）で動かすか」。「機械」科目の最終地点と言えるな！' }
      ]
    }
  ]
};

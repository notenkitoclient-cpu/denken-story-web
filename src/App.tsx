import './App.css';
import { ChatBubble } from './components/ChatBubble';

const scenarioData = [
  { speaker: 'hiro', text: '理論はなんとか受かったけど、機械のテキストを開いたら急に構造の話が出てきて、何がなにやら…。' },
  { speaker: 'master', text: 'おお、理論合格おめでとう！実は「機械」は理論の「電磁気学」の親戚なんだ。難しく考える必要はないよ。' },
  { speaker: 'hiro', text: 'ホントですか？直流機とか誘導機とか、漢字ばかりで頭が痛くて…。まずは直流機から教えてください！' },
  { speaker: 'master', text: 'よしきた。モーター（電動機）や発電機って、要するに「回る電気石」みたいなもんだ。' },
  { speaker: 'hiro', text: '回る電気石？' },
  { speaker: 'master', text: 'そう。理論で「フレミングの左手の法則」ってやったろ？磁石の中で電線を置くとどうなる？' },
  { speaker: 'hiro', text: 'ええと、電流を流すと力が働いて、電線が動く…でしたっけ？' },
  { speaker: 'master', text: '大正解！それがモーター（電動機）の原理だ。電気を入れると、磁石の力で回る。逆に、フレミングの右手の法則は？' },
  { speaker: 'hiro', text: '電線を動かすと、電流が発生する…ですか？' },
  { speaker: 'master', text: 'その通り！それが「発電機」だ。回すと電気が生み出される。実は、直流モーターと直流発電機は「構造が全く同じ」なんだぞ。' },
  { speaker: 'hiro', text: 'えっ！じゃあ、電気を入れて回せばモーター、手で回して電気を取り出せば発電機ってことですか！？' },
  { speaker: 'master', text: 'まさにその通り。だからテキストで「直流機」とひとまとめにされてるんだ。まずは「同じ箱で２つの働きができる」とイメージしておけばOK！' },
  { speaker: 'hiro', text: 'なるほど！別々に覚える必要はないんですね。少し気が楽になりました！' }
];

function App() {
  return (
    <div className="app-container">
      <header className="header glass-container">
        <h1>電験3種ストーリー</h1>
        <p>〜やさしく学ぶ機械の世界〜</p>
      </header>

      <main>
        <div className="scenario-title">
          第1話：直流機ってそもそも何してるの？
        </div>
        
        <div className="story-container">
          {scenarioData.map((data, index) => (
            <ChatBubble 
              key={index} 
              speaker={data.speaker as 'hiro' | 'master'} 
              message={data.text} 
              delay={index + 1} 
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;

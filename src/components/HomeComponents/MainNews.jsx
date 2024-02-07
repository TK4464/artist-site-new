import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Modal from '../ModalComponents/Modal';


const newsItems = [
    {
        date: '2023.07.21',
        title: '新曲「サマータイム マジック」Music Video公開！',
    },
    {
        date: '2023.07.21',
        title: '7/22(土)神奈川・相模女子大学グリーンホール公演、機材席解放につき当日券先着web販売決定！',
    },
    {
        date: "2023.07.20",
        title: "7月RADIO情報",
    },
    {
        date: "2023.07.19",
        title: '連続配信リリース記念！ジャケット写真ステッカープレゼントキャンペーン9th Album「アドナイン」実施中♪',
    },
    {
        date: "2023.07.14",
        title: "【全国サマーツアー2023】＜第3弾＞「ハズレなしのおまっとぅりサマー抽選会」実施決定！",
    },
];


const MainNews = () => {

    // モーダルコンテンツにそれぞれ別々の要素やcssを組み込みたい場合に備え、あえてのように記述
    const [showModal0, setShowModal0] = useState(false);
    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [showModal3, setShowModal3] = useState(false);
    const [showModal4, setShowModal4] = useState(false);


    const handleButtonClick = (index) => {
        // indexに応じて適切なsetShowModal関数を呼び出す
        switch (index) {
            case 0:
                setShowModal0(true);
                break;
            case 1:
                setShowModal1(true);
                break;
            case 2:
                setShowModal2(true);
                break;
            case 3:
                setShowModal3(true);
                break;
            case 4:
                setShowModal4(true);
                break;
            default:
                break;
        }
    };


    return (
        <div>
            <section className='w-full'>
                <div className='max-w-[1000px] w-11/12 md:w-3/4 mx-auto pt-14 pb-10 border-inti-green-x border-b-2'>
                    <div className='flex justify-between items-center mx-auto'>
                        <h2 className='text-2xl sm:text-3xl mb-5 text-black font-lato'>NEWS</h2>
                        <div className='bg-gray-50 text-black border-2 border-black pt-1 pb-2 px-3 sm:hover:text-white sm:hover:bg-inti-green-x sm:hover:border-inti-green-x duration-500'>
                            <Link to='/News'>
                                <p className='sm:menu-evo text-md '>VIEW MORE</p>
                            </Link>
                        </div>
                    </div>

                    {/* ニュースの日付とタイトル。また、ニュースをクリックしたら適切なモーダルが開く処理 */}
                    <div className='text-sm mt-11'>
                        {newsItems.map((item, index) =>
                        (<div className="mb-6 border-b border-gray-300 border-solid" key={index}>
                            <button className='flex sm:button' onClick={() => handleButtonClick(index)}>
                                <p className='text-xs sm:text-sm mr-4 pl-2 font-times italic text-black border-l-4 border-inti-green-x'>{item.date}</p>
                                <p className='text-xs sm:text-sm line-clamp-1 text-black '>{item.title}</p>
                            </button>
                        </div>
                        ))}

                        {/* Modalコンテンツ */}
                        {/* modalは各ニュースに対応したcssを当あたいため念の為、別々で記述 */}
                        <Modal isVisible={showModal0} onClose={() => setShowModal0(false)}>
                            <div className='mb-2'>
                                <div className=' w-full bg-inti-green-x py-4 px-8'>
                                    <p className='px-1 text-base sm:text-lg text-white mb-2 font-times italic'>2023.07.21</p>
                                    <h3 className='px-1 text-base sm:text-xl text-white mb-2 font-normal'>
                                        新曲「サマータイム マジック」Music Video公開！
                                    </h3>
                                </div>
                                <p className='p-8 text-xs sm:text-sm mb-4 text-black font-normal leading-6'>
                                    7/19(水)にリリースされたばかりのアルバム「アドナイン」のリード曲となっている新曲「サマータイム マジック」のMusic Videoが公開されました！
                                    <br />&nbsp;<br />
                                    「サマータイム マジック」はなんと15年ぶりに打ち込み/アレンジ/演奏/コーラスをナオト・インティライミが全て一人で創り上げたという力作。
                                    <br />&nbsp;<br />
                                    「音楽だけじゃなくて、いろいろ我慢していたものや制限されていたものが開かれる夏」という想いが表現されています♪
                                    <br />&nbsp;<br />
                                    本日公開されたMusic Videoは夏を象徴する海・空などのシチュエーションが全面LEDのスタジオにて撮影され“夏らしさをLEDで表現した”中に、サマーチェアやビーチボールなどをリアルに設置するなど、マジカルでエフェクティブな世界観が繰り広げられています！
                                    <br />&nbsp;<br />
                                    シーサイド、トロピカル、サンセットの3つのシーンの中、ナオト本人も登場し、
                                    演奏したり踊ったりとアクティブな演出も入れ込んでおり、
                                    さらに2体の着ぐるみキャラクターを交えナオト本人と一緒に踊るサビのシーンの可愛らしい振り付けも是非注目！！
                                    <br />&nbsp;<br />
                                    また今回のアルバムを引っ提げたツアーもいよいよ明日7月22日(土)神奈川・相模女子大学グリーンホールを皮切りにスタート！<br />みなさんにお会いできることを楽しみにしております♪
                                    <br />&nbsp;<br />
                                    全国サマーツアー2023」詳細は<a href='https://www.nananaoto.com/2023_tour/' target='_blank' rel='noopener noreferrer' className='text-sky-500 sm:hover:opacity-60 duration-500'>こちら！</a>
                                </p>
                                <div>
                                    <a href='https://www.youtube.com/watch?v=SLJz9ZxeREo' target='_blank' rel='noopener noreferrer'><img src='/public/images/modalvisual1.jpeg' alt='サマータイム マジックの画像' className=' mx-auto px-8 pb-8' /></a>
                                </div>
                            </div>
                        </Modal>

                        <Modal isVisible={showModal1} onClose={() => setShowModal1(false)}>
                            <div className='mb-2'>
                                <div className=' w-full bg-inti-green-x py-4 px-8'>
                                    <p className='px-1 text-base sm:text-lg text-white mb-2 font-times italic'>2023.07.21</p>
                                    <h3 className='px-1 text-base sm:text-xl text-white mb-2 font-normal'>
                                        7/22(土)神奈川・相模女子大学グリーンホール公演、機材席解放につき当日券先着web販売決定！
                                    </h3>
                                </div>
                                <p className='p-8 text-xs sm:text-sm text-black font-normal'>
                                    7/22(土)神奈川・相模女子大学グリーンホール公演、機材席解放につき当日券先着web販売決定！
                                    <br />&nbsp;<br />
                                    ○販売席種(税込)
                                    指定席￥8,400
                                    <br />&nbsp;<br />
                                    ○公演日程
                                    2023年7月22日(土)神奈川・相模女子大学グリーンホール
                                    16:00開場/17:00開演
                                    <br />&nbsp;<br />
                                    ◯受付期間・お申込み方法
                                    7月22日(土)13:00～15:00<br />
                                    <a href='https://www.diskgarage.com/ticket/detail/no091847' target='_blank' rel='noopener noreferrer' className='text-sky-500 sm:hover:opacity-60 break-words duration-500'>
                                        https://www.diskgarage.com/ticket/detail/no091847
                                    </a>
                                    <br />&nbsp;<br />
                                    ※当日券WEB受付のお支払い・引渡し方法の詳細は申込みページにてご確認下さい。<br />
                                    ※お一人様1公演2枚まで<br />
                                    ※予定枚数に達し次第、受付・販売を終了いたします。<br />
                                    ※残席状況によっては着席指定のお席にご案内させていただく場合がございます。<br />
                                    ※2枚ご購入の場合、お席が離れる可能性がございます。<br />
                                    ※ステージや演出の一部が見えづらい可能性がございます。予めご了承ください。<br />
                                    ※7月22日(土)16:00～当日券窓口でも発売いたします。WEB受付にて予定枚数を終了した場合は、会場での販売はございません。販売開始時間は多少前後する可能性がございます。
                                    <br />&nbsp;<br />
                                    「全国サマーツアー2023」詳細は <a href='https://www.nananaoto.com/2023_tour/' target='_blank' rel='noopener noreferrer' className='text-sky-500 sm:hover:opacity-60 duration-500'>こちら！</a>
                                </p>
                            </div>
                        </Modal>

                        <Modal isVisible={showModal2} onClose={() => setShowModal2(false)}>
                            <div className='mb-2'>
                                <div className=' w-full bg-inti-green-x py-4 px-8'>
                                    <p className='px-1 text-base sm:text-lg text-white mb-2 font-times italic'>2023.07.20</p>
                                    <h3 className='px-1 text-base sm:text-xl text-white mb-2 font-normal'>
                                        7月RADIO情報
                                    </h3>
                                </div>
                                <p className='p-8 text-xs sm:text-sm text-black font-normal'>
                                    ●2023.07.03(月)9:00~13:00<br />
                                    J-WAVE 「STEP ONE」<br />
                                    <a href='https://www.j-wave.co.jp/original/stepone/' target='_blank' rel='noopener noreferrer' className='text-sky-500 sm:hover:opacity-60 duration-500'>https://www.j-wave.co.jp/original/stepone/</a><br />
                                    ※生出演
                                    <br />&nbsp;<br />
                                    ●2023.07.03(月)13:00~14:55<br />
                                    TFM「山崎怜奈の誰かに話したかったこと。」<br />
                                    <a href='https://www.tfm.co.jp/darehana/' target='_blank' rel='noopener noreferrer' className='text-sky-500 sm:hover:opacity-60 duration-500'>https://www.tfm.co.jp/darehana/</a><br />
                                    ※生出演
                                    <br />&nbsp;<br />
                                    ●2023.07.06(木)15:00~<br />
                                    FM NORTH WAVE「GOGO RADIO COMPANY」<br />
                                    <a href='https://www.fmnorth.co.jp/gogoradio/' target='_blank' rel='noopener noreferrer' className='text-sky-500 sm:hover:opacity-60 duration-500'>https://www.fmnorth.co.jp/gogoradio/</a><br />
                                    ※生出演
                                    <br />&nbsp;<br />
                                    ●2023.07.06(木)17:30~<br />
                                    ZIP-FM「MAGIC JAM」<br />
                                    <a href='https://zip-fm.co.jp/programs/2af6ef67-6335-455d-a4ba-bc3ce30e5395' target='_blank' rel='noopener noreferrer' className='text-sky-500 sm:hover:opacity-60 duration-500'>https://zip-fm.co.jp/programs/2af6ef67-6335-455d-a4ba-bc3ce30e5395</a><br />
                                    ※生出演
                                    <br />&nbsp;<br />
                                    ●2023.07.13(木)13:00-<br />
                                    FM NORTH WAVE「GOGO RADIO COMPANY」<br />
                                    <a href='https://www.fmnorth.co.jp/gogoradio/' target='_blank' rel='noopener noreferrer' className='text-sky-500 sm:hover:opacity-60 duration-500'>https://www.fmnorth.co.jp/gogoradio/</a>
                                    <br />&nbsp;<br />
                                    ●2023.07.14(金)19:04-19:25<br />
                                    CROSS FM 「MISHMASH FRIDAY-金ズマ-」<br />
                                    <a href='https://www.crossfm.co.jp/contpgms/w_main.php?oya_id=648' target='_blank' rel='noopener noreferrer' className='text-sky-500 sm:hover:opacity-60 break-words duration-500'>https://www.crossfm.co.jp/contpgms/w_main.php?oya_id=648</a>
                                    <br />&nbsp;<br />
                                    ●2023.07.14(金)24:00-25:00<br />
                                    KBCラジオ「ドォーモラジオ」<br />
                                    <a href='https://kbc.co.jp/duomoradio/' target='_blank' rel='noopener noreferrer' className='text-sky-500 sm:hover:opacity-60 duration-500'>https://kbc.co.jp/duomoradio/</a>
                                    <br />&nbsp;<br />
                                    ●2023.07.17(月)07:30~11:00<br />
                                    DateFM 「Morning Brush」<br />
                                    <a href='https://datefm.jp/pgm/brush/' target='_blank' rel='noopener noreferrer' className='text-sky-500 sm:hover:opacity-60 duration-500'>https://datefm.jp/pgm/brush/</a>
                                    <br />&nbsp;<br />
                                    ●2023.07.15(土)16:00~18:00<br />
                                    NHK FM「ラジオマンジャック」<br />
                                    <a href='https://www.nhk.jp/p/rmj/rs/9V8J6RK1L8/episode/re/MKXJ8Q81WQ/' target='_blank' rel='noopener noreferrer' className='text-sky-500 sm:hover:opacity-60 break-words duration-500'>https://www.nhk.jp/p/rmj/rs/9V8J6RK1L8/episode/re/MKXJ8Q81WQ/</a><br />
                                    ※生出演
                                    <br />&nbsp;<br />
                                    ●2023.07.23(日)13:00~<br />
                                    BayFM「FREEWAY」<br />
                                    <a href='https://www.bayfm.co.jp/program/yumi/' target='_blank' rel='noopener noreferrer' className='text-sky-500 sm:hover:opacity-60 duration-500'>https://www.bayfm.co.jp/program/yumi/</a><br />
                                    ※生出演
                                    <br />&nbsp;<br />
                                    ●2023.07.24(月)6:00~11:00<br />
                                    FM802「TACTY IN THE MORNING」<br />
                                    <a href='https://funky802.com/tacty/' target='_blank' rel='noopener noreferrer' className='text-sky-500 sm:hover:opacity-60 duration-500'>https://funky802.com/tacty/</a><br />
                                </p>
                            </div>
                        </Modal>

                        <Modal isVisible={showModal3} onClose={() => setShowModal3(false)}>
                            <div className='mb-2'>
                                <div className=' w-full bg-inti-green-x py-4 px-8'>
                                    <p className='px-1 text-base sm:text-lg text-white mb-2 font-times italic'>2023.07.19</p>
                                    <h3 className='px-1 text-base sm:text-xl text-white mb-2 font-normal'>
                                        連続配信リリース記念！ジャケット写真ステッカープレゼントキャンペーン9th Album「アドナイン」実施中♪
                                    </h3>
                                </div>
                                <p className='p-8 text-xs sm:text-sm text-black font-normal'>
                                    昨年のアリーナ公演で発表された、1月からの連続配信リリースを記念して、ステッカープレゼントキャンペーンの実施が決定致しました！
                                    <br />&nbsp;<br />
                                    2023年リリースおまっとぅりイヤー中にリリースされる楽曲の感想を大募集！
                                    楽曲を聴いていただき感想をお送りいただいた方の中から、
                                    抽選で10名の方に、ジャケット写真をデザインにしたステッカーをプレゼント！
                                    <br />&nbsp;<br />
                                    さらに！
                                    全ての配信楽曲・アルバムの感想をご応募いただいた方には、
                                    ナオトの直筆サイン入りのステッカーコンプリートセットを抽選で10名さまにプレゼント！
                                    ※7/19(水)発売 9th Album「アドナイン」の感想募集までが対象となります。
                                    <br />&nbsp;<br />
                                    毎回見逃さずに、どしどしご応募ください♪
                                    <br />&nbsp;<br />
                                    本日より、7/19(水)リリース9th Album「アドナイン」の感想を大募集！
                                    下記をご確認いただき、ご応募ください！！！
                                    <br />&nbsp;<br />
                                    【対象】<br />
                                    9th Album「アドナイン」<br />
                                    ※7/19(水)リリース<br />
                                    ※初回限定ファンクラブ盤・通常盤どちらのご感想でも問題ございません
                                    <br />&nbsp;<br />
                                    ▼9th Album「アドナイン」通常盤ご購入はこちら！<br />
                                    <a href='https://naoto.lnk.to/add9_CD' target='_blank' rel='noopener noreferrer' className='text-sky-500 sm:hover:opacity-60 duration-500'>https://naoto.lnk.to/add9_CD</a><br />
                                    <br />&nbsp;<br />
                                    ▼各種ダウンロード・ストリーミングサイトにて絶賛配信中！<br />
                                    <a href='https://naoto.lnk.to/Add9th' target='_blank' rel='noopener noreferrer' className='text-sky-500 sm:hover:opacity-60 duration-500'>https://naoto.lnk.to/Add9th</a>
                                    <br />&nbsp;<br />
                                    下記をご確認いただき、ご応募ください！！！
                                    <br />&nbsp;<br />
                                    ご応募・詳細については<a href='https://naoto.fc.avex.jp/index/removeLogin/' target='_blank' rel='noopener noreferrer' className='text-sky-500 sm:hover:opacity-60 duration-500'>こちら！</a><br />
                                    ※FCインティライミ（年会費制）会員さまのみアクセスできます
                                    <br />&nbsp;<br />
                                    今からのご入会でもご参加いただけます！<br />
                                    »FCインティライミへの新規ご入会は<a href='https://naoto.fc.avex.jp/lp/' target='_blank' rel='noopener noreferrer' className='text-sky-500 sm:hover:opacity-60 duration-500'>こちら！</a>
                                </p>
                            </div>
                        </Modal>

                        <Modal isVisible={showModal4} onClose={() => setShowModal4(false)}>
                            <div className='mb-2'>
                                <div className=' w-full bg-inti-green-x py-4 px-8'>
                                    <p className='px-1 text-base sm:text-lg text-white mb-2 font-times italic'>2023.07.14</p>
                                    <h3 className='px-1 text-base sm:text-xl text-white mb-2 font-normal'>
                                        【全国サマーツアー2023】＜第3弾＞「ハズレなしのおまっとぅりサマー抽選会」実施決定！
                                    </h3>
                                </div>
                                <p className='p-8 text-xs sm:text-sm text-black font-normal'>
                                    全国サマーツアー2023！スペシャル企画 第3弾！<br />
                                    全会場にて、FCインティライミ限定！「ハズレなしのおまっとぅりサマー抽選会」の実施が決定！
                                    <br />&nbsp;<br />
                                    会場のFCブース近くに貼り出された「おまっとぅりサマー抽選会のQRコード」をスマートフォンで読み取っていただき、抽選会にご参加ください！<br />
                                    下記賞品が必ず当たる、ハズレなしの抽選会です♪
                                    <br />&nbsp;<br />
                                    【実施公演】<br />
                                    全12公演で実施
                                    <br />&nbsp;<br />
                                    【参加対象】<br />
                                    会場にお越しいただいたFCインティライミ（年会費制）会員さま<br />
                                    ※1公演につき1会員1回までとなります。<br />
                                    ※A賞は公演当日のチケットをお持ちの方のみ有効となります。
                                    <br />&nbsp;<br />
                                    【景品】<br />
                                    ＜A賞＞公演当日の「ナオトに会えるMEET&GREET」へご招待！（各公演5名さま）
                                    <br />&nbsp;<br />
                                    ＜B賞＞サイン入り！アドナインFC盤ジャケ写アクリルキーホルダー（各公演5名さま）
                                    <br />&nbsp;<br />
                                    ＜C賞＞抽選会限定！オリジナルステッカー（各公演5名さま）
                                    <br />&nbsp;<br />
                                    ＜D賞＞公演限定！待受け画像
                                    <br />&nbsp;<br />
                                    <a href='https://naoto.fc.avex.jp/content/detail/?cid=1005548' target='_blank' rel='noopener noreferrer' className='text-sky-500 sm:hover:opacity-60 duration-500'>»詳細はこちら！</a>
                                    <br />&nbsp;<br />
                                    FCインティライミ モバイルでもさまざまな企画を実施します！<br />
                                    お楽しみに〜！
                                    <br />&nbsp;<br />
                                    <a href='http://mobile.nananaoto.com/' target='_blank' rel='noopener noreferrer' className='text-sky-500 sm:hover:opacity-60 duration-500'>»詳細はこちら！</a>
                                </p>
                            </div>
                        </Modal>


                    </div>
                </div>
            </section>
        </div>
    )
}

export default MainNews
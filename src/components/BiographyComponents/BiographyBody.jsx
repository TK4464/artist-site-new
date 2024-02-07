import React from 'react'

const BiographyBody = () => {

    const linksData = [
        {
            url: 'https://ameblo.jp/nananaoto/',
            text: '▶︎ ナオト・インティライミ オフィシャルブログ',
        },
        {
            url: 'https://www.facebook.com/people/Naoto-%E3%83%8A%E3%82%AA%E3%83%88%E3%82%A4%E3%83%B3%E3%83%86%E3%82%A3%E3%83%A9%E3%82%A4%E3%83%9F/100044183361660/',
            text: '▶︎ ナオト・インティライミ – ホーム | Facebook',
        },
        {
            url: 'https://twitter.com/naotointiraymi',
            text: '▶︎ ナオト・インティライミ (@naotointiraymi) | Twitter',
        },
        {
            url: 'https://line.me/R/ti/p/%40naotointiraymi',
            text: '▶︎ LINE公式アカウント',
        },
        {
            url: 'https://www.youtube.com/user/naotochannel',
            text: '▶︎ naotochannel – YouTube',
        },
    ];

    return (
        <div>
            <section className='w-full h-full'>
                <div className='max-w-[1000px] md:w-3/4 mx-auto'>
                    <h2 className='text-2xl lg:text-3xl mt-12 mb-6 text-center py-2 text-black font-normal font-lato'>BIOGRAPHY</h2>
                    <div className='max-w-[700px] w-full mx-auto pt-3'>
                        <img src="/public/images/backgroundimage0.jpeg" alt="biographyimage" className='object-cover' />
                    </div>
                    <div className=' max-w-[700px] mx-auto '>
                        <div className='text-black px-5 mt-6 pt-5 py-2 md:px-0 pb-5 text-xs  sm:text-sm'>
                            <p className='leading-5 sm:leading-6'>【Profile】</p>
                            <p className='leading-5 sm:leading-6'>8月15日三重県生まれ、千葉県育ち。</p>
                            <p className='leading-5 sm:leading-6'>世界70カ国以上を一人で渡り歩き、各地でLIVEを行い、世界の音楽と文化を体感。</p>
                            <p className='leading-5 sm:leading-6'>『インティ ライミ』とは南米インカの言葉で『太陽の祭り』を意味する。</p>
                            <p className='leading-5 sm:leading-6'>
                                自らのソロ活動の他、コーラス&ギターとして Mr.Childrenツアーサポートメンバーに抜擢され、知名度を上げていく。2010年にメジャーデビュー。</p><br />
                            <p className='leading-5 sm:leading-6'>
                                「タカラモノ ～この声がなくなるまで～」、「今のキミを忘れない」では１００万ダウンロードを超えるヒット。2012年リリースの3rdアルバム「風歌キャラバン」は自身初となるオリコン・ウィークリーチャート1位を獲得。同年にはNHK紅白歌合戦に初出場を果たす。 2015年の6月には初のベストアルバム「THE BEST!」が発売。年末には自身初となる大阪、京セラドームでのLIVEも行い4万人の観客と共に大成功のうちに収める。</p>
                            <p className='leading-5 sm:leading-6'>
                                2016年7月リリース18thシングル「Overflows〜言葉にできなくて〜」はフジテレビ系「痛快TV スカッとジャパン 胸キュンスカッと」テーマソングとしても起用され、配信開始と共に主要配信9サイト･18部門で1位を獲得し､iTunes･レコチョク･歌ネットなどでは週間ランキング1位を獲得｡
                            </p><br />
                            <p className='leading-5 sm:leading-6'>
                                2017年もう一度自分の原点に戻るための旅に出ると宣言し、世界19ヵ国の旅を経て7月10日のスペシャルLIVE「ナオトの日」にて完全復活。
                            </p><br />
                            <p className='leading-5 sm:leading-6'>
                                俳優活動としてはTBSドラマ「コウノドリ」にも出演を果たした。
                            </p><br />
                            <p className='leading-5 sm:leading-6'>
                                2018年3月からは自身初となる全国47都道府県弾き語りツアーを開催し無事に完走。
                                年末には約3年ぶりのドーム公演もナゴヤドームにて開催した。
                            </p><br />
                            <p className='leading-5 sm:leading-6'>
                                2019年8月には22ndシングル「まんげつの夜」がフジテレビ｢痛快TVスカッとジャパン“ファミリースカッと”」のテーマ曲に起用された。
                                また世界三大レーベルのうちのひとつである「ユニバーサルミュージック ラテン」から「Naoto」名義で世界デビューした。
                            </p><br />
                            <p className='leading-5 sm:leading-6'>
                                2020年には初の生配信ライブも実施し、10月には初のEP「オモワクドオリ」を発売。
                            </p><br />
                            <p className='leading-5 sm:leading-6'>
                                2021年、予定していた「10周年！アニバーサリーおまっとぅりYEAR」がついに始動！
                                1月にはTBS「逃げるは恥だが役に立つ」新春SPにも出演。7月に2曲の配信シングルがリリースされ、9月には10周年記念ベストアルバムのリリース、10月からは全国ツアーも実施。また、11月公開のディズニー・アニメーション最新作『ミラベルと魔法だらけの家』 では日本版エンドソングアーティストも務め、本作で声優デビューも果たした。</p><br />
                            <p className='leading-5 sm:leading-6'>
                                2022年4月からは全国ホールツアーを完走し、11月に4年ぶり8枚目のオリジナルアルバム「虹色∞オクターブ」をリリース。
                                12月にはぴあアリーナMMにて6年ぶりとなるアリーナ2Days公演を開催した。
                            </p><br />
                            <p className='leading-5 sm:leading-6'>
                                そして2023年は「リリースおまっとぅりイヤー」として立て続けに配信シングルをリリース。7月からは初の夏の開催となる全国ホールツアーを予定している。
                            </p><br />
                        </div>
                        <div className=' pb-16'>
                            {linksData.map((link, index) => (
                                <div key={index} className=' text-xs sm:text-sm px-5 md:px-0'>
                                    <a href={link.url} target='_blank' rel='noopener noreferrer' className='text-sky-500 hover:opacity-60 duration-500'>
                                        {link.text}
                                    </a>
                                    <br />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BiographyBody
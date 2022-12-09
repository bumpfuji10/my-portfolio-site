<template>
<div id="about" class="mt-5 pt-5">

  <!---flexbox1（上段）--->
  <div class="profile-box flex justify-center">
    <div class="flexbox">
      <h2 class="profile-title flexbox text-2xl pb-10 font-bold">Who am I ?</h2>
      <dl class="detail-profile-left tracking-wider grid gap-1">
        <dt class="font-bold">趣味：</dt>
        <dd>🎮ゲーム：Meta quest 2</dd>
        <dd>💪チーム開発：<a href="https://www.ideee.tech/" class="text-yellow-400 hover:text-yellow-300 mr-4">ideee</a>(バックエンド・UI編集を担当)</dd>
        <dt class="font-bold">現在：</dt>
        <dd>👨‍💼職業：Webエンジニア（バックエンド)</dd>
        <dd>📕業務内容：レンタルスペースプラットフォームの開発</dd>
        <dd>✅技術：PHP/Laravel/GraphQL</dd>
        <dt class="font-bold">早くこれになりたい：</dt>
        <dd>🏄‍♀️社会に価値を与えられるエンジニア</dd>
        <dd>🧠事業にコミットできるエンジニア</dd>
        <dd>🤹‍♀️集客や収益構造まで意識されたサービスをつくりたい</dd>
        <dd>🎯自分が書いた1年前のコードを見て、成長を感じれる</dd>
        <dt class="font-bold">余談：</dt>
        <dd>🤸🏼‍♂️小学校から大学まで体操やってました</dd>
        <dd>（現在は小学生〜大学生まで、様々な大会で審判してたりします）</dd>
      </dl>
    </div>
    <div class="profile-img flexbox pt-20">
      <img  src="/src/assets/IMG_7576.png" alt class="my-pic rounded-full max-w-xs">
    </div>
  </div>

  <!---flexbox2（下段）--->
  <div class="profile-box flex justify-center pt-20">
    <div>
      <img src="/src/assets/IMG_GYM.png" alt class="gym-pic rounded-full max-w-xs">
    </div>
    <div class="flexbox pl-10">
      <dl class="detail-profile-right tracking-wider grid gap-1">
        <dt class="font-bold">Name</dt>
        <dd>💁鎌田　陽（Yo Kamada）</dd>
        <dt class="font-bold">My home town</dt>
        <dd>🌎島根県松江市</dd>
        <dt class="font-bold">👀Tech Stack</dt>
        <dd>Ruby, Ruby on Rails, PHP, Laravel, GraphQL, MySQL</dd>
        <dt class="font-bold">Recent hobby</dt>
        <dd>🧖‍♂️サウナ / 🍀自然探索</dd>
        <dt class=font-bold>Comments</dt>
        <dd>おすすめサウナ教えてください！！</dd>
      </dl>
    </div>
  </div>

</div>
</template>

<script>
export default {};
</script>

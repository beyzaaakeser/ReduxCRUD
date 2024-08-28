# State :

- Uygulamadaki bileşenlerin sahip olduğu bilgi ve özellikler

# State Yönetme

- Prop Drilling : React'ta bir bileşenden diğerine, genellikle birden fazla ara bileşen boyunca, veriyi (props) iletme işlemidir. Bu, bir üst bileşenden alt bileşenlere belirli bir veri veya fonksiyon taşımak gerektiğinde yapılır. Ancak bu durum, bileşen ağacında çok derin bir yapıya sahip olduğunda veya birçok ara bileşenle uğraşıldığında karmaşık ve zor yönetilebilir hale gelebilir.

# Context:

- React'ta prop drilling sorununu çözmek için kullanılan bir mekanizmadır. Context, belirli bir veri kümesinin (örneğin bir tema, dil ayarları, kullanıcı bilgileri gibi) bileşen ağacının birçok seviyesinde kolayca paylaşılmasına olanak tanır, böylece veriyi manuel olarak her bir bileşene prop olarak geçirmek gerekmez.
  Uygulamadaki stati ve statei değiştiren fonksiyonları bütün bileşenler tarafından erişilebilen merkezler tarafından yönettiğimiz state yönetim aracı.

# Redux :

- Bileşenlerin sahip olduğu ve merkezi olarak yönetilmesi gereken statleri yönettiğimiz state yönetim aaracı.
  Redux, JavaScript uygulamalarında kullanılan bir state management (durum yönetimi) kütüphanesidir. Uygulamanın durumunu (state) tek bir merkezi depo (store) içinde tutar ve uygulamanın çeşitli bileşenlerinin bu durumu yönetmesine ve erişmesine olanak tanır. Redux, özellikle React gibi bileşen tabanlı yapılarla birlikte kullanıldığında, state yönetimini daha organize ve öngörülebilir hale getirir.

# Neden context yerine redux kullanılır?

- Context, daha basit ve yerel state yönetimi gerektiren durumlar için uygundur. Ancak uygulamanın karmaşıklığı arttıkça, Redux daha fazla kontrol, esneklik ve ölçeklenebilirlik sunar. Karmaşık state yapıları ve büyük projelerde, Redux'ın sunduğu araçlar ve metodolojiler, state yönetimini daha yönetilebilir hale getirir.

- Büyük projelerde reduxta Kod tekrarı contexte göre daha az.
  Reduxın Performansı daha iyi
  Redux bileşen içerisindeki karışıklığı daha azaltır.
  Reduxta hata ayıklama daha kolaydır
  Orta veya daha büyük ölçekli projelerde state yönetimini daha kolay hale getiriyor.

# Redux ile ilgili bilinmesi gerekenler

1. Store : uygulamadki bütün bileşenler tarafından erişilebilen ve yönetilebilen state deposu

2. Reducer : Bir state tutar ve aksiyondan aldığı talimata göre tuttuğu statein nasıl değişeceğine akrar verir.

3. Action : Reducerlardaki stati güncellemek için gönderdiğimiz nesne / talimat / emir / eylem / haber

-- Action iki değere sahip bir nesnedir.
-- type(zorunlu) : Eylemi tanımlayan string
-- payload(opsiyonel) : Eylemin verisi

4. Dispatch (Sevk Etmek): Eylenmin gerçekleştiğini reducera ileten haber veren methoddur.

5. Subscribe (Abone Olmak) : Bileşenlerin storeda tutulan veriye erişim sağlaması

6. Provider (Sağlayıcı) : Storeda tutulan veriyi uygulamaya sağlar.

# Gerçek hayattan benzetme

1. Store: Okul Binası
2. Reducer: Okulun Yönetim Ekibi
3. Action : Öğrencinin sınavı geçmesi, Yeni Öğrencinin kayıt yapılması
4. Dispatch: Öğrenci İşleri | Öğretmen
5. Subscribe: Rehberlik Servisi | E-Okul
6. Provider: MEB


# Redux Kurulum Aşamaları

1. redux ve react-redux paketlerini indir
2. Reducer / reducerların kurulumunu yap
3. Store oluştur
4. storeu projeye tanıt
import { useLoaderData } from "react-router";
import Cliente from "../Components/Cliente";

export function Loader(){
  const clientes =[{
    "id": 1,
    "nombre": "Nara",
    "telefono": "387-140-9178",
    "email": "nlorkings0@jiathis.com",
    "empresa": "Rosenbaum-Barton"
  }, {
    "id": 2,
    "nombre": "Diana",
    "telefono": "567-505-3322",
    "email": "dflewitt1@topsy.com",
    "empresa": "O'Reilly-Erdman"
  }, {
    "id": 3,
    "nombre": "Maggie",
    "telefono": "697-142-3528",
    "email": "mmatous2@geocities.jp",
    "empresa": "Nicolas-Runolfsdottir"
  }, {
    "id": 4,
    "nombre": "Karee",
    "telefono": "112-214-5498",
    "email": "kkopecka3@sitemeter.com",
    "empresa": "Moen-Brown"
  }, {
    "id": 5,
    "nombre": "Rafferty",
    "telefono": "638-997-3921",
    "email": "rdenne4@springer.com",
    "empresa": "Brekke, Breitenberg and Mueller"
  }, {
    "id": 6,
    "nombre": "Allen",
    "telefono": "655-487-7969",
    "email": "amunro5@wordpress.org",
    "empresa": "McDermott-Rippin"
  }, {
    "id": 7,
    "nombre": "Flo",
    "telefono": "532-952-6994",
    "email": "fboss6@washington.edu",
    "empresa": "Schulist, Mante and Bernhard"
  }, {
    "id": 8,
    "nombre": "Ingaberg",
    "telefono": "594-186-0393",
    "email": "idaguanno7@yandex.ru",
    "empresa": "Johnston-Bartoletti"
  }, {
    "id": 9,
    "nombre": "Cliff",
    "telefono": "250-383-7310",
    "email": "csergean8@jugem.jp",
    "empresa": "Hyatt, Christiansen and Williamson"
  }, {
    "id": 10,
    "nombre": "Bourke",
    "telefono": "980-982-1035",
    "email": "bknewstubb9@columbia.edu",
    "empresa": "Frami and Sons"
  }, {
    "id": 11,
    "nombre": "Gerladina",
    "telefono": "227-794-0119",
    "email": "gsuttona@arstechnica.com",
    "empresa": "Zulauf Group"
  }, {
    "id": 12,
    "nombre": "Magdalen",
    "telefono": "889-268-1032",
    "email": "mgrundonb@tiny.cc",
    "empresa": "Heller and Sons"
  }, {
    "id": 13,
    "nombre": "Sherlocke",
    "telefono": "573-973-0604",
    "email": "sgothrupc@flavors.me",
    "empresa": "Kiehn, Senger and Nitzsche"
  }, {
    "id": 14,
    "nombre": "Sibyl",
    "telefono": "503-437-0558",
    "email": "sarnaldod@posterous.com",
    "empresa": "Flatley and Sons"
  }, {
    "id": 15,
    "nombre": "Manolo",
    "telefono": "113-439-9030",
    "email": "mmorphewe@wufoo.com",
    "empresa": "Parker LLC"
  }, {
    "id": 16,
    "nombre": "Warner",
    "telefono": "972-182-5107",
    "email": "wsherewoodf@sina.com.cn",
    "empresa": "Lind Inc"
  }, {
    "id": 17,
    "nombre": "Lennie",
    "telefono": "816-431-7393",
    "email": "lmushetg@hostgator.com",
    "empresa": "Corkery-Turcotte"
  }, {
    "id": 18,
    "nombre": "Rivalee",
    "telefono": "455-202-1340",
    "email": "rhughesdonh@thetimes.co.uk",
    "empresa": "Larson, Wilderman and Rowe"
  }, {
    "id": 19,
    "nombre": "Dulci",
    "telefono": "602-512-2864",
    "email": "dpimleyi@alibaba.com",
    "empresa": "Koss-Schuster"
  }, {
    "id": 20,
    "nombre": "Corinna",
    "telefono": "576-918-1187",
    "email": "cthrippj@hhs.gov",
    "empresa": "Russel-Sipes"
  }, {
    "id": 21,
    "nombre": "Merrielle",
    "telefono": "159-213-9165",
    "email": "mdiggk@zimbio.com",
    "empresa": "Veum-Wuckert"
  }, {
    "id": 22,
    "nombre": "Erv",
    "telefono": "486-769-0693",
    "email": "edenningl@home.pl",
    "empresa": "Harvey LLC"
  }, {
    "id": 23,
    "nombre": "Samantha",
    "telefono": "137-863-7497",
    "email": "sespleym@godaddy.com",
    "empresa": "Keeling, Okuneva and Dickens"
  }, {
    "id": 24,
    "nombre": "Pat",
    "telefono": "953-306-8683",
    "email": "pshrubbn@sakura.ne.jp",
    "empresa": "Leuschke, Steuber and Klocko"
  }, {
    "id": 25,
    "nombre": "Craggie",
    "telefono": "104-953-4221",
    "email": "ccornisho@ucoz.ru",
    "empresa": "Bosco-Aufderhar"
  }, {
    "id": 26,
    "nombre": "Kellen",
    "telefono": "986-913-5461",
    "email": "kbowerbankp@businessweek.com",
    "empresa": "Kris-Wilderman"
  }, {
    "id": 27,
    "nombre": "Bendicty",
    "telefono": "153-872-4715",
    "email": "bwilsteadq@techcrunch.com",
    "empresa": "Shanahan Group"
  }, {
    "id": 28,
    "nombre": "Kessiah",
    "telefono": "673-542-3147",
    "email": "kdammarellr@jimdo.com",
    "empresa": "Hilpert Inc"
  }, {
    "id": 29,
    "nombre": "Rora",
    "telefono": "431-965-7376",
    "email": "rdwellys@wix.com",
    "empresa": "Daugherty and Sons"
  }, {
    "id": 30,
    "nombre": "Farrand",
    "telefono": "786-743-6095",
    "email": "ffearickt@mac.com",
    "empresa": "Marks-Wolf"
  }, {
    "id": 31,
    "nombre": "Ainsley",
    "telefono": "826-540-8434",
    "email": "ahabardu@homestead.com",
    "empresa": "Sanford, Swift and Krajcik"
  }, {
    "id": 32,
    "nombre": "Maribel",
    "telefono": "214-964-5163",
    "email": "mmechemv@amazon.co.uk",
    "empresa": "Volkman, Dare and Flatley"
  }, {
    "id": 33,
    "nombre": "Dani",
    "telefono": "720-469-2147",
    "email": "dhinksenw@about.me",
    "empresa": "Doyle, Schaden and Hartmann"
  }, {
    "id": 34,
    "nombre": "Adelina",
    "telefono": "124-373-6061",
    "email": "acunniamx@usda.gov",
    "empresa": "Altenwerth-Bednar"
  }, {
    "id": 35,
    "nombre": "Nicky",
    "telefono": "803-311-4675",
    "email": "ndonohoey@naver.com",
    "empresa": "Marks-Keebler"
  }, {
    "id": 36,
    "nombre": "Shayne",
    "telefono": "959-528-9805",
    "email": "srowstonz@list-manage.com",
    "empresa": "Mosciski-Wisozk"
  }, {
    "id": 37,
    "nombre": "Shawn",
    "telefono": "715-721-2697",
    "email": "scatterick10@senate.gov",
    "empresa": "Adams Inc"
  }, {
    "id": 38,
    "nombre": "Craggy",
    "telefono": "848-231-8544",
    "email": "cgethen11@eepurl.com",
    "empresa": "Cole-Bauch"
  }, {
    "id": 39,
    "nombre": "Ronda",
    "telefono": "770-304-0529",
    "email": "rbrayley12@addthis.com",
    "empresa": "Reinger Inc"
  }, {
    "id": 40,
    "nombre": "Amalea",
    "telefono": "828-197-5355",
    "email": "abalshen13@ucla.edu",
    "empresa": "Spencer-Yundt"
  }, {
    "id": 41,
    "nombre": "Britteny",
    "telefono": "857-938-3620",
    "email": "bclemont14@slideshare.net",
    "empresa": "Kub and Sons"
  }, {
    "id": 42,
    "nombre": "Emerson",
    "telefono": "368-813-3070",
    "email": "ecolleymore15@tamu.edu",
    "empresa": "Yost Group"
  }, {
    "id": 43,
    "nombre": "Dewie",
    "telefono": "177-753-0844",
    "email": "dlauderdale16@is.gd",
    "empresa": "Kohler, Langworth and Balistreri"
  }, {
    "id": 44,
    "nombre": "Levey",
    "telefono": "488-193-9004",
    "email": "lseeviour17@ow.ly",
    "empresa": "Rohan and Sons"
  }, {
    "id": 45,
    "nombre": "Marie",
    "telefono": "553-647-9827",
    "email": "mmcgonigal18@comcast.net",
    "empresa": "Greenfelder Group"
  }, {
    "id": 46,
    "nombre": "Annette",
    "telefono": "982-419-6916",
    "email": "ascorey19@edublogs.org",
    "empresa": "Towne-Dickinson"
  }, {
    "id": 47,
    "nombre": "Harlene",
    "telefono": "748-837-2316",
    "email": "hdomenichini1a@123-reg.co.uk",
    "empresa": "Cummings-Tillman"
  }, {
    "id": 48,
    "nombre": "Gradeigh",
    "telefono": "177-975-6425",
    "email": "ggartsyde1b@elegantthemes.com",
    "empresa": "Heller, O'Connell and Grady"
  }, {
    "id": 49,
    "nombre": "Karole",
    "telefono": "939-459-4294",
    "email": "kvonderdell1c@auda.org.au",
    "empresa": "Larson, Schmidt and Doyle"
  }, {
    "id": 50,
    "nombre": "Stern",
    "telefono": "428-275-7990",
    "email": "ssurr1d@fema.gov",
    "empresa": "Altenwerth Inc"
  }]
  return clientes
}

function Index() {

  const data=useLoaderData()

  return (
    <div>
      <h1 className="font-bold text-4xl">Clientes</h1>
      <p className="text-xl mt-3">Administra tus clientes</p>

      {
        data.length ? (
          <table 
            className="w-full mt-5 text-white tracking-wider shadow"
          >
            <thead className="table-auto bg-blue-700">
              <tr>
                <th className="text-center">Cliente</th>
                <th className="text-left">Contacto</th>
                <th>Acciones</th>
              </tr>
            </thead>

            <tbody>
              {
                data.map(cliente=>(
                  <Cliente
                    cliente={cliente}
                    key={cliente.id}
                  />
                ))
              }
            </tbody>

          </table>
        ) : <h1>No hay clientes</h1>
      }
    </div>
  )
}

export default Index;

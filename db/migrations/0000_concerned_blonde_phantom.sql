CREATE TYPE "public"."booked_by" AS ENUM('learner', 'instructor');--> statement-breakpoint
CREATE TYPE "public"."test_type" AS ENUM('theory-car', 'practical-car-manual', 'practical-car-automatic', 'practical-motorcycle-a1-mod1', 'practical-motorcycle-a1-mod2', 'practical-motorcycle-a2-mod1', 'practical-motorcycle-a2-mod2', 'practical-motorcycle-a-unrestricted-mod1', 'practical-motorcycle-a-unrestricted-mod2', 'practical-motorcycle-am-moped-mod1', 'practical-motorcycle-am-moped-mod2', 'practical-lorry-c1-offroad', 'practical-lorry-c1-onroad', 'practical-lorry-c1e-offroad', 'practical-lorry-c1e-onroad', 'practical-lorry-c-offroad', 'practical-lorry-c-onroad', 'practical-lorry-c-e-offroad', 'practical-lorry-c-e-onroad', 'practical-lorry-cpc', 'practical-bus-d1-offroad', 'practical-bus-d1-onroad', 'practical-bus-d1e-offroad', 'practical-bus-d1e-onroad', 'practical-bus-d-offroad', 'practical-bus-d-onroad', 'practical-bus-de-offroad', 'practical-bus-de-onroad', 'practical-bus-cpc', 'practical-adipart2', 'practical-adipart3', 'practical-adistandardscheck', 'practical-agricultural', 'practical-road-roller', 'practical-tracked-vehicle', 'practical-pedestrian-controlled-vehicle');--> statement-breakpoint
CREATE TYPE "public"."venue" AS ENUM('Aberdeen North LGV', 'Aberdeen South (Cove)', 'Aberfeldy', 'Abergavenny', 'Aberystwyth (Park Avenue)', 'Airdrie', 'Alness', 'Alnwick', 'Arbroath', 'Ashfield', 'Ashford (Kent)', 'Atherton (Manchester)', 'Aylesbury', 'Ayr', 'Bala', 'Ballater', 'Banbury', 'Banff', 'Bangor', 'Barking (Tanner Street)', 'Barnet (London)', 'Barnsley', 'Barnstaple', 'Barra', 'Barrow In Furness', 'Barry', 'Basildon', 'Basingstoke', 'Bedford', 'Belvedere (London)', 'Benbecula Island', 'Berwick-On-Tweed', 'Beverley LGV', 'Birmingham (Garretts Green)', 'Birmingham (Kings Heath)', 'Birmingham (Kingstanding)', 'Birmingham (Shirley)', 'Birmingham (South Yardley)', 'Bishopbriggs', 'Bishops Stortford', 'Blackburn with Darwen', 'Blackpool', 'Bletchley', 'Blyth', 'Bodmin', 'Bolton (Manchester)', 'Borehamwood (London)', 'Boston', 'Bradford (Heaton)', 'Bradford (Thornbury)', 'Brecon', 'Bredbury (Manchester)', 'Brentwood (London)', 'Bridgend', 'Bridlington', 'Bristol (Avonmouth)', 'Bristol (Kingswood)', 'Brodick (Isle of Arran)', 'Bromley (London)', 'Buckie', 'Burgess Hill', 'Burton on Trent', 'Bury (Manchester)', 'Bury St Edmunds', 'Buxton', 'Callander', 'Camborne', 'Cambridge (Brookmount Court)', 'Campbeltown', 'Canterbury', 'Cardiff (Llanishen)', 'Cardigan', 'Carlisle', 'Carlisle LGV (Cars)', 'Carmarthen', 'Castle Douglas', 'Chadderton', 'Cheetham Hill (Manchester)', 'Chelmsford (Hanbury Road)', 'Cheltenham', 'Chertsey (London)', 'Chester', 'Chesterfield', 'Chichester', 'Chingford (London)', 'Chippenham', 'Chorley', 'Clacton-on-Sea', 'Colchester', 'Coventry', 'Crawley', 'Crewe', 'Crieff', 'Cumnock', 'Darlington', 'Derby (Alvaston)', 'Doncaster', 'Dorchester', 'Dudley', 'Dumbarton', 'Dumfries', 'Dundee', 'Dunfermline (Vine)', 'Dunoon', 'Duns', 'Durham', 'East Kilbride', 'Eastbourne', 'Edinburgh (Currie)', 'Edinburgh (Musselburgh)', 'Elgin', 'Enfield (Brancroft Way)', 'Enfield (Innova Business Park)', 'Erith (London)', 'Exeter', 'Exeter LGV', 'Farnborough', 'Featherstone', 'Folkestone', 'Forfar', 'Fort William', 'Fraserburgh', 'Gairloch', 'Galashiels', 'Gateshead', 'Gillingham', 'Girvan', 'Glasgow (Anniesland)', 'Glasgow (Baillieston)', 'Glasgow (Shieldhall)', 'Gloucester', 'Golspie', 'Goodmayes (London)', 'Gosforth', 'Grangemouth', 'Grantham (Somerby)', 'Grantown-On-Spey', 'Greenford (Horsenden Lane)', 'Greenham', 'Greenock', 'Grimsby Coldwater', 'Guildford', 'Haddington', 'Halifax', 'Hamilton', 'Hartlepool', 'Hastings (Ore)', 'Hawick', 'Heckmondwike', 'Hendon (London)', 'Hereford', 'Herne Bay', 'Hexham', 'Heysham', 'High Wycombe', 'Hinckley', 'Hither Green (London)', 'Hornchurch (London)', 'Horsforth', 'Huddersfield', 'Hull', 'Huntly', 'Inveraray', 'Inverness (Longman Drive)', 'Inverurie', 'Ipswich', 'Irvine', 'Islay Island', 'Isle of Mull', 'Isle of Skye (Portree)', 'Isle of Tiree', 'Isles of Scilly', 'Isleworth (Fleming Way)', 'Kelso', 'Kendal (Oxenholme Road)', 'Kettering', 'Kings Lynn', 'Kingussie', 'Kirkcaldy', 'Knaresborough', 'Kyle of Lochalsh', 'Lanark', 'Launceston', 'Lee On The Solent', 'Leeds', 'Leicester (Cannock Street)', 'Leicester (Wigston)', 'Leighton Buzzard (Stanbridge Road)', 'Lerwick', 'Letchworth', 'Lichfield', 'Lincoln', 'Livingston', 'Llanelli', 'Llantrisant', 'Lochgilphead', 'Loughborough', 'Loughton (London)', 'Louth', 'Lowestoft(Mobbs Way)', 'Ludlow', 'Luton', 'Macclesfield', 'Maidstone', 'Mallaig', 'Malton', 'Melton Mowbray', 'Merthyr Tydfil', 'Middlesbrough', 'Mill Hill (London)', 'Mitcham (London)', 'Monmouth', 'Montrose', 'Morden (London)', 'Nelson', 'Newport (Gwent)', 'Newport (Isle of Wight)', 'Newton Abbot', 'Newton Stewart', 'Newtown', 'Norris Green (Liverpool)', 'Northallerton', 'Northampton', 'Northwich', 'Norwich (Jupiter Road)', 'Norwich (Peachman Way)', 'Nottingham (Chilwell)', 'Nottingham (Colwick)', 'Nuneaton', 'Oban', 'Orkney', 'Oswestry', 'Oxford (Cowley)', 'Paisley', 'Peebles', 'Pembroke Dock', 'Penzance', 'Perth (Arran Road)', 'Peterborough', 'Peterhead', 'Pinner (London)', 'Pitlochry', 'Plymouth', 'Plymouth LGV', 'Pontefract', 'Poole', 'Portsmouth', 'Preston', 'Pwllheli', 'Reading', 'Redditch', 'Redhill Aerodrome', 'Rhyl', 'Rochdale (Manchester)', 'Rotherham', 'Rothesay', 'Rugby', 'Sale (Manchester)', 'Salisbury', 'Scarborough', 'Scunthorpe', 'Sevenoaks', 'Sheffield (Handsworth)', 'Sheffield (Middlewood Road)', 'Shrewsbury', 'Sidcup (London)', 'Skegness', 'Skipton', 'Slough (London)', 'Southall (London)', 'Southampton (Maybush)', 'Southend-on-Sea', 'Southport (Liverpool)', 'Speke (Liverpool)', 'St Albans', 'St Helens (Liverpool)', 'Stafford', 'Steeton', 'Stevenage', 'Stirling', 'Stoke-On-Trent (Cobridge)', 'Stoke-on-Trent (Newcastle-Under-Lyme)', 'Stornoway', 'Stranraer', 'Sunderland', 'Swansea', 'Swindon', 'Taunton', 'Telford', 'Thurso', 'Tilbury', 'Tolworth (London)', 'Tottenham', 'Trowbridge', 'Tunbridge Wells', 'Ullapool', 'Upton', 'Uxbridge (London)', 'Wakefield', 'Wallasey', 'Walton LGV', 'Wanstead (London)', 'Warrington', 'Warwick (Wedgenock House)', 'Watford', 'Watnall', 'Wednesbury', 'Wellingborough', 'West Didsbury (Manchester)', 'West Wickham (London)', 'Weston-super-Mare', 'Whitby', 'Wick', 'Widnes', 'Winchester', 'Wolverhampton', 'Wood Green (London)', 'Worcester', 'Workington', 'Worksop', 'Worthing', 'Wrexham', 'Yeading (London)', 'Yeovil', 'York');--> statement-breakpoint
CREATE TABLE "booking_approvals" (
	"id" uuid PRIMARY KEY NOT NULL,
	"booking_id" uuid NOT NULL,
	"is_approved" boolean DEFAULT false NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"expires_at" timestamp NOT NULL,
	"learner_id" uuid NOT NULL,
	"learner_approved_at" timestamp,
	"instructor_id" uuid NOT NULL,
	"instructor_approved_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "bookings" (
	"id" uuid PRIMARY KEY NOT NULL,
	"booked_by_type" "booked_by" NOT NULL,
	"booked_by_id" uuid NOT NULL,
	"slot_id" uuid NOT NULL,
	"learner_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE "instructors" (
	"id" uuid PRIMARY KEY NOT NULL,
	"user_id" uuid NOT NULL,
	"adi_number" text NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"phone" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "instructor_students" (
	"id" uuid PRIMARY KEY NOT NULL,
	"instructor_id" uuid NOT NULL,
	"student_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE "learners" (
	"id" uuid PRIMARY KEY NOT NULL,
	"user_id" uuid NOT NULL,
	"driving_licence_number" text NOT NULL,
	"theory_test_number" text NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"phone" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "slots" (
	"id" uuid PRIMARY KEY NOT NULL,
	"test_type" "test_type" NOT NULL,
	"venue" "venue" NOT NULL,
	"bookable_from" timestamp NOT NULL,
	"is_cancellation" boolean DEFAULT false NOT NULL,
	"start_time" timestamp NOT NULL,
	"end_time" timestamp NOT NULL
);

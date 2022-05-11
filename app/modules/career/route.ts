import Route from '@ember/routing/route';
import {resolve, hash, Promise} from 'rsvp';

export default class Career extends Route.extend({
  // anything which *must* be merged to prototype here
}) {

  getTimelineEvents() {
    return resolve([
      {
        "background": {
          "color": "#1d2120",
          "opacity": 50,
          "url": null
        },
        "start_date": {
          "year": "1985",
          "month": "",
          "day": "",
          "hour": "",
          "minute": "",
          "second": "",
          "millisecond": "",
          "thumbnail": "",
          "format": ""
        },
        "media": {
          "caption": "",
          "credit": "",
          "link": "",
          "url": "assets/images/timeline/childhood-3.jpg"
        },
        "text": {
          "headline": "Birth",
          "text": "I was born to my wonderful parents in the capital of vibrant and beautiful country Nepal. Most of my childhood was spent with my cousins, grand parents, aunts and uncles. They shaped me to be the person I am now and I am highly grateful and will forever be indebted to them."
        },
        "unique_id": "",
        "group": "Life"
      },
      {
        "background": {
          "color": "#64706c",
          "opacity": 50,
          "url": null
        },
        "start_date": {
          "year": "1993",
          "month": "",
          "day": "",
          "hour": "",
          "minute": "",
          "second": "",
          "millisecond": "",
          "thumbnail": "",
          "format": ""
        },
        "end_date": {
          "year": "2000",
          "month": "",
          "day": "",
          "hour": "",
          "minute": "",
          "second": "",
          "millisecond": "",
          "thumbnail": "",
          "format": ""
        },
        "media": {
          "caption": "Being short meant you would be placed in the front and center of the group, so it kinda had its advantages...sometimes :)",
          "credit": "",
          "link": "",
          "url": "assets/images/timeline/schooling-1.jpg"
        },
        "text": {
          "headline": "Schooling",
          "text": 'I did my 10 years of schooling, 3 of which were in "Arniko Boarding School" and the rest in ' +
            '<a href="https://en.wikipedia.org/wiki/Adarsha_Vidya_Mandir" target="_blank">"Adarsha Vidhya Mandir High School"</a>.' +
            ' Even though I was bit of an introvert back then, I still managed to make life long friends. Most of us have scattered ' +
            'across the globe, but fate would have it that I would meet few of them right here in Boston.'
        },
        "unique_id": "",
        "group": "Education"
      },
      {
        "background": {
          "color": "#677077",
          "opacity": 50,
          "url": "assets/images/timeline/schooling-2.jpg"
        },
        "start_date": {
          "year": "2000",
          "month": "",
          "day": "",
          "hour": "",
          "minute": "",
          "second": "",
          "millisecond": "",
          "thumbnail": "",
          "format": ""
        },
        "end_date": {
          "year": "2002",
          "month": "",
          "day": "",
          "hour": "",
          "minute": "",
          "second": "",
          "millisecond": "",
          "thumbnail": "",
          "format": ""
        },
        "text": {
          "headline": "Proficiency Certificate In Science(Physics)",
          "text": 'I did 2 more years of schooling at "Viswa Niketan Science Campus"'
        },
        "unique_id": "",
        "group": "Education"
      },
      {
        "background": {
          "color": "#8bc34a",
          "opacity": 50,
          "url": null
        },
        "start_date": {
          "year": "2002",
          "month": "",
          "day": "",
          "hour": "",
          "minute": "",
          "second": "",
          "millisecond": "",
          "thumbnail": "",
          "format": ""
        },
        "end_date": {
          "year": "2006",
          "month": "",
          "day": "",
          "hour": "",
          "minute": "",
          "second": "",
          "millisecond": "",
          "thumbnail": "",
          "format": ""
        },
        "media": {
          "caption": "",
          "credit": "",
          "link": "",
          "url": "assets/images/timeline/schooling-3.jpg"
        },
        "text": {
          "headline": "Bachelor of Engineering in Information Technology",
          "text": 'Completed my 4 years undergraduate program in information technology and earned my bachelors degree from pokhara university.'
        },
        "unique_id": "",
        "group": "Education"
      },
      {
        "background": {
          "opacity": 50,
          "url": "assets/images/timeline/schooling-4.jpg"
        },
        "start_date": {
          "year": "2010",
          "month": "02",
          "day": "14",
          "hour": "",
          "minute": "",
          "second": "",
          "millisecond": "",
          "thumbnail": "",
          "format": ""
        },
        "end_date": {
          "year": "2012",
          "month": "12",
          "day": "20",
          "hour": "",
          "minute": "",
          "second": "",
          "millisecond": "",
          "thumbnail": "",
          "format": ""
        },
        "text": {
          "headline": "Master Of Science In Computer Science",
          "text": 'Did my masters in computer science from <a href="http://www.mum.edu/index.html" target="_blank">Maharishi University Of Management</a> and this was the place ' +
            'where I started my new life outside of my home country, loved the fact that how people from opposite corner of the world can come together and build a family ' +
            'in the absence of their real ones and then learned the new style of learning itself(transcendental meditation). This is the place where most of my fondest memories were made ' +
            ' and I will hold on to till my fading days.'

        },
        "unique_id": "",
        "group": "Education"
      },
      {
        "background": {
          "opacity": 50,
          "url": "assets/images/company-logo/worldlink.gif"
        },
        "start_date": {
          "year": "2006",
          "month": "10",
          "day": "01",
          "hour": "",
          "minute": "",
          "second": "",
          "millisecond": "",
          "thumbnail": "",
          "format": ""
        },
        "end_date": {
          "year": "2010",
          "month": "01",
          "day": "20",
          "hour": "",
          "minute": "",
          "second": "",
          "millisecond": "",
          "thumbnail": "",
          "format": ""
        },
        "text": {
          "headline": "SPI Nepal (Formerly Worldlink Technologies Pvt. Ltd.) - Software Engineer",
          "text": 'WorldLink is an experienced software solutions provider with extensive experience in consulting, development and implementation of enterprise applications in areas of ERP, CRM, HRM, Payroll and Pensions. Our experience covers a wide range of industry and market sectors that include government, telecom, BFSI and private businesses. Our services include consulting, application development, product management and maintenance, enterprise application implementation, integration, quality assurance and testing.'

        },
        "unique_id": "4",
        "group": "Work"
      },
      {
        "background": {
          "opacity": 50,
          "url": "assets/images/company-logo/innovate.gif"
        },
        "start_date": {
          "year": "2010",
          "month": "10",
          "day": "18",
          "hour": "",
          "minute": "",
          "second": "",
          "millisecond": "",
          "thumbnail": "",
          "format": ""
        },
        "end_date": {
          "year": "2011",
          "month": "11",
          "day": "15",
          "hour": "",
          "minute": "",
          "second": "",
          "millisecond": "",
          "thumbnail": "",
          "format": ""
        },
        "text": {
          "headline": "Innovate! Inc. - Software Engineer",
          "text": 'Innovate! is an 8(a) certified, “green” business providing geospatial solutions, software engineering, IT security services, management consulting and transformation consulting services. We are passionate about and live consistent with taking care of the planet. Our primary clients are EPA, USGS, USDA, and many state, tribal and US territory environmental departments. Our focus is to drive efficiencies and business results through innovative consulting techniques IT solutions.'

        },
        "unique_id": "2",
        "group": "Work"
      },
      {
        "background": {
          "opacity": 50,
          "url": "assets/images/company-logo/wayfair.jpg"
        },
        "start_date": {
          "year": "2011",
          "month": "12",
          "day": "5",
          "hour": "",
          "minute": "",
          "second": "",
          "millisecond": "",
          "thumbnail": "",
          "format": ""
        },
        "end_date": {
          "year": "2012",
          "month": "03",
          "day": "22",
          "hour": "",
          "minute": "",
          "second": "",
          "millisecond": "",
          "thumbnail": "",
          "format": ""
        },
        "text": {
          "headline": "Wayfair, LLC. - Software Engineer",
          "text": 'Wayfair is a leader in the ecommerce space for things for the home (couches, end tables, lamps, and literally 3.1 million other items) and #51 overall in the ecommerce rankings(2011).'

        },
        "unique_id": "3",
        "group": "Work"
      },
      {
        "background": {
          "opacity": 50,
          "url": "assets/images/company-logo/innovate.gif"
        },
        "start_date": {
          "year": "2012",
          "month": "03",
          "day": "26",
          "hour": "",
          "minute": "",
          "second": "",
          "millisecond": "",
          "thumbnail": "",
          "format": ""
        },
        "end_date": {
          "year": "2013",
          "month": "07",
          "day": "26",
          "hour": "",
          "minute": "",
          "second": "",
          "millisecond": "",
          "thumbnail": "",
          "format": ""
        },
        "text": {
          "headline": "Innovate! Inc. - Software Engineer",
          "text": 'Innovate! is an 8(a) certified, “green” business providing geospatial solutions, software engineering, IT security services, management consulting and transformation consulting services. We are passionate about and live consistent with taking care of the planet. Our primary clients are EPA, USGS, USDA, and many state, tribal and US territory environmental departments. Our focus is to drive efficiencies and business results through innovative consulting techniques IT solutions.'

        },
        "unique_id": "2",
        "group": "Work"
      },
      {
        "background": {
          "opacity": 50,
          "url": "assets/images/company-logo/nielsen.png"
        },
        "start_date": {
          "year": "2013",
          "month": "08",
          "day": "05",
          "hour": "",
          "minute": "",
          "second": "",
          "millisecond": "",
          "thumbnail": "",
          "format": ""
        },
        "end_date": {
          "year": (new Date()).getFullYear(),
          "month": ((new Date()).getMonth() + 1),
          "day": (new Date()).getDate(),
          "hour": "",
          "minute": "",
          "second": "",
          "millisecond": "",
          "thumbnail": "",
          "format": ""
        },
        "text": {
          "headline": "NielsenIQ - Lead Software Engineer",
          "text": 'NielsenIQ is a leading global information and measurement company that enables companies to understand consumers and consumer behavior. Nielsen measures and monitors what consumers watch (programming, advertising) and what consumers buy (categories, brands, products) on a global and local basis. The company has a presence in approximately 100 countries spread across Africa, Asia, Australia, Europe, Middle East, North America, South America and Russia.'

        },
        "unique_id": "1",
        "group": "Work"
      }
    ]);
  }

  getTechnologiesUsed() {
    return resolve([
      {
        "name": "Cloud",
        "children": [
          {"name": "Azure WebApp"},
          {"name": "Azure Batch"},
          {"name": "Azure Service Bus"},
          {"name": "Azure Event Hub"},
          {"name": "Azure Storage"},
          {"name": "Azure Pub Sub"}
        ]
      },
      {
        "name": "Other",
        "children": [
          {"name": "OOP"},
          {"name": "MVC"},
          {"name": "Design Pattern"},
          {"name": "Phonegap"}
        ]
      },
      {
        "name": "Language",
        "children": [
          {"name": "Groovy/Grails"},
          {"name": "Java", "children": [{"name": "JSP"}, {"name": "Servlets"}]},
          {"name": "PHP", "children": [{"name": "Codeigniter"}, {"name": "Drupal"}]},
          {"name": "Python", "children": [{"name": "django"}]},
          {"name": "NodeJS", "children": [{"name": "Express"}]}
        ]
      },
      {
        "name": "Web Dev",
        "children": [
          {
            "name": "Javascript",
            "children": [
              {
                "name": "EmberJS",
                "children": []
              }, {
                "name": "Jquery",
                "children": []
              }, {
                "name": "Visualization",
                "children": [
                  {"name": "D3"},
                  {"name": "InfoVis"},
                  {"name": "Google Charts"},
                  {"name": "Simile Exhibit"}
                ]
              }, {
                "name": "OpenLayers",
                "children": []
              }, {
                "name": "Ajax",
                "children": []
              }
            ]
          }, {
            "name": "CSS",
            "children": [
              {"name": "SASS"},
              {"name": "LESS"},
              {"name": "Bootstrap"}
            ]
          }, {
            "name": "XML",
            "children": [{"name": "XHTML"}]
          }
        ]
      },
      {
        "name": "DB",
        "children": [
          {
            "name": "Mongo DB",
            "children": []
          },
          {
            "name": "Oracle",
            "children": []
          }, {
            "name": "MsSQL",
            "children": []
          }, {
            "name": "Postgres",
            "children": []
          }, {
            "name": "MySQL",
            "children": []
          }
        ]
      }
    ]);
  }

  getExperiences() {
    return resolve([
      {
        'id': "1",
        'name': 'NielsenIQ',
        'roles': [
          'Design and architect new single page web application',
          'Develop and maintain key software system features',
          'Explore and evaluate new technologies to advance SaaS platform in support of business development opportunities',
          'Collaborate with team that leads software design and development projects from inception to completion',
          'Work with product management to gather business requirements, analyze solutions, and develop business applications and testing'
        ],
        'projects': [
          {
            'name': 'HUGS',
            'tasks': [
              'Was part of the core engineering team to develop survey programming application for Nielsen, that significantly brought down the time an analyst takes to program a survey thereby saving large amounts of time and cost involved in programming these surveys.',
              'Made client side testing more robust by introducing api mocking library, built wrapper library around it for streamlined integration testing',
              'Performed regular updates on the underlying client side technology and components. Documented, communicated the new convention and changes in order to future proof the application.',
              'Designed solution to configure and mock APIs to streamline acceptance testing'
            ]
          },
          {
            'name': 'Automated Interactive Report',
            'tasks': [
              'Devised robust client side architecture to support modularized reporting system for various solutions',
              'Built reporting module to display outcome of fielded study with interactive charting and filtering features',
              'Contributed to the core internal library used to generate charts, refactored library to introduce concept of shape component which can be reused easily and helps simplify generating more complex charts',
              'Performed regular updates on the underlying client side technology and components. Documented, communicated the new convention and changes.',
              'Link: https://nielseniq.com/global/en/solutions/quick-predict/'
            ]
          },
          {
            'name': 'Screen Capture Tool',
            'tasks': [
              'Overcame the short comings of client side screen capture tool(font issues, inconsistent output based on browser, incorrect SVG capture etc.) by ' +
              'designing and developing a server side screen capturing solution using NodeJS server and puppeteer',
              'Implemented and added easily configurable analytics/security/logging measures to consume and analyze the service usages',
            ]
          },
          {
            'name': 'LPO (Line & Price Optimization)',
            'tasks': [
              'Lead team to migrate classic application which was based on ms excel and VB into modern web application architecture and deployed the application to production leveraging azure cloud infrastructures. Migrated code base on git hub enterprise and facilitated CI/CD by writing github workflows.',
              'Worked on multiple sibling applications to enable new offering of LPO product within our core SAAS application(STUDIO) for eg: added components to our surveying tool to enable supporting survey questions specifically designed for LPO, leveraged azure batch to efficiently scale and run large no of long running analytics processes.',
              'Initiated the process of and contributed to upgrading the client side tech stack for our survey application(SPIRIT) which is an application used to bring in participants and take surveys across all of our products. Also added functionality to efficiently sync larger studies to the survey application.',
              'Product details can be found here : https://nielseniq.com/global/en/solutions/line-and-price-optimizer/'
            ]
          },
        ]
      },
      {
        'id': "2",
        'name': 'Innovate! Inc.',
        'roles': [
          'Collecting software requirements and developing both front and back end logic',
          'Deploying and maintaining applications',
          'Designing and customizing software for client use with the aim of optimizing operational efficiency',
          'Analyzing and designing databases within an application area, working both individually and coordinating database development as part of team'
        ],
        'projects': [
          {
            'name': 'Recycle City Game',
            'tasks': [
              'Prototyped an interactive recycle city game targeting both mobile devices and browsers for young audience to teach importance of recycling',
              'Abstracted javascript core logic so the game can be played in mobile devices using phonegap API and also in browser with minimal code changes',
              'Collaborated with the client to design roles and game play strategies'
            ]
          },
          {
            'name': 'Innovate Portal',
            'tasks': [
              'Installed, configured and built intranet portal with drupal',
              'Wrote custom modules to add features to portal such as implementing cloud drive search using apache solr, portal usage report/charts, employee of the month widget etc',
              'Modified some pre-existing modules to accommodate custom requirements that are not provided out of the box by drupal'
            ]
          },
          {
            'name': 'EDG',
            'tasks': [
              'Added/modified administrative functionality in the underlying geoportal framework for EDG(Environmental Development Group). Eg. added concept of collection and created additional pages to create and manage collection and collection members',
              'Added visualization mechanism to show the relationship between collection and members metadata resources in a tree like structure using "JavaScript InfoVis Toolkit"',
              'Modified lucene index and geoportal search API so that it shows parent/child relationship between the metadata resources in their search result'
            ]
          },
          {
            'name': 'DFE',
            'tasks': [
              'Built web tool that allows visitors to see and filter out products that are labeled chemically safe for usage from the government',
              'Initially we had used SIMILE EXHIBIT for this application but the performance degraded ie7 for larger datasets and we were limited to working with only around 800 records without getting the "slow script" error.' +
              'So I worked on my own version of exhibit that mimicked the simile exhibit functionality within short period of 3 days which overcame these issues',
              'Customized functionality of the application to enhance search experience for the end users'
            ]
          },
          {
            'name': 'Mapping infrastructure for ROE',
            'tasks': [
              'Built web tool that allowed visitors to see various indicators informing on national conditions, air, water, land and ecological systems using bing and arcgis maps ',
              'Create web service that extracts information from ArcGis server and render interactive maps/layers using OpenLayers API',
              'Built javascript functionality that hides inner detail of OpenLayers API to provide simple and standard interface to end users to manipulate and customize maps',
              'Added custom controls to OpenLayers to make the maps interactive and display information in user friendly manner',
              'Built logic to circumvent various browser incompatibility issues'
            ]
          },
          {
            'name': 'Metrics',
            'tasks': [
              'Built web based interactive reporting tool that was developed for EPA for tracking information regarding various resource usage.',
              'Built tools to read information from external web services and search the content by applying various regular expression pattern matches to extract out relevant information and store them.',
              'Built tools to efficiently parse complex metadata stored in XML format to create XPATH on the fly',
              'Built web application using exhibit to provide and filter out information regarding various resources and its usage based on location and various other criteria. Eg: type of resource, nature of publication etc.',
              'Hand coded and designed all the web content and efficiently managed page layout to include charts to increase the visibility to critical information'
            ]
          },
          {
            'name': 'EME(EPA Metadata Editor)',
            'tasks': [
              'Customized and added new tools/extensions to the pre-existing web application.',
              'Added multiple json based web services using java servlets and JSP',
              'Used exhibit application in conjunction with Openlayer API to provide highly flexible and informative interface to increase visibility of information regarding usage of EME. Eg: pin point the last known user\'s location in Map, filter information out via various filter criteria etc.',
              'Modified exhibit library to add exporters and other functionality as per client requirement'
            ]
          },
          {
            'name': 'MQRS(Moratorium Qualification Review System)',
            'tasks': [
              'Part of core development team to build a system to qualify an applicant to participate in limited access fishery and also manage their permits',
              'Identified the data issues associated with the legacy system, devised and implemented solutions to fix those issues via automated scripts',
              'Performed ETL on mqr related data and migrated them into new model maintaining the integrity of data',
              'Helped a colleague to built automation system to automate dealer reporting system using python, cx-oracle and other libraries',
              'Developed an interim web application to give end users the view of data represented in new model, and provided tools to identify the data which goes against business rules',
              'Implemented and started “codeigniter” framework, modified it according to the client’s need',
              'Implemented exhibit application to provide graphical representation of the data to better understand/represent the nature of data at various time frame(timeline)',
              'Participated in model/business rule refinement discussion and implemented them'
            ]
          }
        ]
      },
      {
        'id': "3",
        'name': 'Wayfair, LLC.',
        'roles': [
          'Building and maintaining web-based ecommerce applications, working with several large and complex SQL databases.',
          'Assisting with the development of software algorithms to streamline back end business workflow',
          'Producing robust, elegant and scalable software that performs well under high load, being creative and resourceful to solve complex business challenges.',
          'Understanding business needs, risks and making appropriate technology decisions'
        ],
        'projects': []
      },
      {
        'id': "4",
        'name': 'Worldlink Technologies Pvt. Ltd.',
        'roles': [
          'Researching and developing various commercial projects in web environment',
          'Designing architecture of the software, coding, handling database management system',
          'Debugging issues and documenting the work flow'
        ],
        'projects': [
          {
            'name': 'ENDEAVOR',
            'tasks': [
              'Worked as part of team responsible for designing and developing flagship product “Endeavor”, a complete human resource management system',
              'Designed and developed Personnel Information Management Module to track and maintain all HR employee information including education and service, as well as generate payroll.',
              'Improved ability to profile optimal candidates for specific jobs based on unique requirement criteria, developing comprehensive Recruitment Management System.',
              'Analyzed, designed, and forwarded for development Training Module.',
              'Integrated all modules under single framework while maintaining 100% adherence to standards.',
              'Overcame office obstacle of Ajax calls blocking each other due to sharing of same object, developing new Ajax framework.',
              'Converted the static menu to dynamic menu system for intranet portal',
              'Created functions/procedures/packages and other plSql related tasks in oracle to optimize the code by transferring the DML task/logics from PHP to oracle',
              'Wrote front-end (PHP, HTML) and backend (Oracle) logics.'
            ]
          },
          {
            'name': 'PERSONAL AND PENSION INFORMATION SYSTEM',
            'tasks': [
              'Devised and implemented innovative solution to simplify organization of vast amount of HR Personnel Information for Ministry of General Administration',
              'Designed and developed Intranet portal, Personnel Information Management Module and Workforce Management Module.',
              'Reduced load time, creating collapsible hierarchy similar to Windows File Explorer, and incorporated Ajax with search option.',
              'Cut development time and simplified work for development team by creating form validation tool able to generate client-side validation codes for corresponding server-side validations calls.',
              'Instrumental in generating additional business, co-developing and leading modification of system in accordance with client’s request and development requirements',
              'Handpicked subsequently to solely develop variant of this project in Department of Police Personnel Records; completed in short 3-month duration.',
              'Developed an enhanced hierarchical version of menu system that could be coupled with the security system to more easily handle the security',
              'Wrote the front end logic, GUI using PHP, HTML and CSS and back end logics in oracle 10g',
              'Developed a nifty JavaScript tool for searching and selecting element from select box with large number of options easily that greatly improved the user experience when browsing through large select options'
            ]
          },
          {
            'name': 'CREDIT INFORMATION SYSTEM',
            'tasks': [
              'Maximized ability to determine credibility of potential borrowers, developing Credit Information System to compile credit history, and make data available to other entities on demand.',
              'Built forms to capture and validate user input, created templates with smarty, developed reports, and implemented menu-based security module.',
              'Researched and implemented new paging system',
              'Wrote the front end and back end logic for the software'
            ]
          }
        ]
      }
    ]);
  }

  model() {
    return hash({
      'lifeEvents': this.getTimelineEvents(),
      'technologiesUsed': this.getTechnologiesUsed(),
      'experiences': this.getExperiences()
    });
  }
}

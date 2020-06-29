export interface IRecord {
    id?: string
    doi?: string
    institution_key?: string
    metadata?: {
        publisher?: string,
        publicationYear?: string,
        creators?: []
    }
    validated?: boolean
}




// {
//     "id": "158a88fa-317f-462f-8fd3-21b734e5e13a",
//     "pid": "10.5072/example-full",
//     "doi": "10.5072/EXAMPLE-FULL",
//     "institution_key": "saeon",
//     "collection_key": "saeon-test-metadata",
//     "schema_key": "saeon-odp-4-2",
//     "metadata": {
//         "publisher": "DataCite",
//         "publicationYear": "2014",
//         "creators": [
//             {
//                 "nameType": "Personal",
//                 "nameIdentifiers": [
//                     {
//                         "nameIdentifierScheme": "ORCID",
//                         "schemeURI": "http://orcid.org/",
//                         "nameIdentifier": "0000-0001-5000-0007"
//                     }
//                 ],
//                 "name": "surname, name",
//                 "familyName": "Miller",
//                 "affiliations": [
//                     {
//                         "affiliation": "DataCite"
//                     }
//                 ],
//                 "givenName": "Elizabeth"
//             }
//         ],
//         "immutableResource": {
//             "checksumAlgorithm": "md5",
//             "resourceDescription": "A complete example of a DataCite 4.2-compliant XML metadata record",
//             "resourceURL": "https://schema.datacite.org/meta/kernel-4.2/example/datacite-example-full-v4.2.xml",
//             "resourceChecksum": "1f4d92f643bf831131f7bd26bdb6d3e3",
//             "resourceName": "Full DataCite XML Example"
//         },
//         "resourceType": {
//             "resourceType": "XML",
//             "resourceTypeGeneral": "Software"
//         },
//         "rightsList": [
//             {
//                 "rightsURI": "http://creativecommons.org/publicdomain/zero/1.0/",
//                 "rightsIdentifier": "CC0 1.0",
//                 "rightsIdentifierScheme": "SPDX",
//                 "schemeURI": "https://spdx.org/licenses/",
//                 "rights": "CC0 1.0 Universal"
//             }
//         ],
//         "dates": [
//             {
//                 "date": "2017-09-13",
//                 "dateInformation": "Updated with 4.2 properties",
//                 "dateType": "Updated"
//             },
//             {
//                 "date": "2018-09-21",
//                 "dateType": "Valid"
//             }
//         ],
//         "alternateIdentifiers": [
//             {
//                 "alternateIdentifierType": "URL",
//                 "alternateIdentifier": "https://schema.datacite.org/meta/kernel-4.2/example/datacite-example-full-v4.2.xml"
//             }
//         ],
//         "titles": [
//             {
//                 "title": "This is a title"
//             }
//         ],
//         "descriptions": [
//             {
//                 "descriptionType": "Abstract",
//                 "description": "XML example of all DataCite Metadata Schema v4.2 properties."
//             }
//         ],
//         "identifier": {
//             "identifier": "10.5072/example-full",
//             "identifierType": "DOI"
//         },
//         "subjects": [
//             {
//                 "subjectScheme": "system",
//                 "schemeURI": "http://www.saeon.ac.za",
//                 "subject": "keyword"
//             }
//         ]
//     },
//     "validated": true,
//     "errors": {},
//     "state": "captured"
// }
// ]
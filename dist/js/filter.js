var l__Distinct__Genres__Array = [], l__Distinct__Countries__Array = [], l__Distinct__Years__Array = [];

function fillFilters() {
    
    getGenres()
    getCountries();
    getYears();

    fillGenreDropdown();
    fillCountryDropdown();
    fillYearDropdown();
}

function getGenres() {
    let l__Genres__By__Film = [...new Set(g__Films.map(l__Films => l__Films.genre))];
    let l__Genres = [];
    for (l__Genres__By__Film__Index in l__Genres__By__Film) {
        let l__Genres__Aux = [...new Set(l__Genres__By__Film[l__Genres__By__Film__Index].map(l__Genre => l__Genre.name))];
        for (l__Genres__Index in l__Genres__Aux) {
            l__Genres.push(l__Genres__Aux[l__Genres__Index]);
        }
    }
    l__Distinct__Genres__Array = [...new Set(l__Genres)].sort((p__First__Genre, p__Second__Genre) => {
        let l__First__Genre = p__First__Genre.toLowerCase();
        let l__Second__Genre = p__Second__Genre.toLowerCase();
        if (l__First__Genre < l__Second__Genre) return -1;
        if (l__First__Genre > l__Second__Genre) return 1;
        return 0;
    });
}

function getCountries() {
    let l__Countries__By__Film = [...new Set(g__Films.map(l__Films => l__Films.countryOfOrigin))];
    let l__Countries = [];
    for (l__Countries__By__Film__Index in l__Countries__By__Film) {
        l__Countries.push(l__Countries__By__Film[l__Countries__By__Film__Index].name);
    }
    l__Distinct__Countries__Array = [...new Set(l__Countries)].sort((p__First__Country, p__Second__Country) => {
        let l__First__Country = p__First__Country.toLowerCase();
        let l__Second__Country = p__Second__Country.toLowerCase();
        if (l__First__Country < l__Second__Country) return -1;
        if (l__First__Country > l__Second__Country) return 1;
        return 0;
    });
}

function getYears() {
    let l__Years__By__Film = [...new Set(g__Films.map(l__Films => l__Films.releasedEvent))];
    let l__Years = [];
    for (l__Years__By__Film__Index in l__Years__By__Film) {
        l__Years.push(l__Years__By__Film[l__Years__By__Film__Index].name);
    }
    l__Distinct__Years__Array = [...new Set(l__Years)].sort((p__First__Year, p__Second__Year) => {
        return p__First__Year - p__Second__Year;
    });
}

function fillGenreDropdown() {
    let l__Advanced__Search__Genre__Select = document.getElementById("advancedSearchGenreInput");

    for (l__Genre in l__Distinct__Genres__Array) {
        // Create option
        let l__Genre__Option = document.createElement("option");
        l__Genre__Option.textContent = l__Distinct__Genres__Array[l__Genre];
        l__Genre__Option.setAttribute("value", l__Distinct__Genres__Array[l__Genre]);
        // Append option
        l__Advanced__Search__Genre__Select.appendChild(l__Genre__Option);
    }
}

function fillCountryDropdown() {
    let l__Advanced__Search__Country__Select = document.getElementById("advancedSearchCountryInput");

    for (l__Country in l__Distinct__Countries__Array) {
        // Create option
        let l__Country__Option = document.createElement("option");
        l__Country__Option.textContent = l__Distinct__Countries__Array[l__Country];
        l__Country__Option.setAttribute("value", l__Distinct__Countries__Array[l__Country]);
        // Append option
        l__Advanced__Search__Country__Select.appendChild(l__Country__Option);
    }
}

function fillYearDropdown() {
    let l__Advanced__Search__Year__Select = document.getElementById("advancedSearchYearInput");

    for (l__Year in l__Distinct__Years__Array) {
        // Create option
        let l__Year__Option = document.createElement("option");
        l__Year__Option.textContent = l__Distinct__Years__Array[l__Year];
        l__Year__Option.setAttribute("value", l__Distinct__Years__Array[l__Year]);
        // Append option
        l__Advanced__Search__Year__Select.appendChild(l__Year__Option);
    }
}

function handleBasicSearch() {
    let l__Form__Data = $("#basicSearchForm").serializeArray();

    console.log(l__Form__Data)

    let l__Filtered = false;

    let l__Filtered__Films = [];
    if (l__Form__Data[0].value != '') {
        l__Filtered__Films = [...new Set(g__Films.filter(l__Film => l__Film.name.toLowerCase().includes(l__Form__Data[0].value.toLowerCase())))];
        l__Filtered = true;
    }

    clearPosters();

    if (l__Filtered) generatePosters(l__Filtered__Films);
    else generatePosters(g__Films);

    document.getElementById("basicSearchForm").reset();
}

function handleAdvancedSearch() {
    let l__Form__Data = $("#advancedSearchForm").serializeArray();

    let l__Filtered = false;

    let l__Filtered__Films = [];

    if (l__Form__Data[0].value != '') {
        l__Filtered__Films = [...new Set(g__Films.filter(l__Film => l__Film.name.toLowerCase().includes(l__Form__Data[0].value.toLowerCase())))];
        l__Filtered = true;
    }

    if (l__Form__Data[1].value != 'None') {
        if (l__Filtered) {
            for (l__Film in l__Filtered__Films) {
                console.log(l__Filtered__Films[l__Film]);
                for (l__Genre in l__Filtered__Films[l__Film].genre) {
                    if (l__Filtered__Films[l__Film].genre[l__Genre].name == l__Form__Data[1].value) {
                        l__Filtered__Films.push(l__Filtered__Films[l__Film]);
                    }
                }
            }
            l__Filtered__Films = [...new Set(l__Filtered__Films)];
        } else {
            for (l__Film in g__Films) {
                console.log(g__Films[l__Film]);
                for (l__Genre in g__Films[l__Film].genre) {
                    if (g__Films[l__Film].genre[l__Genre].name == l__Form__Data[1].value) {
                        l__Filtered__Films.push(g__Films[l__Film]);
                    }
                }
            }
            l__Filtered__Films = [...new Set(l__Filtered__Films)];
            l__Filtered = true;
        }
    }

    if (l__Form__Data[2].value != 'None') {
        if (l__Filtered) l__Filtered__Films = [...new Set(l__Filtered__Films.filter(l__Film => l__Film.releasedEvent.name == l__Form__Data[2].value))];
        else {
            l__Filtered__Films = [...new Set(g__Films.filter(l__Film => l__Film.releasedEvent.name == l__Form__Data[2].value))];
            l__Filtered = true;
        }
    }

    if (l__Form__Data[3].value != 'None') {
        if (l__Filtered) l__Filtered__Films = [...new Set(l__Filtered__Films.filter(l__Film => l__Film.countryOfOrigin.name == l__Form__Data[3].value))];
        else {
            l__Filtered__Films = [...new Set(g__Films.filter(l__Film => l__Film.countryOfOrigin.name == l__Form__Data[3].value))];
            l__Filtered = true;
        }
    }

    clearPosters();

    if (l__Filtered) generatePosters(l__Filtered__Films);
    else generatePosters(g__Films);

    document.getElementById("advancedSearchForm").reset();
}
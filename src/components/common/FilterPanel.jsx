import React, { useState } from 'react';
import { ChevronDown, Search, Filter } from 'lucide-react';

export default function SearchFilterComponent({
    themes = [],
    regions = [],
    sectors = [],
    years = [],
    onSearch = () => {},
    onFilter = () => {},
    onReset = () => {},
    placeholder = "Search by keyword"
}) {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedTheme, setSelectedTheme] = useState('');
    const [selectedRegion, setSelectedRegion] = useState('');
    const [selectedSector, setSelectedSector] = useState('');
    const [selectedYear, setSelectedYear] = useState('');
    const [showFilters, setShowFilters] = useState(false);

    const handleSearch = () => {
        onSearch({
            searchTerm,
            theme: selectedTheme,
            region: selectedRegion,
            sector: selectedSector,
            year: selectedYear
        });
    };

    const handleReset = () => {
        setSearchTerm('');
        setSelectedTheme('');
        setSelectedRegion('');
        setSelectedSector('');
        setSelectedYear('');
        onReset();
    };

    const toggleFilters = () => {
        setShowFilters(!showFilters);
    };

    const hasFilterData = themes.length > 0 || regions.length > 0 || sectors.length > 0 || years.length > 0;
    const hasActiveFilters = selectedTheme || selectedRegion || selectedSector || selectedYear;

    return (
        <div className="w-full max-w-[1416px] mx-auto p-4 space-y-4 lg:px-0">
            {/* Search Bar and Buttons Row */}
            <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center">
                {/* Search Input */}
                <div className="relative flex-grow lg:flex-grow-0 lg:w-80">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
                    <input
                        type="text"
                        placeholder={placeholder}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full h-[45px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pl-12 pr-4 text-black"
                        onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                    />
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <button
                        onClick={handleSearch}
                        className="px-8 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors font-medium whitespace-nowrap"
                    >
                        Search
                    </button>

                    {/* Filters Button - Only show if there's filter data */}
                    {hasFilterData && (
                        <button
                            onClick={toggleFilters}
                            className={`px-8 py-3 rounded-full transition-colors font-medium whitespace-nowrap flex items-center gap-2 ${
                                showFilters || hasActiveFilters
                                    ? 'bg-[#3091CA] text-white hover:bg-[#3091CA]'
                                    : 'bg-white text-gray-800 border border-gray-300 hover:bg-gray-50'
                            }`}
                        >
                            Filters
                        </button>
                    )}
                </div>
            </div>

            {/* Filter Dropdowns - Show when toggled or when filters are active */}
            {(showFilters || hasActiveFilters) && hasFilterData && (
                <div className="max-w-4xl bg-white p-4 lg:px-0">
                    <div className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {/* Theme Dropdown */}
                            {themes.length > 0 && (
                                <div className="relative">
                                    <select
                                        value={selectedTheme}
                                        onChange={(e) => setSelectedTheme(e.target.value)}
                                        className="w-full h-[48px] appearance-none bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer text-gray-700 pl-3 pr-10"
                                    >
                                        <option value="" className="text-gray-500">Theme</option>
                                        {themes.map((theme, index) => (
                                            <option key={index} value={theme} className="text-gray-700">
                                                {theme}
                                            </option>
                                        ))}
                                    </select>
                                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                                </div>
                            )}

                            {/* Region Dropdown */}
                            {regions.length > 0 && (
                                <div className="relative">
                                    <select
                                        value={selectedRegion}
                                        onChange={(e) => setSelectedRegion(e.target.value)}
                                        className="w-full h-[48px] appearance-none bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer text-gray-700 pl-3 pr-10"
                                    >
                                        <option value="" className="text-gray-500">Region</option>
                                        {regions.map((region, index) => (
                                            <option key={index} value={region} className="text-gray-700">
                                                {region}
                                            </option>
                                        ))}
                                    </select>
                                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                                </div>
                            )}

                            {/* Sector Dropdown */}
                            {sectors.length > 0 && (
                                <div className="relative">
                                    <select
                                        value={selectedSector}
                                        onChange={(e) => setSelectedSector(e.target.value)}
                                        className="w-full h-[48px] appearance-none bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer text-gray-700 pl-3 pr-10"
                                    >
                                        <option value="" className="text-gray-500">Sector</option>
                                        {sectors.map((sector, index) => (
                                            <option key={index} value={sector} className="text-gray-700">
                                                {sector}
                                            </option>
                                        ))}
                                    </select>
                                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                                </div>
                            )}

                            {/* Year Dropdown */}
                            {years.length > 0 && (
                                <div className="relative">
                                    <select
                                        value={selectedYear}
                                        onChange={(e) => setSelectedYear(e.target.value)}
                                        className="w-full h-[48px] appearance-none bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer text-gray-700 pl-3 pr-10"
                                    >
                                        <option value="" className="text-gray-500">Year</option>
                                        {years.map((year, index) => (
                                            <option key={index} value={year} className="text-gray-700">
                                                {year}
                                            </option>
                                        ))}
                                    </select>
                                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                                </div>
                            )}
                        </div>

                        {/* Apply and Reset Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-start pt-2">
                            <button
                                onClick={handleSearch}
                                className="px-8 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors font-medium whitespace-nowrap"
                            >
                                Apply
                            </button>
                            <button
                                onClick={handleReset}
                                className="px-8 py-3 bg-white text-gray-800 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors font-medium whitespace-nowrap"
                            >
                                Reset
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
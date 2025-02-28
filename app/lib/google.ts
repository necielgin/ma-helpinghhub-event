"use server"

import { Client, PlaceAutocompleteType } from '@googlemaps/google-maps-services-js';

const googleMapsClient = new Client({});

const apiKey = process.env.GOOGLE_MAPS_API_KEY;

export const autoComplete = async (input: string) => {
    try {

    const response = await googleMapsClient.placeAutocomplete({
        params: {
            input,
            key: apiKey!,
            types: PlaceAutocompleteType.cities,
            components: ['country:us'],
        },
    });
    return response.data.predictions;
    } catch (error) {
        console.error('Error fetching autocomplete data:', error);
        return [];
    }
}
import { Meta, StoryObj } from '@storybook/react';
import WeatherWidget from './WeatherWidget';

const meta: Meta<typeof WeatherWidget> = {
  component: WeatherWidget,
  title: 'molecules/WeatherWidget',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const WeatherWidgetBase: Story = {
  args: {
    weather: {
      current: {
        condition: {
          icon: 'https://cdn.weatherapi.com/weather/64x64/night/113.png',
          text: 'Clear',
        },
        temp_c: 10,
      },
      forecast: {
        forecastday: [
          {
            date: '2024-06-05',
            day: {
              maxtemp_c: 13.2,
              mintemp_c: 8.6,
              avgtemp_c: 10.6,
              condition: {
                icon: 'https://cdn.weatherapi.com/weather/64x64/night/113.png',
                text: 'Clear',
              },
            },
          }
        ],
      },
      location: {
        localtime: '2024-06-05 12:00',
        name: 'Tokyo',
      },
    },
  },
};

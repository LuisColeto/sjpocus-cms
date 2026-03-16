import type { Schema, Struct } from '@strapi/strapi';

export interface ButtonsNavigationButton extends Struct.ComponentSchema {
  collectionName: 'components_buttons_navigation_buttons';
  info: {
    displayName: 'Navigation Button';
    icon: 'cursor';
  };
  attributes: {
    button_text: Schema.Attribute.String;
    button_url: Schema.Attribute.String;
  };
}

export interface ContactContactLink extends Struct.ComponentSchema {
  collectionName: 'components_contact_contact_links';
  info: {
    displayName: 'Contact Link';
    icon: 'link';
  };
  attributes: {
    description: Schema.Attribute.String;
    href: Schema.Attribute.String & Schema.Attribute.Required;
    icon_name: Schema.Attribute.Enumeration<
      [
        'Phone',
        'Mail',
        'AtSign',
        'Instagram',
        'Linkedin',
        'Youtube',
        'Facebook',
      ]
    >;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface GalleryGalleryImage extends Struct.ComponentSchema {
  collectionName: 'components_gallery_gallery_images';
  info: {
    displayName: 'Gallery Image';
    icon: 'picture';
  };
  attributes: {
    album_images: Schema.Attribute.Media<'images', true>;
    city: Schema.Attribute.String;
    date: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface LinksLink extends Struct.ComponentSchema {
  collectionName: 'components_links_links';
  info: {
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    link_text: Schema.Attribute.String;
    link_url: Schema.Attribute.String;
  };
}

export interface SlidesHeroSlide extends Struct.ComponentSchema {
  collectionName: 'components_slides_hero_slides';
  info: {
    displayName: 'Hero Slide';
    icon: 'picture';
  };
  attributes: {
    cta_label: Schema.Attribute.String;
    cta_secondary_label: Schema.Attribute.String;
    cta_secondary_url: Schema.Attribute.String;
    cta_url: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    tagline: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface StatsStatItem extends Struct.ComponentSchema {
  collectionName: 'components_stats_stat_items';
  info: {
    displayName: 'Stat Item';
    icon: 'chartBar';
  };
  attributes: {
    icon_name: Schema.Attribute.Enumeration<
      ['Users', 'MapPin', 'ShieldCheck', 'Award', 'BookOpen', 'Star']
    >;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    suffix: Schema.Attribute.String;
    value: Schema.Attribute.Integer & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'buttons.navigation-button': ButtonsNavigationButton;
      'contact.contact-link': ContactContactLink;
      'gallery.gallery-image': GalleryGalleryImage;
      'links.link': LinksLink;
      'slides.hero-slide': SlidesHeroSlide;
      'stats.stat-item': StatsStatItem;
    }
  }
}

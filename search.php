<?php

get_header();

?>

<div class="x-main full" role="main">
    <header class="search-header">
        <h1 class="search-header__headline">Search Results</h1>
        <? echo '<span class="search-header__subheadline">You searched for
            &ldquo;' . esc_html(get_search_query(false)) . '&rdquo;
            </span>' ?>
    </header>
    <section class="results">
        <?php while (have_posts()) : the_post(); ?>
            <article id="post-<?php the_ID(); ?>" <?php post_class('the-post'); ?>>
                <figure class="the-post__featured-image">
                    <? if (has_post_thumbnail()) {
                        the_post_thumbnail('full-width', ['style' => 'object-fit:contain;', 'width' => 'auto']);
                    }; ?>
                </figure>
                <div class="the-post__content">
                    <h2 class="the-post__title">
                        <? the_title() ?>
                    </h2>
                    <span class="the-post__excerpt">
                        <? the_excerpt(); ?>
                    </span>
                    <a href="<? the_permalink(); ?>" class="btn btn-secondary">Read More</a>
                </div>
            </article>
        <?php endwhile; ?>
    </section>
</div>
<?php get_footer(); ?>
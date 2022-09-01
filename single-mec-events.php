<?php

// =============================================================================
// Modern Events Calendar Single, based on (No Container | Header, Footer)
// =============================================================================

get_header();
?>

<div class="x-main full" role="main">
    <?php while (have_posts()) : ?>
    <?
        the_post();
        $single = new MEC_skin_single();
        $single_event_main = $single->get_event_mec(get_the_ID());
        $single_event_obj = $single_event_main[0];
        $tags = get_the_tags();
        ?>
    <aside class="mec-breadcrumbs x-container max width">
        <? $single->display_breadcrumb_widget(get_the_ID()); ?>
    </aside>
    <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
        <div class="the-event">
            <figure class="the-event__image">
                <? the_post_thumbnail('full'); ?>
            </figure>
            <aside class="the-event__meta the-event-meta">
                <div class="the-event-meta__date">
                    <? $single->display_date_widget($single_event_obj); ?>
                </div>
                <div class="the-event-meta__time">
                    <? $single->display_time_widget($single_event_obj); ?>
                </div>
                <? if ($tags) : ?>
                <div class="the-event-meta__tags">
                    <h4>Tags: </h4>
                    <ul class="the-event-meta__tags-list">
                        <? foreach ($tags as $tag) : ?>
                        <? echo "<li><a href='$tag->slug'>$tag->name</a></li>"; ?>
                        <? endforeach; ?>
                    </ul>
                </div>
                <? endif; ?>
            </aside>
            <h1 class="the-event__title">
                <? the_title(); ?>
            </h1>
            <section class="the-event__content">
                <? the_content(); ?>
            </section>
            <div class="the-event__register">
                <? $single->display_register_button_widget($single_event_obj); ?>
            </div>
            <section class="the-event__related-events">
                <? $single->display_related_posts_widget($single_event_obj); ?>
            </section>
            <div class="the-event__booking">
                <? $single->display_booking_widget($single_event_obj, $single_event_main); ?>
            </div>
            <!-- COMMENTS -->
            <aside class="the-sidebar">
                <div class="the-sidebar__header">
                    <h2>More Info</h2>
                </div>
                <div class="the-sidebar__occurences">
                    <? $single->display_next_prev_widget($single_event_obj); ?>
                </div>
                <div class="the-sidebar__social">
                    <? $single->display_social_widget($single_event_obj); ?>
                </div>
                <div class="the-sidebar__schedule">
                    <? $single->display_hourly_schedules_widget($single_event_obj); ?>
                </div>
                <div class="the-sidebar__calendar">
                    <? $single->display_export_widget($single_event_obj); ?>
                </div>
            </aside>
        </div>
    </article>
    <?php endwhile; ?>
</div>

<?php get_footer(); ?>
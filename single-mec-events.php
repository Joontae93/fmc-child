<?php

// =============================================================================
// Modern Events Calendar Single, based on (No Container | Header, Footer)
// =============================================================================

get_header();
?>
<style>
@media only screen and (min-width:49rem) {
    body {
        overflow-x: unset;
    }
}
</style>
<div class="x-main full" role="main">
    <div class="x-container max width">
        <?php while (have_posts()) : ?>
        <?
            the_post();
            $single = new MEC_skin_single();
            $single_event_main = $single->get_event_mec(get_the_ID());
            $single_event_obj = $single_event_main[0];
            $tags = get_the_tags();
            ?>
        <aside class="mec-breadcrumbs">
            <? $single->display_breadcrumb_widget(get_the_ID()); ?>
        </aside>
        <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
            <div class="the-event">
                <div class="x-col">
                    <figure class="the-event__image">
                        <? the_post_thumbnail('full'); ?>
                    </figure>
                    <aside class="the-event__meta the-event-meta">
                        <div class="the-event-meta__countdown">
                            <? $single->display_countdown_widget($single_event_main); ?>
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
                    <section class="the-event__content">
                        <h1 class="the-event__content--title">
                            <? the_title(); ?>
                        </h1>
                        <? the_content(); ?>
                    </section>
                    <div class="the-event__register">
                        <? $single->display_register_button_widget($single_event_obj); ?>
                    </div>
                    <aside class="the-event__hourly-schedule">
                        <? $single->display_hourly_schedules_widget($single_event_obj); ?>
                    </aside>
                    <section class="the-event__related-events">
                        <? $single->display_related_posts_widget($single_event_obj); ?>
                    </section>
                    <div class="the-event__booking">
                        <? $single->display_booking_widget($single_event_obj, $single_event_main); ?>
                    </div>
                </div>
                <div class="x-col">
                    <aside class="the-sidebar">
                        <h2 class="the-sidebar__header">More Info</h2>
                        <div class="the-event-meta">
                            <div class="the-event-meta__date">
                                <? $single->display_date_widget($single_event_obj); ?>
                            </div>
                            <div class="the-event-meta__time">
                                <? $single->display_time_widget($single_event_obj); ?>
                            </div>
                            <div class="the-event-meta__location">
                                <? $single->display_location_widget(get_the_ID()); ?>
                                <? $single->show_other_locations($single_event_obj); ?>
                            </div>
                            <div class="the-event-meta__cost">
                                <? $single->display_cost_widget($single_event_obj); ?>
                            </div>
                        </div>


                        <div class="the-sidebar__occurences">
                            <? $single->display_next_prev_widget($single_event_obj); ?>
                        </div>
                        <div class="the-sidebar__social">
                            <? $single->display_social_widget($single_event_obj); ?>
                        </div>
                        <div class="the-sidebar__calendar">
                            <? $single->display_export_widget($single_event_obj); ?>
                        </div>
                    </aside>
                </div>
            </div>
        </article>
        <?php endwhile; ?>
    </div>
</div>

<?php get_footer(); ?>
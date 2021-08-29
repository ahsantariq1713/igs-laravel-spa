import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Example extends Vue {
    title = "Welcome";
    message = "Laravel SPA with Inertia js in Vue Scaffolding using React programming style with Nuxt SEO method.";

    render() {
        return (
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-8">
                        <div class="card">
                            <div class="card-header">{this.title}</div>
                            <div class="card-body">{this.message}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
